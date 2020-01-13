import { Component, OnInit, NgZone, Output, EventEmitter, Input } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  lprImage: string = 'assets/icon/camera_icon.png';
  properties: any = [];
  @Output() selectedProperty = new EventEmitter();
  @Input() showProperty: boolean;
  @Input() pageName: string;
  constructor(
    public popoverController: PopoverController,
    private restService: RestService,
    private zone: NgZone,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    if(this.showProperty){
      this.getProperties();
    }
  }

  async getProperties() {
    let requestData = {
      sp_action: "sp_get_property_list",
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Fetching Properties');
    this.restService.makePostRequest(requestData).then((result) => {
      this.restService.hideLoader();
      this.zone.run(async () => {
        this.properties = result['Properties'];
      });
    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  async presentMainMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MainMenuComponent,
      event: ev,
      translucent: true,
      cssClass: 'main-menu'
    });
    return await popover.present();
  }

  goToHome() {
    this.navCtrl.goBack('/home');
  }

  selectProperty = (event) => {
    this.selectedProperty.emit(event.target.value);
  }

}
