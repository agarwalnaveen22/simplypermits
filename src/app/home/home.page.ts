import { Component, NgZone } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanImage: string = 'assets/icon/scan_img.png';
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
  property: number = 0;
  showProperty: boolean = true;
  pageName: string = 'HOME';
  constructor(
    private restService: RestService,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    screenOrientation: ScreenOrientation
  ) {
    this.checkRole();
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

  viewVehicleSearchForm() {
    this.restService.viewVehicleSearchForm();
  }

  viewUserSearchForm() {
    this.restService.viewUserSearchForm();
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


  getPropertyId = (event) => {
    this.property = event;
  }

  takePicture() {
    this.restService.takePicture(this.property);
  }


}
