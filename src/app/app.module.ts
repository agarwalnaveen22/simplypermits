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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNoteComponent } from './add-note/add-note.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { AuthGuardService } from './auth-guard.service';
import { SearchByVehicleComponent } from './search-by-vehicle/search-by-vehicle.component';
import { SearchByUserComponent } from './search-by-user/search-by-user.component';
import { DISABLED } from '@angular/forms/src/model';

@NgModule({
  declarations: [AppComponent, AddNoteComponent, ViewNotesComponent, ImagePreviewComponent, SearchByVehicleComponent, SearchByUserComponent],
  entryComponents: [AddNoteComponent, ViewNotesComponent, ImagePreviewComponent, SearchByVehicleComponent, SearchByUserComponent],
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
