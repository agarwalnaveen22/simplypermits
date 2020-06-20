import { Component, OnInit, Input, NgZone } from '@angular/core';
import { RestService } from '../../rest.service';
import { Events, NavController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PowerManagement } from '@ionic-native/power-management/ngx';

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
  isFlashMode: boolean = false;
  isPowerAcquired: boolean = false;
  constructor(
    private restService: RestService,
    private events: Events,
    private screenOrientation: ScreenOrientation,
    private navCtrl: NavController,
    private zone: NgZone,
    private powerManagement: PowerManagement
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
        await this.reStartCamera();
      }
    );
  }

  ngOnInit() {
  }

  async reStartCamera() {
    try {
      this.zone.run(async () => {
        await this.restService.stopCameraPreview();
        await this.restService.startCameraPreview();
        await this.startCamera();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async goBack() {
    this.zone.run(async () => {
      this.scanStatus = false;
      this.restService.isTakeMultiplePics = false;
      await this.stopCamera();
      await this.disablePowerManagement();
    });
  }

  async start() {
    this.zone.run(async () => {
      this.scanStatus = true;
      this.restService.isTakeMultiplePics = true;
      await this.enablePowerManagement();
      await this.startCamera();
    });
  }

  async enablePowerManagement() {
    if (!this.isPowerAcquired) {
      try {
        let resp = await this.powerManagement.acquire();
        if (resp === 'OK') {
          this.isPowerAcquired = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async startCamera() {
    try {
      await this.restService.takeMultiplePictures();
    } catch (error) {
      console.log(error);
    }
  }

  async stopCamera() {
    try {
      await this.restService.stopCamera();
    } catch (error) {
      console.log(error);
    }
  }

  async disablePowerManagement() {
    if (this.isPowerAcquired) {
      try {
        let resp = await this.powerManagement.release();
        if (resp === 'OK') {
          this.isPowerAcquired = false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async stop() {
    this.zone.run(async () => {
      this.scanStatus = false;
      this.restService.isTakeMultiplePics = false;
      await this.disablePowerManagement();
    });
  }

  async goToDetail(serialNumber) {
    this.zone.run(async () => {
      this.scanStatus = false;
      this.restService.lastLprNumber = '';
      this.restService.isTakeMultiplePics = false;
      await this.stopCamera();
      await this.disablePowerManagement();
      let cthis = this;
      setTimeout(async () => {
        await cthis.restService.setStorage("userData", []);
        let response = await cthis.restService.setStorage("vehicleData", [cthis.pictureData[serialNumber].data]);
        if (response) {
          cthis.navCtrl.goForward("/permit-detail/" + cthis.pictureData[serialNumber].data.permit_id);
        }
      }, 1000);
    });
  }

  async manageFlashMode() {
    if (this.isFlashMode) {
      this.isFlashMode = false;
      await this.restService.manageFlashMode(2);
    } else {
      this.isFlashMode = true;
      await this.restService.manageFlashMode(1);
    }
  }

}
