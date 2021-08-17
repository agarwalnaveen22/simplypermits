import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  description: string = '';
  category: string = 'notice';
  permitId: number = 0;
  showProperty: boolean = false;
  pageName: string = 'ADD NOTE';
  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.route.params.subscribe((params: Params) => {
      this.permitId = params['permitId'];
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack('/permit-detail/'+this.permitId);
  }

  async addNotes() {
    if (this.description == '') {
      this.restService.showAlert('Error', 'Please enter description');
    } else if (this.category == '') {
      this.restService.showAlert('Error', 'Please select category');
    } else {
      let requestData = {
        sp_action: "sp_permit_add_note",
        permit_id: this.permitId,
        page_id: "Permit Detail",
        add_note: this.description,
        note_category: this.category
      }
      await this.restService.keyBoardHide();
      this.restService.showLoader('Saving notes');
      this.restService.makePostRequest(requestData).then((result) => {
        this.restService.hideLoader();
        if (!result['error']) {
          this.restService.showAlert('Success', result['message']);
          this.goBack();
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
