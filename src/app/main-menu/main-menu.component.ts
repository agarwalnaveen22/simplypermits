import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { PopoverController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  constructor(
    private restService: RestService,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
  }

  async goToPage(pageName) {
    await this.popoverCtrl.dismiss();
    this.navCtrl.goForward(pageName);
  }

  async logout() {
    await this.popoverCtrl.dismiss();
    this.restService.systemLogout();
  }

  async scanImage() {
    await this.popoverCtrl.dismiss();
    this.restService.takePicture(this.restService.selectedProperty);
  }

  async viewVehicleSearchForm() {
    await this.popoverCtrl.dismiss();
    this.restService.viewVehicleSearchForm();
  }

  async viewUserSearchForm() {
    await this.popoverCtrl.dismiss();
    this.restService.viewUserSearchForm();
  }

}
