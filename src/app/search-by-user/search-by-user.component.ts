import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search-by-user',
  templateUrl: './search-by-user.component.html',
  styleUrls: ['./search-by-user.component.scss']
})
export class SearchByUserComponent {
  firstName: string = '';
  lastName: string = '';
  residentUnit: string = '';
  email: string = '';
  phone: string = '';
  constructor(
    private modalCtrl: ModalController,
    private restService: RestService
  ) { }
  appLogo: string = 'assets/icon/inner_header_logo.png';


  closeModal(type) {
    if (type == 1) {
      if (this.firstName == '' && this.lastName == '' && this.residentUnit == '' && this.email == '' && this.phone == '') {
        this.restService.showAlert('Error', 'Please enter some input');
      } else {
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          residentUnit: this.residentUnit,
          email: this.email,
          phone: this.phone
        }
        this.modalCtrl.dismiss(data);
      }
    } else {
      let data = {}
      this.modalCtrl.dismiss(data);
    }


  }

}
