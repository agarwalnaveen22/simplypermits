(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permit-detail-permit-detail-module"],{

/***/ "./src/app/permit-detail/permit-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/permit-detail/permit-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: PermitDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitDetailPageModule", function() { return PermitDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _permit_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permit-detail.page */ "./src/app/permit-detail/permit-detail.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _permit_detail_page__WEBPACK_IMPORTED_MODULE_5__["PermitDetailPage"]
    }
];
var PermitDetailPageModule = /** @class */ (function () {
    function PermitDetailPageModule() {
    }
    PermitDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_permit_detail_page__WEBPACK_IMPORTED_MODULE_5__["PermitDetailPage"]]
        })
    ], PermitDetailPageModule);
    return PermitDetailPageModule;
}());



/***/ }),

/***/ "./src/app/permit-detail/permit-detail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/permit-detail/permit-detail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [showProperty]=\"showProperty\" [pageName]=\"pageName\"></app-header>\n\n<ion-content [ngClass]=\"permitData.status=='Active'?'active':'inactive'\" >\n  <ion-refresher [disabled]=\"false\" slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-item class=\"header\">\n      <ion-label>{{permitId}}</ion-label>\n      <ion-label text-end slot=\"end\">{{permitData.status}}</ion-label>\n    </ion-item>\n\n    <ion-card-content class=\"permitDetailsList\" text-center>\n      <ion-item>\n        <ion-label start>Start Date</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{permitData.start_date}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Last Order Date</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{permitData.last_order_date}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>End Date</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{permitData.end_date}}</ion-label>\n      </ion-item>\n      <ion-item *ngFor=\"let attributeData of permitData.attribute_data\">\n        <ion-label start>{{attributeData.attribute_name}}</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{attributeData.attribute_value}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let licenseInfo of permitData.permits_info\" >\n    <ion-item class=\"header\">\n      <ion-label text-wrap>{{licenseInfo.Permit_Name}}</ion-label>\n      <ion-label text-end slot=\"end\">{{permitData.order_total}}</ion-label>\n    </ion-item>\n\n    <ion-card-content text-center class=\"permitDetailsList\">\n      <ion-item>\n        <ion-label start text-wrap>License Plate (State)</ion-label>\n        <ion-label end color=\"medium\" text-wrap text-uppercase>{{licenseInfo.Plate}} ({{licenseInfo.State_plate}})</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>VIN</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{licenseInfo.VIN}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Year</ion-label>\n        <ion-label end color=\"medium\">{{licenseInfo.Year}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Make</ion-label>\n        <ion-label end color=\"medium\">{{licenseInfo.Make}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Model</ion-label>\n        <ion-label end color=\"medium\">{{licenseInfo.Model}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"!isEnforcement\">\n    <ion-item class=\"header\">\n      <ion-label>{{permitData?.Customer?.First_Name}} {{permitData?.Customer?.Last_Name}}</ion-label>\n      <ion-label text-end slot=\"end\">\n        <ion-icon src=\"assets/icon/Second-Billing-Address-alt.svg\"></ion-icon>\n        {{permitData?.Customer?.Address2}}\n      </ion-label>\n    </ion-item>\n\n    <ion-card-content text-center class=\"permitDetailsList\">\n      <ion-item>\n        <ion-label start>Email Address</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{permitData?.Customer?.Email}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Phone</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{permitData?.Customer?.Phone}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label start>Address</ion-label>\n        <ion-label text-wrap end color=\"medium\">{{permitData?.Customer?.Address1}} {{permitData?.Customer?.Address2}}\n          {{permitData?.Customer?.City}}\n          {{permitData?.Customer?.State}} {{permitData?.Customer?.Zip}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer_permit_details\">\n    <ion-buttons class=\"view_note_btn\" (click)=\"goBack()\" text-center slot=\"start\">\n      <ion-button>\n        <ion-label>BACK</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title text-center (click)=\"viewNotes()\">\n      <ion-label>VIEW NOTES\n        <ion-icon name=\"md-chatboxes\"></ion-icon>\n      </ion-label>\n    </ion-title>\n\n    <ion-buttons class=\"add_note_btn\" text-center slot=\"end\" (click)=\"addNote()\">\n      <ion-button>\n        <ion-label>ADD NOTE</ion-label>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/permit-detail/permit-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/permit-detail/permit-detail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inactive ion-card {\n  background: #320a2d;\n  margin-bottom: 2em; }\n  .inactive ion-card ion-item.header {\n    background: #9b1f60; }\n  .inactive ion-card ion-item ion-label {\n    color: #FFFFFF; }\n  .active ion-card {\n  background: #2c0f13;\n  margin-bottom: 2em; }\n  .active ion-card ion-item.header {\n    background: #f26825; }\n  .active ion-card ion-item ion-label {\n    color: #FFFFFF; }\n  .permitDetailsList ion-item {\n  --padding-start:0;\n  font-size: 14px; }\n  .permitDetailsList ion-item ion-label:first-child {\n    width: 40%;\n    max-width: 40%; }\n  .card-content-md {\n  padding: 10px; }\n  .footer_permit_details {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --background: #9b1f60;\n  --min-height: auto;\n  --padding-end: 0;\n  --padding-start: 0; }\n  .footer_permit_details ion-buttons.view_note_btn {\n    --background: #1d134a; }\n  .footer_permit_details ion-buttons.sc-ion-buttons-md-h.sc-ion-buttons-md-s.hydrated {\n    background: #5f2877;\n    margin-right: 0; }\n  .footer_permit_details ion-buttons.view_note_btn.sc-ion-buttons-md-h.sc-ion-buttons-md-s.hydrated {\n    background: #1d134a !important;\n    margin-left: 0; }\n  .footer_permit_details ion-buttons {\n    width: 33.33%; }\n  .footer_permit_details ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n  .footer_permit_details ion-buttons ion-button ion-icon {\n        color: #FFFFFF; }\n  .footer_permit_details ion-title {\n    padding: 0; }\n  .footer_permit_details ion-title ion-label {\n      font-size: 0.70em;\n      margin: 0;\n      padding: 0; }\n"

