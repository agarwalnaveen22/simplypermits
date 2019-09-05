import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController, ToastController, NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://simplypermits.com/API/rest.php';
  cityApiUrl: string = '';
  loading: any;
  alert: any;
  checkSession: any;
  isKeyBoardHide: boolean = false;

  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private modalCtrl: ModalController,
    private storage: Storage,
    private navCtrl: NavController,
    private keyboard: Keyboard,
  ) { }

  async showLoader(message) {
    this.loading = await this.loadingController.create({
      spinner: 'hide',
      content: `<div class="loading-outer"><div class="loader"></div>
      <img src="assets/icon/logo.png" /></div>
              <div style="margin-top:2em">`+ message + `</div>`
    });
    await this.loading.present();
    document.getElementsByClassName("loading-content")[0].innerHTML = document.getElementsByClassName("loading-content")[0].textContent;
    (<HTMLElement>document.getElementsByClassName("loading-wrapper")[0]).style.visibility = 'visible';
    (<HTMLElement>document.getElementsByClassName("backdrop-no-tappable")[0]).style.opacity = '1';
    return;
  }

  hideLoader() {
    if ((<HTMLElement>document.getElementsByClassName("backdrop-no-tappable")[0]) === undefined) {
      return;
    }
    (<HTMLElement>document.getElementsByClassName("backdrop-no-tappable")[0]).style.opacity = '0.5';
    this.loading.dismiss();
  }

  async showAlert(header, message) {
    this.alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await this.alert.present();
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async setStorage(key, value) {
    return await this.storage.set(key, value);
  }

  async getStorage(key) {
    let promise = new Promise((resolve) => {
      this.storage.get(key).then((val) => {
        resolve(val);
      })
    })
    return await promise;
  }

  async removeStorage(key) {
    return await this.storage.remove(key);
  }

  setErrorMessageArray(msg) {
    return msg.join("<br/>");
  }

  setUrl(requestData) {
    return Object.keys(requestData).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(requestData[key]);
    }).join('&');
  }

  async systemLogout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: async () => {
            this.logout(1);
          }
        }
      ]
    });

    await alert.present();
  }

  logout = async (type) => {
    if (type === 1) {
      let requestData = {
        sp_action: "sp_lpr_logout"
      }
      await this.keyBoardHide();
      this.showLoader('Logging out...');
      try {
        await this.makePostRequest(requestData);
        this.hideLoader();
      } catch (error) {
        console.log(error);
      }
    }
    this.storage.clear();
    this.navCtrl.goRoot("/login");
  }

  sessionExpireAction = () => {
    clearInterval(this.checkSession);
    this.hideLoader();
    this.modalCtrl.dismiss();
    this.logout(2);
    this.showAlert("Error", "Your session has expired. Please login to continue.");
  }

  setSessionId = async (data) => {
    try {
      data['session_id'] = await this.getStorage('session_id');
      let response = await this.getStorage('userInfo');
      data['user_id'] = response['user_id'];
      return data;
    } catch (error) {
      this.logout(2);
    }
  }

  checkLoginStatus = async () => {
    this.checkSession = setInterval(async () => {
      let requestData = {
        sp_action: "sp_check_session"
      }
      try {
        await this.makePostRequest(requestData);
      } catch (error) {
        this.logout(2);
      }
    }, 30000);
  }


  makeCommonGetRequest(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: data
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  async makeGetRequest(data) {
    data = await this.setSessionId(data);
    return new Promise((resolve, reject) => {
      this.http.get(this.cityApiUrl, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        params: data
      })
        .subscribe(res => {
          if (res['session_status'] === "Invalid Session") {
            this.sessionExpireAction();
            return;
          }
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  makeCommonPostRequest(data) {
    data = this.setUrl(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  async makePostRequest(data) {
    if (data['sp_action'] !== 'sp_lpr_login') {
      data = await this.setSessionId(data);
    }
    data = this.setUrl(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.cityApiUrl, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
        .subscribe(res => {
          if (res['session_status'] === "Invalid Session") {
            this.sessionExpireAction();
            return;
          }
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  keyBoardHide = async () => {
    return new Promise((resolve) => {
      this.keyboard.hide();
      this.checkKeyBoardVisible();
      var keyboardhideint = setInterval(async () => {
        if(this.isKeyBoardHide){
          this.isKeyBoardHide = false;
          clearInterval(keyboardhideint);
          resolve();
        }
      }, 100);
    });
  }

  checkKeyBoardVisible = async () => {
    if (this.keyboard.isVisible) {
      setTimeout(async () => {
        this.checkKeyBoardVisible();
      }, 50);
    } else {
      this.isKeyBoardHide = true;
    }
  }

}
