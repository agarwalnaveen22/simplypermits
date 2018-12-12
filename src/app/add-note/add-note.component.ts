import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  appLogo: string = 'assets/icon/inner_header_logo.png';
  description: string = '';
  permitId: number = 0;
  constructor(
    private modalCtrl: ModalController,
    private restService: RestService,
    private navParams: NavParams
  ) {
    this.permitId = navParams.get("permitId");
   }


  closeModal(type) {
    let data = {type:type}
    this.modalCtrl.dismiss(data);
  }

  async addNotes() {
    if (this.description == '') {
      this.restService.showAlert('Error', 'Please enter description');
    } else {
      let response = await this.restService.getStorage("userInfo");
      let requestData = {
        sp_action: "sp_permit_add_note",
        permit_id: this.permitId,
        user_id: response["user_id"],
        page_id: "Permit Detail",
        add_note: this.description
      }
      this.restService.showLoader('Saving notes');
      this.restService.makePostRequest(requestData).then((result) => {
        this.restService.hideLoader();
        if (!result['error']) {
          this.restService.showAlert('Success', result['message']);
          this.closeModal(1);
        }else{
          this.restService.showAlert('Error', result['message']);
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

}
