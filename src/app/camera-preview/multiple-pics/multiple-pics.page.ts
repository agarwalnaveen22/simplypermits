import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { Events, NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-multiple-pics',
  templateUrl: './multiple-pics.page.html',
  styleUrls: ['./multiple-pics.page.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('600ms')),
      transition('out => in', animate('300ms')),
    ])
  ]
})
export class MultiplePicsPage implements OnInit {
  pictureData: any = [];
  scanStatus: boolean = false;
  plateDataCounter: number = -1;
  constructor(
    private restService: RestService,
    private events: Events,
    private screenOrientation: ScreenOrientation,
    private navCtrl: NavController
  ) {
    this.events.subscribe('pictureData', (data) => {
      this.plateDataCounter++;
      let plateData = data;
      plateData['animationType'] = 'in';
      this.pictureData.push(plateData);
      let counter = this.plateDataCounter;
      setTimeout(() => {
        this.pictureData[counter]['animationType'] = 'out';
      }, 5000);
      this.scanStatus = true;
    });

    this.screenOrientation.onChange().subscribe(
      async () => {
        await this.restService.stopCameraPreview();
        await this.restService.startCameraPreview();
      }
    );
  }

  ngOnInit() {
  }

  async goBack() {
    this.scanStatus = false;
    await this.restService.stopCamera();
  }

  async start() {
    this.scanStatus = true;
    await this.restService.takeMultiplePictures();
  }

  async stop() {
    this.scanStatus = false;
    await this.restService.stopCamera();
  }

  async goToDetail(serialNumber) {
    this.scanStatus = false;
    this.restService.lastLprNumber = '';
    await this.restService.stopCameraPreview();
    await this.restService.setStorage("userData", []);
    let response = await this.restService.setStorage("vehicleData", [this.pictureData[serialNumber].data]);
    if (response) {
      this.navCtrl.goForward("/permit-detail/"+this.pictureData[serialNumber].data.permit_id);
    }
  }

  async manageFlashMode(mode) {
    await this.restService.manageFlashMode(mode);
  }

}
