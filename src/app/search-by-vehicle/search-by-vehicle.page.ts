import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';

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
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToBack(type) {
    if (type == 1) {
      if (this.make == '' && this.model == '' && this.year == '' && this.vin == '' && this.plate == '') {
        this.restService.showAlert('Error', 'Please enter some input');
      } else {
        let data = {
          make: this.make,
          model: this.model,
          year: this.year,
          vin: this.vin,
          plate: this.plate
        }
        this.navCtrl.goBack('/home');
      }
    } else {
      this.navCtrl.goBack('/home');
    }
  }

}
