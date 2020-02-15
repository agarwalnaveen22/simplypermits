import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-by-user',
  templateUrl: './search-by-user.page.html',
  styleUrls: ['./search-by-user.page.scss'],
})
export class SearchByUserPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  residentUnit: string = '';
  email: string = '';
  phone: string = '';
  showProperty: boolean = false;
  pageName: string = 'SEARCH BY USER';
  constructor(
    private restService: RestService,
    private navCtrl: NavController,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goToBack() {
    this.location.back();
  }

  submitForm() {
    if (this.firstName == '' && this.lastName == '' && this.residentUnit == '' && this.email == '' && this.phone == '') {
      this.restService.showAlert('Error', 'Please enter some input');
    } else {
      this.searchManualUser();
    }
  }

  async searchManualUser() {
    let requestData = {
      sp_action: "sp_search_permit_by_user",
      selected_cat: this.restService.selectedProperty,
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
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.phone = '';
          this.residentUnit = '';
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

}
