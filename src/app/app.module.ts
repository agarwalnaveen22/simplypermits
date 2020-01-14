import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { NgProgressModule } from '@ngx-progressbar/core';
import { Base64 } from '@ionic-native/base64/ngx';
import { ImageResizer } from '@ionic-native/image-resizer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { AuthGuardService } from './auth-guard.service';
import { DISABLED } from '@angular/forms/src/model';
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
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImageResizer,
    Base64,
    FileTransfer,
    AuthGuardService,
    InAppBrowser,
    HTTP,
    Device,
    ScreenOrientation,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
