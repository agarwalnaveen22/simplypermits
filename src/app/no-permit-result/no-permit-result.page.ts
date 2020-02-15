import { Component, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-permit-result',
  templateUrl: './no-permit-result.page.html',
  styleUrls: ['./no-permit-result.page.scss'],
})
export class NoPermitResultPage {
  appLogo: string = 'assets/icon/round_logo.png';
  plateData: any = {};
  constructor(
    private navCtrl: NavController,
    private restService: RestService,
    private zone: NgZone,
    private location: Location
  ) {
    this.getData();
   }

  async getData() {
    this.zone.run(async () => {
      this.plateData = await this.restService.getStorage("plateData");
    });
  }

  goBack() {
    this.location.back();
  }

  goToHome() {
    this.navCtrl.goRoot("/home");
  }
}
