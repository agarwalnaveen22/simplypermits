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
        await this.restService.stopCameraPreview();
        await this.restService.startCameraPreview();
      }
    );
  }

  ngOnInit() {
  }

  async goBack() {
    this.zone.run(async () => {
      this.scanStatus = false;
      this.restService.isTakeMultiplePics = false;
      try {
        await this.restService.stopCamera();
        await this.powerManagement.release();
      } catch (error) {
        console.log(JSON.stringify(error));
      }
      
    });
  }

  async start() {
    this.zone.run(async () => {
      this.scanStatus = true;
      this.restService.isTakeMultiplePics = true;
      try {
        await this.powerManagement.acquire();
        await this.restService.takeMultiplePictures();
      } catch (error) {
        this.restService.showToast(JSON.stringify(error));
      }
    });
  }

  async stop() {
    this.zone.run(async () => {
      this.scanStatus = false;
      this.restService.isTakeMultiplePics = false;
      try {
        await this.powerManagement.release();
      } catch (error) {
        this.restService.showToast(JSON.stringify(error));
      }
    });
  }

  async goToDetail(serialNumber) {
    this.scanStatus = false;
    this.restService.lastLprNumber = '';
    await this.restService.stopCameraPreview();
    await this.restService.setStorage("userData", []);
    let response = await this.restService.setStorage("vehicleData", [this.pictureData[serialNumber].data]);
    if (response) {
      this.navCtrl.goForward("/permit-detail/" + this.pictureData[serialNumber].data.permit_id);
    }
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
