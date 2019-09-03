import { Component, NgZone } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { RestService } from '../rest.service';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { SearchByVehicleComponent } from '../search-by-vehicle/search-by-vehicle.component';
import { SearchByUserComponent } from '../search-by-user/search-by-user.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  scanImage: string = 'assets/icon/scan_img.png';
  property: number = 0;
  properties: any = [];
  make: string = '';
  model: string = '';
  year: string = '';
  vin: string = '';
  plate: string = '';
  firstName: string = '';
  lastName: string = '';
  residentUnit: string = '';
  email: string = '';
  phone: string = '';
  selectedImage: string = '';
  isEnforcement: boolean = false;
  deviceMode: string = '';
  colSize1: number = 12;
  colSize2: number = 12;
  constructor(
    private camera: Camera,
    private restService: RestService,
    private imageResizer: ImageResizer,
    private transfer: FileTransfer,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private zone: NgZone,
    private navCtrl: NavController,
    private screenOrientation: ScreenOrientation
  ) {
    this.checkRole();
    this.getProperties();
    this.deviceMode = screenOrientation.type;
    if (this.deviceMode == 'landscape-primary' || this.deviceMode == 'landscape-secondary') {
      this.colSize1 = 5;
      this.colSize2 = 7;
    }

    screenOrientation.onChange().subscribe(
      () => {
        this.deviceMode = screenOrientation.type;
        if (this.deviceMode == 'landscape-primary' || this.deviceMode == 'landscape-secondary') {
          this.colSize1 = 5;
          this.colSize2 = 7;
        } else {
          this.colSize1 = 12;
          this.colSize2 = 12;
        }
      }
    );
  }

  logout() {
    this.restService.systemLogout();
  }

  async getProperties() {
    let requestData = {
      sp_action: "sp_get_property_list",
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Fetching Properties');
    this.restService.makePostRequest(requestData).then((result) => {
      this.restService.hideLoader();
      this.zone.run(async () => {
        this.properties = result['Properties'];
      });
      console.log(this.properties);
    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  async viewVehicleSearchForm() {
    if (this.property == 0 || this.property == undefined) {
      this.restService.showToast("Please select property");
    } else {
      const modal = await this.modalController.create({
        component: SearchByVehicleComponent
      });
      modal.onDidDismiss(data => {
        if (Object.keys(data.data).length > 0) {
          this.make = data.data.make;
          this.model = data.data.model;
          this.year = data.data.year;
          this.vin = data.data.vin;
          this.plate = data.data.plate;
          this.searchManualVehicle();
        }
      });
      return await modal.present();
    }
  }

  async viewUserSearchForm() {
    if (this.property == 0 || this.property == undefined) {
      this.restService.showToast("Please select property");
    } else {
      const modal = await this.modalController.create({
        component: SearchByUserComponent
      });
      modal.onDidDismiss(data => {
        if (Object.keys(data.data).length > 0) {
          this.firstName = data.data.firstName;
          this.lastName = data.data.lastName;
          this.residentUnit = data.data.residentUnit;
          this.email = data.data.email;
          this.phone = data.data.phone;
          this.searchManualUser();
        }
      });
      return await modal.present();
    }
  }

  async searchManualVehicle() {
    let requestData = {
      sp_action: "sp_search_permit_by_vehicle",
      selected_cat: this.property,
      vehicle_make: this.make,
      vehicle_model: this.model,
      vehicle_year: this.year,
      vehicle_vin: this.vin,
      vehicle_plate: this.plate
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Searching Vehicles');
    this.restService.makeGetRequest(requestData).then(async (result) => {
      this.restService.hideLoader();
      if (result['json'] && result['json'].length > 0) {
        await this.restService.setStorage("userData", []);
        let response = await this.restService.setStorage("vehicleData", result['json']);
        if (response) {
          this.navCtrl.goForward("/property-list");
        }
      } else {
        this.restService.showAlert("Notice", "No vehicles found");
      }
    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  async searchManualUser() {
    let requestData = {
      sp_action: "sp_search_permit_by_user",
      selected_cat: this.property,
      first_name: this.firstName,
      last_name: this.lastName,
      email_address: this.email,
      phone_number: this.phone,
      unit_number: this.residentUnit
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Searching Users');
    this.restService.makeGetRequest(requestData).then(async (result) => {
      this.restService.hideLoader();
      if (result['json'] && result['json'].length > 0) {
        await this.restService.setStorage("vehicleData", []);
        let response = await this.restService.setStorage("userData", result['json']);
        if (response) {
          this.navCtrl.goForward("/property-list");
        }
      } else {
        this.restService.showAlert("Notice", "No vehicles found");
      }

    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  async takePicture() {
    if (this.property == 0 || this.property == undefined) {
      this.restService.showToast("Please select property");
    } else {
      let options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
      options['sourceType'] = 1;
      this.launchProgram(options);
    }
  }

  launchProgram(options) {
    this.camera.getPicture(options).then((imageData) => {
      this.selectedImage = imageData;
      this.viewPicture();

    }, (err) => {
      this.restService.showAlert("Notice", JSON.stringify(err));
    });
  }

  async viewPicture() {
    this.scanPlate();
  }

  async scanPlate() {
    let options: FileUploadOptions = {
      fileKey: 'uploadFileName',
      fileName: 'name.jpg',
      chunkedMode: false,
      mimeType: "multipart/form-data"
    }
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.restService.showLoader('Sending Image');
    let sessionId = await this.restService.getStorage('session_id');
    let userId = await this.restService.getStorage('userInfo');
    fileTransfer.upload(this.selectedImage, this.restService.cityApiUrl + "?sp_action=sp_permit_check_vehicle_image&selected_cat=" + this.property+"&session_id="+sessionId+"&user_id="+userId['user_id'], options)
      .then(async (result) => {
        this.restService.hideLoader();
        console.log(result)
        result = JSON.parse(result.response);
        if (result['json'].length > 0) {
          // this.zone.run(() => {
          //   this.vehicleData = result['json'];
          // });
          await this.restService.setStorage("userData", []);
          let response = await this.restService.setStorage("vehicleData", result['json']);
          if (response) {
            this.navCtrl.goForward("/property-list");
          }
        } else {
          let response = await this.restService.setStorage("plateData", result['plateData']);
          if (response) {
            this.navCtrl.goForward("/no-permit-result");
          }
        }
      }, (err) => {
        this.restService.hideLoader();
        this.restService.showAlert("Notice", JSON.stringify(err));
      })
  }

  async checkRole() {
    try {
      let response = await this.restService.getStorage("userInfo");
      let userRoles = response["roles"];
      if (userRoles.indexOf("enforcement") !== -1) {
        this.isEnforcement = true;
      }
    } catch (error) {
      console.log(error);
      this.navCtrl.goRoot('/login');
    }
  }




}
