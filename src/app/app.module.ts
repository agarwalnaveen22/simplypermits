import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgProgressModule } from '@ngx-progressbar/core';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { PowerManagement } from '@ionic-native/power-management/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { AuthGuardService } from './auth-guard.service';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [AppComponent, ImagePreviewComponent, MainMenuComponent],
  entryComponents: [ImagePreviewComponent, MainMenuComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({mode: 'md', scrollAssist: 'DISABLED'}), 
    AppRoutingModule, 
    NgProgressModule.forRoot(),
    IonicStorageModule.forRoot(), 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    Diagnostic,
    LocationAccuracy,
    Geolocation,
    Base64,
    FileTransfer,
    AuthGuardService,
    InAppBrowser,
    HTTP,
    Device,
    ScreenOrientation,
    Keyboard,
    NativeAudio,
    PowerManagement,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
