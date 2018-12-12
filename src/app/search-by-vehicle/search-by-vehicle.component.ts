import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search-by-vehicle',
  templateUrl: './search-by-vehicle.component.html',
  styleUrls: ['./search-by-vehicle.component.scss']
})
export class SearchByVehicleComponent {
  make: string = '';
  model: string = '';
  year: string = '';
  vin: string = '';
  plate: string = '';
  constructor(
    private modalCtrl: ModalController,
    private restService: RestService
  ) { }
  appLogo: string = 'assets/icon/inner_header_logo.png';


  closeModal(type) {
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
        this.modalCtrl.dismiss(data);
      }
    } else {
      let data = {}
      this.modalCtrl.dismiss(data);
    }
  }

}
