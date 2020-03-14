import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Thumbnail } from '@ionic/angular';

@Component({
  selector: 'app-single-pic',
  templateUrl: './single-pic.page.html',
  styleUrls: ['./single-pic.page.scss'],
})
export class SinglePicPage implements OnInit {
  isFlashMode: boolean = false;
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

  async capture() {
    this.restService.takePicture();
  }

  async manageFlashMode() {
    if(this.isFlashMode){
      this.isFlashMode = false;
      await this.restService.manageFlashMode(2);
    } else {
      this.isFlashMode = true;
      await this.restService.manageFlashMode(1);
    }
  }


}
