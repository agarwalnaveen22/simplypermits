import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-by-vehicle',
  templateUrl: './search-by-vehicle.page.html',
  styleUrls: ['./search-by-vehicle.page.scss'],
})
export class SearchByVehiclePage implements OnInit {
  make: string = '';
  model: string = '';
  year: string = '';
  vin: string = '';
  plate: string = '';
  showProperty: boolean = false;
  pageName: string = 'SEARCH BY VEHICLE';
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
    if (this.make == '' && this.model == '' && this.year == '' && this.vin == '' && this.plate == '') {
      this.restService.showAlert('Error', 'Please enter some input');
    } else {
      this.searchManualVehicle();
    }
  }

  async searchManualVehicle() {
    let requestData = {
      sp_action: "sp_search_permit_by_vehicle",
      selected_cat: this.restService.selectedProperty,
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
          this.make = '';
          this.model = '';
          this.year = '';
          this.vin = '';
          this.plate = '';
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
