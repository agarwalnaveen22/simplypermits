import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://simplypermits.com/API/rest.php';
  cityApiUrl: string = '';
  loading: any;
  alert: any;

  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private storage: Storage,
    private navCtrl: NavController,
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
            this.storage.clear();
            this.navCtrl.goRoot("/login");
          }
        }
      ]
    });

    await alert.present();
  }


  // makeGetRequest(data, loadingText) {
  //   let cthis = this;
  //   // cthis.showLoader(loadingText);
  //   alert(this.cityApiUrl);
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.cityApiUrl, data, {'Content-Type': 'application/json'})
  //     .then(res => {
  //       alert("success");
  //       alert(JSON.stringify(res));
  //       // cthis.hideLoader();
  //       resolve(JSON.parse(res['data']));
  //     })
  //     .catch(err => {
  //       alert("error");
  //       alert(JSON.stringify(err));
  //       // cthis.hideLoader();
  //       reject(err);
  //     });
  //   });
  // }

  // makeCommonGetRequest(data, loadingText) {
  //   let cthis = this;
  //   cthis.showLoader(loadingText);
  //   return new Promise((resolve, reject) => {
  //     this.http.get(this.apiUrl, data, {'Content-Type': 'application/json'})
  //     .then(res => {
  //       cthis.hideLoader();
  //       resolve(JSON.parse(res['data']));
  //     })
  //     .catch(err => {
  //       cthis.hideLoader();
  //       reject(err);
  //     });
  //   });
  // }

  // makeCommonPostRequest(data, loadingText) {
  //   this.http.setDataSerializer("json");
  //   let cthis = this;
  //   cthis.showLoader(loadingText);
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl, data, {'Content-Type': 'application/json'})
  //     .then(res => {
  //       cthis.hideLoader();
  //       resolve(JSON.parse(res['data']));
  //     })
  //     .catch(err => {
  //       cthis.hideLoader();
  //       reject(err);
  //     });
  //   });
  // }

  // makePostRequest(data, loadingText) {
  //   this.http.setDataSerializer("json");
  //   this.http.setHeader(this.cityApiUrl, "Accept", "application/json");
  //   this.http.setHeader(this.cityApiUrl, "Content-Type", "application/json");
  //   let cthis = this;
  //   cthis.showLoader(loadingText);
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.cityApiUrl, data, {})
  //     .then(res => {
  //       cthis.hideLoader();
  //       resolve(JSON.parse(res['data']));
  //     })
  //     .catch(err => {
  //       cthis.hideLoader();
  //       reject(err);
  //     });
  //   });
  // }


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
          alert(JSON.stringify(err));
          reject(err);
        });
    });
  }

  makeGetRequest(data) {
    return new Promise((resolve, reject) => {
      this.http.get(this.cityApiUrl, {
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

  makePostRequest(data) {
    data = this.setUrl(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.cityApiUrl, data, {
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

}
