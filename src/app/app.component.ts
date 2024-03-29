import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestService } from './rest.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private restService: RestService,
    private nativeAudio: NativeAudio
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
    try {
      await this.nativeAudio.preloadSimple('permitFound', 'assets/sound/PermitFound.wav');
      this.restService.permitFoundReady = true;
    } catch(err) {
      if(err === 'A reference already exists for the specified audio id.') {
        this.restService.permitFoundReady = true;
      } else {
        this.restService.permitFoundReady = false;
      }
    }

    try {
      await this.nativeAudio.preloadSimple('permitNotFound', 'assets/sound/NoPermitFound.wav');
      this.restService.permitNotFoundReady = true;
    } catch(err) {
      if(err === 'A reference already exists for the specified audio id.') {
        this.restService.permitNotFoundReady = true;
      } else {
        this.restService.permitNotFoundReady = false;
      }
    }
  }
}
