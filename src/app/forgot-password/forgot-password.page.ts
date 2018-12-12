import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  appLogo: string = 'assets/icon/login_logo.png';
  email: string = '';
  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
  }

  forgotPassword() {
    if (this.email == '' || this.email == undefined) {
      this.restService.showToast('Please enter email address');
    } else {
      let requestData = {
        sp_action: "sp_lost_password",
        user_login: this.email,
      }
      this.restService.showLoader('We are sending your request');
      this.restService.makeCommonPostRequest(requestData).then(async (result) => {
        this.restService.hideLoader();
        if (result['sp_error']) {
          this.restService.showAlert('Error', result['sp_error']);
        } else {
          this.restService.showAlert('Success', result['sp_message']);
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
