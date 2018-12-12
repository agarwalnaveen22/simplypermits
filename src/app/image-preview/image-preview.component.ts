import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  selectedImage: SafeUrl;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private base64: Base64,
    private domSanitizer : DomSanitizer
  ) {
    base64.encodeFile(navParams.get("imageData")).then((base64File: string) => {
      console.log(base64File);
      this.selectedImage = domSanitizer.bypassSecurityTrustUrl(base64File);
    }, (err) => {
      alert(JSON.stringify(err));
    });
   }

  ngOnInit() {
  }

  closeModal(type) {
    let data = { type: type }
    this.modalCtrl.dismiss(data);
  }

}
