import { Component, OnInit, NgZone } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
})
export class PropertyListPage implements OnInit {
  vehicleData: any = [];
  userData: any = [];
  showProperty: boolean = false;
  pageName: string = 'SEARCH RESULTS';
  constructor(
    private restService: RestService,
    private navCtrl: NavController,
    private zone: NgZone
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  async getData() {
    this.zone.run(async () => {
      this.vehicleData = await this.restService.getStorage("vehicleData");
      this.userData = await this.restService.getStorage("userData");
      this.vehicleData = this.vehicleData == null ? [] : this.vehicleData;
      this.userData = this.userData == null ? [] : this.userData;
    });
  }

  goBack() {
    this.navCtrl.goBack('/home');
  }

  goToHome() {
    this.navCtrl.goRoot("/home");
  }

  refreshData(event) {
    this.getData();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
