import { Component, OnInit, NgZone } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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
  constructor(
    private restService: RestService,
    private navCtrl: NavController,
    private zone: NgZone,
    private iab: InAppBrowser
  ) {
  }

  ngOnInit() {
    this.getCities();
  }

  async changeApiUrl() {
    console.log(this.city);
    let fglink = this.city.split("|");
    console.log(fglink)
    this.forgotPasswordLink = fglink[1];
    await this.restService.setStorage("cityApiUrl", fglink[0]);
    this.restService.cityApiUrl = fglink[0];
    console.log(this.restService.cityApiUrl)
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

  login = () => {
    if (this.city == '' || this.city == undefined) {
      this.restService.showToast('Please select a city');
    } else if (this.username == '') {
      this.restService.showToast('Please enter username');
    } else if (this.password == '') {
      this.restService.showToast('Please enter password');
    } else {
      this.restService.showLoader('Logging in...');
      let requestData = {
        sp_action: "sp_lpr_login",
        sp_user_login: this.username,
        sp_user_password: this.password
      }
      this.restService.makePostRequest(requestData).then(async (result) => {
        this.restService.hideLoader();
        if (!result['sp_error']) {
          let response = await this.restService.setStorage("userInfo", result['sp_user']);
          if (response) {
            this.navCtrl.goRoot("/home");
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
