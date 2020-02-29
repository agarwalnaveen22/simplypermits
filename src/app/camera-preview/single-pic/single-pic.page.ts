import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-single-pic',
  templateUrl: './single-pic.page.html',
  styleUrls: ['./single-pic.page.scss'],
})
export class SinglePicPage implements OnInit {
  constructor(
    private restService: RestService,
    private screenOrientation: ScreenOrientation,
  ) {
    this.screenOrientation.onChange().subscribe(
      async () => {
        await this.restService.stopCameraPreview();
        await this.restService.startCameraPreview();
      }
    );
  }

  ngOnInit() {
  }

  goBack() {
    this.restService.stopCamera();
  }

  capture() {
    this.restService.takePicture();
  }


}
