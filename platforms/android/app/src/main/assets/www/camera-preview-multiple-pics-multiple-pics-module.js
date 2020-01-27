(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-preview-multiple-pics-multiple-pics-module"],{

/***/ "./src/app/camera-preview/multiple-pics/multiple-pics.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/camera-preview/multiple-pics/multiple-pics.module.ts ***!
  \**********************************************************************/
/*! exports provided: MultiplePicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplePicsPageModule", function() { return MultiplePicsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _multiple_pics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multiple-pics.page */ "./src/app/camera-preview/multiple-pics/multiple-pics.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _multiple_pics_page__WEBPACK_IMPORTED_MODULE_5__["MultiplePicsPage"]
    }
];
var MultiplePicsPageModule = /** @class */ (function () {
    function MultiplePicsPageModule() {
    }
    MultiplePicsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_multiple_pics_page__WEBPACK_IMPORTED_MODULE_5__["MultiplePicsPage"]]
        })
    ], MultiplePicsPageModule);
    return MultiplePicsPageModule;
}());



/***/ }),

/***/ "./src/app/camera-preview/multiple-pics/multiple-pics.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/camera-preview/multiple-pics/multiple-pics.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [ngClass]=\"pictureData.status? 'active': 'inactive'\">\n  <ion-card *ngIf=\"pictureData.status\">\n    <ion-item>\n      <ion-label>{{pictureData.data.permitId}}</ion-label>\n      <ion-label text-end slot=\"end\">{{pictureData.data.status}}</ion-label>\n    </ion-item>\n\n    <ion-card-content text-center>\n      <ion-item *ngFor=\"let licenseInfo of pictureData.data.permits_info\">\n        <ion-label start>License Plate</ion-label>\n        <ion-label end color=\"medium\">{{licenseInfo.Plate}} ({{licenseInfo.State_plate}})</ion-label>\n      </ion-item>\n      <ion-item *ngFor=\"let attributeData of pictureData.data.attribute_data\">\n        <ion-label start>{{attributeData.attribute_name}}</ion-label>\n        <ion-label end color=\"medium\" text-wrap>{{attributeData.attribute_value}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"!pictureData.status\">\n    <ion-item text-center>\n      <ion-label start>No Permits Found</ion-label>\n      <ion-label end>{{pictureData.data.plateNumber}}</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer_multiple_pics\">\n    <ion-buttons class=\"multiple_pics_btn_cancel\" (click)=\"goBack()\" text-center slot=\"start\">\n      <ion-button>\n        <ion-label>CANCEL</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"multiple_pics_btn_submit\" text-center slot=\"end\" (click)=\"stop()\">\n      <ion-button>\n        <ion-label>STOP SCANNING</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/camera-preview/multiple-pics/multiple-pics.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/camera-preview/multiple-pics/multiple-pics.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  background: transparent; }\n\nion-card {\n  position: absolute;\n  bottom: 1%; }\n\n.active ion-card {\n  background: #f26825;\n  margin-bottom: 2em; }\n\n.active ion-card ion-item ion-label {\n    color: #FFFFFF; }\n\n.inactive ion-card {\n  background: #9b1f60;\n  margin-bottom: 2em; }\n\n.inactive ion-card ion-item ion-label {\n    color: #FFFFFF; }\n\n.footer_multiple_pics {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n\n.footer_multiple_pics ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.footer_multiple_pics ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n\n.footer_multiple_pics ion-buttons.multiple_pics_btn_submit {\n    background: #9b1f60; }\n\n.footer_multiple_pics ion-buttons.multiple_pics_btn_cancel {\n    background: #191242; }\n"

/***/ }),

/***/ "./src/app/camera-preview/multiple-pics/multiple-pics.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/camera-preview/multiple-pics/multiple-pics.page.ts ***!
  \********************************************************************/
/*! exports provided: MultiplePicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplePicsPage", function() { return MultiplePicsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest.service */ "./src/app/rest.service.ts");
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



var MultiplePicsPage = /** @class */ (function () {
    function MultiplePicsPage(restService, events) {
        var _this = this;
        this.restService = restService;
        this.events = events;
        this.pictureData = {
            status: false,
            data: {}
        };
        this.events.subscribe('pictureData', function (data) {
            _this.pictureData = data;
        });
    }
    MultiplePicsPage.prototype.ngOnInit = function () {
    };
    MultiplePicsPage.prototype.goBack = function () {
        this.restService.stopCamera();
    };
    MultiplePicsPage.prototype.stop = function () {
        this.restService.stopCamera();
    };
    MultiplePicsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-pics',
            template: __webpack_require__(/*! ./multiple-pics.page.html */ "./src/app/camera-preview/multiple-pics/multiple-pics.page.html"),
            styles: [__webpack_require__(/*! ./multiple-pics.page.scss */ "./src/app/camera-preview/multiple-pics/multiple-pics.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], MultiplePicsPage);
    return MultiplePicsPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-preview-multiple-pics-multiple-pics-module.js.map