/***/ }),

/***/ "./src/app/permit-detail/permit-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/permit-detail/permit-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: PermitDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermitDetailPage", function() { return PermitDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var PermitDetailPage = /** @class */ (function () {
    function PermitDetailPage(modalController, restService, route, navCtrl, location, zone) {
        var _this = this;
        this.modalController = modalController;
        this.restService = restService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.location = location;
        this.zone = zone;
        this.permitData = [];
        this.permitId = 0;
        this.isEnforcement = false;
        this.showProperty = false;
        this.pageName = "PERMIT DETAILS";
        this.route.params.subscribe(function (params) {
            _this.permitId = params["id"];
        });
    }
    PermitDetailPage.prototype.ngOnInit = function () {
        this.getPermitDetail();
    };
    PermitDetailPage.prototype.refreshData = function (event) {
        this.getPermitDetail();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    PermitDetailPage.prototype.getPermitDetail = function (type) {
        if (type === void 0) { type = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData, result_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type === 1) {
                            this.permitData = [];
                        }
                        requestData = {
                            sp_action: "sp_permit_detail",
                            permit_id: this.permitId,
                        };
                        return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 1:
                        _a.sent();
                        if (type === 2) {
                            this.restService.showLoader("Getting Notes");
                        }
                        else {
                            this.restService.showLoader("Getting Permit Details");
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.restService.makeGetRequest(requestData)];
                    case 3:
                        result_1 = _a.sent();
                        setTimeout(function () {
                            _this.restService.hideLoader();
                        }, 2000);
                        if (result_1["PermitDetail"]) {
                            this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                var response, userRoles;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.permitData = result_1["PermitDetail"];
                                            return [4 /*yield*/, this.restService.getStorage("userInfo")];
                                        case 1:
                                            response = _a.sent();
                                            userRoles = response["roles"];
                                            if (userRoles.indexOf("enforcement") !== -1) {
                                                this.isEnforcement = true;
                                            }
                                            if (type === 2) {
                                                if (this.permitData.Notes) {
                                                    this.navCtrl.goForward("/view-notes/" + this.permitId);
                                                }
                                                else {
                                                    this.restService.showAlert("Notice", "There are no notes for this permit.");
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.restService.hideLoader();
                        if (err_1.error) {
                            this.restService.showAlert("Notice", this.restService.setErrorMessageArray(err_1.error.message));
                        }
                        else {
                            this.restService.showAlert("Notice", err_1.statusText);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PermitDetailPage.prototype.addNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.goForward("/add-note/" + this.permitId);
                return [2 /*return*/];
            });
        });
    };
    PermitDetailPage.prototype.viewNotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPermitDetail(2)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PermitDetailPage.prototype.goBack = function () {
        this.navCtrl.goBack("/property-list");
    };
    PermitDetailPage.prototype.goToHome = function () {
        this.navCtrl.goRoot("/home");
    };
    PermitDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-permit-detail",
            template: __webpack_require__(/*! ./permit-detail.page.html */ "./src/app/permit-detail/permit-detail.page.html"),
            styles: [__webpack_require__(/*! ./permit-detail.page.scss */ "./src/app/permit-detail/permit-detail.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PermitDetailPage);
    return PermitDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=permit-detail-permit-detail-module.js.map