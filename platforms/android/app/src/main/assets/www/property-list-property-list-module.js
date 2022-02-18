(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-list-property-list-module"],{

/***/ "./src/app/property-list/property-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/property-list/property-list.module.ts ***!
  \*******************************************************/
/*! exports provided: PropertyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyListPageModule", function() { return PropertyListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _property_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property-list.page */ "./src/app/property-list/property-list.page.ts");
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
        component: _property_list_page__WEBPACK_IMPORTED_MODULE_5__["PropertyListPage"]
    }
];
var PropertyListPageModule = /** @class */ (function () {
    function PropertyListPageModule() {
    }
    PropertyListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_list_page__WEBPACK_IMPORTED_MODULE_5__["PropertyListPage"]],
        })
    ], PropertyListPageModule);
    return PropertyListPageModule;
}());



/***/ }),

/***/ "./src/app/property-list/property-list.page.html":
/*!*******************************************************!*\
  !*** ./src/app/property-list/property-list.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [showProperty]=\"showProperty\" [pageName]=\"pageName\"></app-header>\n\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"vehicleData.length>0\">\n    <ion-card *ngFor=\"let vehicleInfo of vehicleData\" [ngClass]=\"vehicleInfo.status=='Active'?'Active':'Cancelled'\">\n\n\n      <ion-item class=\"list-header\">\n        <ion-label>#{{vehicleInfo.permit_id}}</ion-label>\n        <ion-label slot=\"end\">{{vehicleInfo.status}}</ion-label>\n      </ion-item>\n\n      <ion-card-content text-center class=\"list-inner-box\">\n        <ion-item class=\"in-list\">\n          <ion-label start>{{vehicleInfo.first_name}} {{vehicleInfo.last_name}}</ion-label>\n          <ion-label end color=\"medium\" text-wrap>\n            <ion-icon src=\"assets/icon/Second-Billing-Address-alt.svg\"></ion-icon>\n            {{vehicleInfo.address_2}}\n          </ion-label>\n        </ion-item>\n        <ion-item *ngFor=\"let attributeData of vehicleInfo.attribute_data\">\n          <ion-label start>{{attributeData.attribute_name}}</ion-label>\n          <ion-label end color=\"medium\" text-wrap>{{attributeData.attribute_value}}</ion-label>\n        </ion-item>\n        <ion-item *ngFor=\"let vehicleLicenseInfo of vehicleInfo.vehicle_info\">\n          <ion-label start>License Plate</ion-label>\n          <ion-label end color=\"medium\" text-wrap>{{vehicleLicenseInfo.license_plate}}\n            ({{vehicleLicenseInfo.license_plate_state}})</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label start>Start Date</ion-label>\n          <ion-label end color=\"medium\" text-wrap>{{vehicleInfo.start_date}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label start>End Date</ion-label>\n          <ion-label end color=\"medium\" text-wrap>{{vehicleInfo.end_date}}</ion-label>\n        </ion-item>\n        \n\n      </ion-card-content>\n      <ion-item class=\"list-footer\" href=\"/permit-detail/{{vehicleInfo.permit_id}}\" routerDirection=\"forward\">\n        <ion-label>PERMIT/VEHICLE DETAILS</ion-label>\n      </ion-item>\n    </ion-card>\n  </div>\n\n\n  <div *ngIf=\"userData.length>0\">\n    <ion-card *ngFor=\"let userInfo of userData\" class=\"user_search_data\">\n      <ion-item class=\"user_search_data_name\">\n        <ion-label>{{userInfo.first_name}} {{userInfo.last_name}}</ion-label>\n      </ion-item>\n\n      <ion-card-content text-center class=\"user_search_data_permits\">\n        <ion-grid>\n          <ion-row *ngFor=\"let permits of userInfo.permit_data\">\n            <ion-col [ngClass]=\"permits.status=='Active'?'active':'inactive'\" text-center>\n              <ion-item class=\"permits_header\">\n                <ion-label start>#{{permits.permit_id}}</ion-label>\n                <ion-label text-end end color=\"medium\">{{permits.status}}</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label start>License Plate</ion-label>\n                <ion-label text-end text-wrap end color=\"medium\">{{permits.license_plate}}</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label start>License Plate State</ion-label>\n                <ion-label text-end text-wrap end color=\"medium\">{{permits.license_plate_state}}</ion-label>\n              </ion-item>\n              <ion-item class=\"list-footer\" href=\"/permit-detail/{{permits.permit_id}}\" routerDirection=\"forward\">\n                <ion-label>PERMIT/VEHICLE DETAILS</ion-label>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n\n\n        </ion-grid>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer (click)=\"goBack()\">\n  <ion-toolbar class=\"footerBack\">\n    <ion-title text-center>BACK</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property-list/property-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/property-list/property-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Cancelled {\n  background: #31092d; }\n  .Cancelled ion-item.list-header {\n    background: #9b1f60; }\n  .Cancelled ion-item.list-header ion-label {\n      margin-top: 0;\n      margin-bottom: 0; }\n  .Cancelled .list-header ion-label:nth-child(2) {\n    text-align: right;\n    font-size: 1.4em;\n    text-transform: uppercase; }\n  .Cancelled ion-item.list-footer {\n    background: #521038;\n    text-align: center; }\n  .Cancelled .list-inner-box {\n    padding-top: 0; }\n  .Cancelled .list-inner-box ion-item {\n      min-height: 30px;\n      height: 30px;\n      --padding-start: 0; }\n  .Cancelled .list-inner-box ion-item ion-label {\n        margin-top: 0;\n        margin-bottom: 0;\n        color: #FFF !important;\n        font-size: 0.8em; }\n  .Active {\n  background: #3e141a; }\n  .Active ion-item.list-header {\n    background: #f26825; }\n  .Active ion-item.list-header ion-label {\n      margin-top: 0;\n      margin-bottom: 0; }\n  .Active .list-header ion-label:nth-child(2) {\n    text-align: right;\n    font-size: 1.4em;\n    text-transform: uppercase;\n    font-family: open sans; }\n  .Active ion-item.list-footer {\n    background: #7e341b;\n    text-align: center; }\n  .Active .list-inner-box {\n    padding-top: 0; }\n  .Active .list-inner-box ion-item {\n      min-height: 30px;\n      height: 30px;\n      --padding-start: 0; }\n  .Active .list-inner-box ion-item ion-label {\n        margin-top: 0;\n        margin-bottom: 0;\n        color: #FFF !important;\n        font-size: 0.8em; }\n  .footerBack {\n  --background: #201553; }\n  .user_search_data ion-item.user_search_data_name {\n  background: #cb3125; }\n  .user_search_data ion-card-content.user_search_data_permits {\n  background: #2b0f13; }\n  .user_search_data ion-card-content.user_search_data_permits .inactive {\n    background: #2c0f13;\n    margin-bottom: 1em;\n    padding: 0; }\n  .user_search_data ion-card-content.user_search_data_permits .inactive ion-item.permits_header {\n      background: #9b1f60;\n      color: #FFF; }\n  .user_search_data ion-card-content.user_search_data_permits .inactive ion-item.list-footer {\n      background: #521038;\n      text-align: center; }\n  .user_search_data ion-card-content.user_search_data_permits .inactive ion-item {\n      background: #1f051c; }\n  .user_search_data ion-card-content.user_search_data_permits .inactive ion-item ion-label {\n        color: #FFFFFF; }\n  .user_search_data ion-card-content.user_search_data_permits .active {\n    background: #2c0f13;\n    margin-bottom: 1em;\n    padding: 0; }\n  .user_search_data ion-card-content.user_search_data_permits .active ion-item.permits_header {\n      background: #f26825;\n      color: #FFF; }\n  .user_search_data ion-card-content.user_search_data_permits .active ion-item.list-footer {\n      background: #7e341b;\n      text-align: center; }\n  .user_search_data ion-card-content.user_search_data_permits .active ion-item {\n      background: #1f051c; }\n  .user_search_data ion-card-content.user_search_data_permits .active ion-item ion-label {\n        color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/app/property-list/property-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/property-list/property-list.page.ts ***!
  \*****************************************************/
