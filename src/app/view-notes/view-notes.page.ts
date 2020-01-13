import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.page.html',
  styleUrls: ['./view-notes.page.scss'],
})
export class ViewNotesPage implements OnInit {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  notes: any = [];
  permitId: number = 0;
  showProperty: boolean = false;
  pageName: string = 'PERMIT NOTES';
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.route.params.subscribe((params: Params) => {
      this.permitId = params['permitId'];
      this.getPermitDetail();
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack('/permit-detail/'+this.permitId);
  }

  refreshData(event) {
    this.getPermitDetail();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async getPermitDetail() {
    this.notes = [];
    let requestData = {
      sp_action: "sp_permit_detail",
      permit_id: this.permitId
    }
    await this.restService.keyBoardHide();
    this.restService.showLoader('Getting Permit Notes');
    this.restService.makeGetRequest(requestData).then((result) => {
      this.restService.hideLoader();
      if (result['PermitDetail']) {
        this.notes = result['PermitDetail']['Notes'];
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

}
