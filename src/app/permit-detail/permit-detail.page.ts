import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-permit-detail',
  templateUrl: './permit-detail.page.html',
  styleUrls: ['./permit-detail.page.scss'],
})
export class PermitDetailPage implements OnInit {
  permitData: any = [];
  permitId: number = 0;
  isEnforcement: boolean = false;
  showProperty: boolean = false;
  pageName: string = 'PERMIT DETAILS';
  constructor(
    private modalController: ModalController,
    private restService: RestService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location
  ) {
    this.route.params.subscribe((params: Params) => {
      this.permitId = params['id'];
    });
  }

  ngOnInit() {
    this.getPermitDetail();
  }

  refreshData(event) {
    this.getPermitDetail();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async getPermitDetail() {
    this.permitData = [];
    let requestData = {
      sp_action: "sp_permit_detail",
      permit_id: this.permitId
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Getting Permit Details');
    this.restService.makeGetRequest(requestData).then( async (result) => {
      this.restService.hideLoader();
      if (result['PermitDetail']) {
        this.permitData = result['PermitDetail'];
        let response = await this.restService.getStorage("userInfo");
        let userRoles = response["roles"];
        if (userRoles.indexOf("enforcement") !== -1) {
          this.isEnforcement = true;
        }
      }

    }, (err) => {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err.error.message));
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    });
  }

  async addNote() {
    this.navCtrl.goForward('/add-note/'+this.permitId);
  }

  async viewNotes() {
    if (this.permitData.Notes) {
      this.navCtrl.goForward('/view-notes/'+this.permitId);
    } else {
      this.restService.showAlert("Notice", "There are no notes for this permit.");
    }
  }

  goBack() {
    this.navCtrl.goBack('/property-list');
  }

  goToHome() {
    this.navCtrl.goRoot("/home");
  }

}
