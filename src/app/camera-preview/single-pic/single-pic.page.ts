import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-single-pic',
  templateUrl: './single-pic.page.html',
  styleUrls: ['./single-pic.page.scss'],
})
export class SinglePicPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private restService: RestService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.restService.stopCamera();
  }

  capture() {
    this.restService.takePicture();
  }

}
