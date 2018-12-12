import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  notes: any = [];
  permitId: number = 0;
  constructor(
    private modalCtrl: ModalController,
    private restService: RestService,
    private navParams: NavParams
  ) {
    this.permitId = navParams.get("permitId");
    this.getPermitDetail();
   }

  ngOnInit() {
  }

  closeModal(type) {
    let data = {type:type}
    this.modalCtrl.dismiss(data);
  }

  refreshData(event) {
    this.getPermitDetail();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  getPermitDetail() {
    this.notes = [];
    let requestData = {
      sp_action: "sp_permit_detail",
      permit_id: this.permitId
    }
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