/*! exports provided: PropertyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyListPage", function() { return PropertyListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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



var PropertyListPage = /** @class */ (function () {
    function PropertyListPage(restService, navCtrl, zone) {
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.vehicleData = [];
        this.userData = [];
        this.showProperty = false;
        this.pageName = 'SEARCH RESULTS';
    }
    PropertyListPage.prototype.ngOnInit = function () {
    };
    PropertyListPage.prototype.ionViewDidEnter = function () {
        this.getData();
    };
    PropertyListPage.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.restService.getStorage("vehicleData")];
                            case 1:
                                _a.vehicleData = _c.sent();
                                _b = this;
                                return [4 /*yield*/, this.restService.getStorage("userData")];
                            case 2:
                                _b.userData = _c.sent();
                                this.vehicleData = this.vehicleData == null ? [] : this.vehicleData;
                                this.userData = this.userData == null ? [] : this.userData;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    PropertyListPage.prototype.goBack = function () {
        this.goToHome();
    };
    PropertyListPage.prototype.goToHome = function () {
        this.navCtrl.goRoot("/home");
    };
    PropertyListPage.prototype.refreshData = function (event) {
        this.getData();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    PropertyListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-list',
            template: __webpack_require__(/*! ./property-list.page.html */ "./src/app/property-list/property-list.page.html"),
            styles: [__webpack_require__(/*! ./property-list.page.scss */ "./src/app/property-list/property-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PropertyListPage);
    return PropertyListPage;
}());



/***/ })

}]);
//# sourceMappingURL=property-list-property-list-module.js.map