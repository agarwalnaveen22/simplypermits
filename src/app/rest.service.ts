import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController, ToastController, NavController, ModalController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';


const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: false,
  tapToFocus: false,
  previewDrag: false,
  toBack: true,
  alpha: 1
};

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
  selectedImage: string = '';
  selectedProperty: number = 0;
  latitude: any = 0;
  longitude: any = 0;

  constructor(
    public http: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private modalCtrl: ModalController,
    private storage: Storage,
    private navCtrl: NavController,
    private keyboard: Keyboard,
    private transfer: FileTransfer,
    private cameraPreview: CameraPreview,
    private diagnostic: Diagnostic,
    private platform: Platform,
    private locationAccuracy: LocationAccuracy,
    private geolocation: Geolocation
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
        if (this.isKeyBoardHide) {
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

  async openCameraMultiplePics() {
    try {
      if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
        this.showToast("Please select property");
      } else {
        this.navCtrl.goForward('/multiple-pics');
        await this.cameraPreview.startCamera(cameraPreviewOpts);
        this.cameraPreview.setFocusMode('continuous-picture');
        // setTimeout(async () => {
        //   await this.takeMultiplePictures();
        // }, 2000);
      }
    } catch (error) {
      this.hideLoader();
      this.showAlert("Notice", JSON.stringify(error));
    }
  }

  async takeMultiplePictures() {
    var pic = await this.cameraPreview.takeSnapshot();
    pic = 'data:image/jpeg;base64,' + pic;
    let blobData = this.convertBase64ToBlob(pic);
    await this.checkPermitDetails(blobData);
  }

  async checkPermitDetails(blob) {
    try {
      let fd = new FormData();
      fd.append("image", blob, "image.jpg");
      let resp: any = await this.scanPlateNumber(fd);
      alert(resp.results[0].plate);
    } catch (error) {
      await this.takeMultiplePictures();
    }
  }

  async scanPlateNumber(data) {
    return new Promise((resolve, reject) => {
      this.http.post('https://api.openalpr.com/v2/recognize?secret_key=sk_e643a005c52cdd50198cfd5c&country=us', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  async openCameraSinglePic() {
    try {
      if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
        this.showToast("Please select property");
      } else {
        this.showLoader('Fetching location');
        let coordinates = await this.getCurrentLocation();
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
        this.hideLoader();
        this.navCtrl.goForward('/single-pic');
        await this.cameraPreview.startCamera(cameraPreviewOpts);
      }
    } catch (error) {
      this.hideLoader();
      this.showAlert("Notice", JSON.stringify(error));
    }
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
    this.navCtrl.goBack('/home');
  }

  async takePicture() {
    var pic = await this.cameraPreview.takeSnapshot();
    pic = 'data:image/jpeg;base64,' + pic;
    let blobData = this.convertBase64ToBlob(pic);
    this.sendImageToServer(blobData);
  }

  async sendImageToServer(blob) {
    let fd = new FormData();
    fd.append("uploadFileName", blob, "name.jpg");
    this.showLoader('Sending Image');
    this.stopCamera();
    let sessionId = await this.getStorage('session_id');
    let response = await this.getStorage('userInfo');
    let userId = response['user_id'];
    this.http.post(this.cityApiUrl +
      "?sp_action=sp_permit_check_vehicle_image&selected_cat=" +
      this.selectedProperty + "&session_id=" + sessionId + "&user_id=" +
      userId + "&img_latitude=" + this.latitude + "&img_longitude=" + this.longitude, fd)
      .subscribe(async result => {
        this.hideLoader();
        if (!result['sp_error'] && result['json'].length > 0) {
          await this.setStorage("userData", []);
          let response = await this.setStorage("vehicleData", result['json']);
          if (response) {
            this.navCtrl.goForward("/property-list");
          }
        } else {
          let response = await this.setStorage("plateData", result['plateData']);
          if (response) {
            this.navCtrl.goForward("/no-permit-result");
          }
        }
      }, (err) => {
        this.hideLoader();
        if (err.error) {
          this.showAlert("Notice", this.setErrorMessageArray(err.error.message));
        } else {
          this.showAlert("Notice", err.statusText);
        }
      });
  }

  convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: info.mime });
  }

  getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }

  async viewVehicleSearchForm() {
    if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
      this.showToast("Please select property");
    } else {
      this.navCtrl.goForward('/search-by-vehicle');
    }
  }

  async viewUserSearchForm() {
    if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
      this.showToast("Please select property");
    } else {
      this.navCtrl.goForward('/search-by-user');
    }
  }

  async requestLocationAccuracy() {
    try {
      let locationAuthorizationStatus = await this.diagnostic.getLocationAuthorizationStatus();
      switch (locationAuthorizationStatus) {
        case this.diagnostic.permissionStatus.GRANTED:
          if (!this.platform.is('ios')) {
            await this.makeRequest();
          }
          break;
        case this.diagnostic.permissionStatus.NOT_REQUESTED:
          await this.requestLocationAuthorization();
          break;
        case this.diagnostic.permissionStatus.DENIED:
          if (this.platform.is('android')) {
            this.showToast("User denied permission to use location");
          } else {
            await this.makeRequest();
          }
          break;
        case this.diagnostic.permissionStatus.DENIED_ALWAYS:
          // Android only
          this.showToast("User denied permission to use location");
          break;
      }
    } catch (error) {
      this.showToast("Error: " + error);
    }
  }

  async requestLocationAuthorization() {
    try {
      await this.diagnostic.requestLocationAuthorization();
      this.requestLocationAccuracy();
    } catch (error) {
      this.showToast("Error: " + error);
    }
  }

  async makeRequest() {
    try {
      let canRequest = await this.locationAccuracy.canRequest();
      if (canRequest) {
        await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
      } else {
        this.showToast("Location service is currently in use or app does not have authorization to use location");
      }
    } catch (error) {
      this.showToast("Error: " + error);
    }
  }

  async getCurrentLocation() {
    try {
      await this.requestLocationAccuracy();
      let options: GeolocationOptions = {
        maximumAge: 3000,
        timeout: 2000
      }
      let coordinates = await this.geolocation.getCurrentPosition(options);
      return coordinates.coords;
    } catch (error) {
      this.showToast("Error: " + error);
    }
  }

}
