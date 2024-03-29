import { Component, OnInit, NgZone } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { RestService } from "../rest.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-permit-detail",
  templateUrl: "./permit-detail.page.html",
  styleUrls: ["./permit-detail.page.scss"],
})
export class PermitDetailPage implements OnInit {
  permitData: any = [];
  permitId: number = 0;
  isEnforcement: boolean = false;
  showProperty: boolean = false;
  pageName: string = "PERMIT DETAILS";
  constructor(
    private modalController: ModalController,
    private restService: RestService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location,
    private zone: NgZone
  ) {
    this.route.params.subscribe((params: Params) => {
      this.permitId = params["id"];
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

  async getPermitDetail(type = 1) {
    if (type === 1) {
      this.permitData = [];
    }
    let requestData = {
      sp_action: "sp_permit_detail",
      permit_id: this.permitId,
    };
    await this.restService.keyBoardHide();
    if (type === 2) {
      this.restService.showLoader("Getting Notes");
    } else {
      this.restService.showLoader("Getting Permit Details");
    }
    try {
      const result = await this.restService.makeGetRequest(requestData);
      setTimeout(() => {
        this.restService.hideLoader();
      }, 2000);
      if (result["PermitDetail"]) {
        this.zone.run(async () => {
          this.permitData = result["PermitDetail"];
          let response = await this.restService.getStorage("userInfo");
          let userRoles = response["roles"];
          if (userRoles.indexOf("enforcement") !== -1) {
            this.isEnforcement = true;
          }
          if (type === 2) {
            if (this.permitData.Notes) {
              this.navCtrl.goForward("/view-notes/" + this.permitId);
            } else {
              this.restService.showAlert(
                "Notice",
                "There are no notes for this permit."
              );
            }
          }
        });
      }
    } catch (err) {
      this.restService.hideLoader();
      if (err.error) {
        this.restService.showAlert(
          "Notice",
          this.restService.setErrorMessageArray(err.error.message)
        );
      } else {
        this.restService.showAlert("Notice", err.statusText);
      }
    }
  }

  async addNote() {
    this.navCtrl.goForward("/add-note/" + this.permitId);
  }

  async viewNotes() {
    await this.getPermitDetail(2);
  }

  goBack() {
    this.navCtrl.goBack("/property-list");
  }

  goToHome() {
    this.navCtrl.goRoot("/home");
  }
}
