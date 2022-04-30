import { Component, OnInit, NgZone } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cities: any = [];
  username: string = '';
  password: string = '';
  city: string = '';
  forgotPasswordLink: string = '';
  appLogo: string = 'assets/icon/login_logo.png';
  deviceMode: string = '';
  colSize: number = 12;
  constructor(
    private restService: RestService,
    private navCtrl: NavController,
    private zone: NgZone,
    private iab: InAppBrowser,
    private screenOrientation: ScreenOrientation
  ) {
  }

  ngOnInit() {
    this.getCities();
    this.deviceMode = this.screenOrientation.type;
    if (this.deviceMode == 'landscape-primary' || this.deviceMode == 'landscape-secondary') {
      this.colSize = 6;
    }

    this.screenOrientation.onChange().subscribe(
      () => {
        this.deviceMode = this.screenOrientation.type;
        if (this.deviceMode == 'landscape-primary' || this.deviceMode == 'landscape-secondary') {
          this.colSize = 6;
        } else {
          this.colSize = 12;
        }
      }
    );
  }

  async changeApiUrl() {
    console.log(this.city);
    if (this.city !== undefined) {
      let fglink = this.city.split("|");
      console.log(fglink)
      this.forgotPasswordLink = fglink[1];
      await this.restService.setStorage("cityApiUrl", fglink[0]);
      this.restService.cityApiUrl = fglink[0];
      console.log(this.restService.cityApiUrl)
    }
  }

  getCities() {
    this.restService.showLoader('Loading cities...');

    let requestData = {
      sp_action: "sp_lpr_cities_list"
    }
    this.restService.makeCommonGetRequest(requestData).then((result) => {
      this.restService.hideLoader();
      this.cities = result['CityApiList'];
      console.log(this.cities);
    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  openForgotPassword() {
    if (this.city == '' || this.city == undefined) {
      this.restService.showToast('Please select a city');
    } else {
      this.iab.create(this.forgotPasswordLink);
    }
  }

  login = async () => {
    if (this.city == '' || this.city == undefined) {
      this.restService.showToast('Please select a city');
    } else if (this.username == '') {
      this.restService.showToast('Please enter username');
    } else if (this.password == '') {
      this.restService.showToast('Please enter password');
    } else {
      await this.restService.keyBoardHide();
      this.restService.showLoader('Logging in...');
      let requestData = {
        sp_action: "sp_lpr_login",
        sp_user_login: this.username,
        sp_user_password: this.password
      }
      this.restService.makePostRequest(requestData).then(async (result) => {
        this.restService.hideLoader();
        if (!result['sp_error']) {
          await this.restService.setStorage("session_id", result['session_id']);
          let response = await this.restService.setStorage("userInfo", result['sp_user']);
          if (response) {
            this.navCtrl.goRoot("/home");
            this.restService.checkLoginStatus();
          }
        } else {
          this.restService.showAlert('Error', result['sp_error']);
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
  }

}
