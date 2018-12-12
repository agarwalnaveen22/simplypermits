import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private restService: RestService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.splashScreen.hide();
      this.statusBar.styleLightContent();
      this.setUrl();
    });
  }

  setUrl = async () => {
    let resp = await this.restService.getStorage("cityApiUrl");
    if(resp!=null){
      this.restService.cityApiUrl = resp.toString();
    }
  }
}
