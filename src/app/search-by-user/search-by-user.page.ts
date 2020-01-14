import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';

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
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToBack(type) {
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
        this.navCtrl.goBack('/home');
      }
    } else {
      this.navCtrl.goBack('/home');
    }
  }

}
