import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-multiple-pics',
  templateUrl: './multiple-pics.page.html',
  styleUrls: ['./multiple-pics.page.scss'],
})
export class MultiplePicsPage implements OnInit {
  pictureData: any = {
    status: true,
    data: {}
  }
  scanStatus: boolean = true;
  constructor(
    private restService: RestService,
    private events: Events
  ) {
    this.events.subscribe('pictureData', (data) => {
      this.pictureData = data;
      this.scanStatus = true;
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.scanStatus = false;
    this.restService.stopCamera();
  }

  stop() {
    this.scanStatus = false;
    this.restService.stopCamera();
  }

}
