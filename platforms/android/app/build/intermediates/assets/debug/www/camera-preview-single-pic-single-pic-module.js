(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-preview-single-pic-single-pic-module"],{

/***/ "./src/app/camera-preview/single-pic/single-pic.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/camera-preview/single-pic/single-pic.module.ts ***!
  \****************************************************************/
/*! exports provided: SinglePicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePicPageModule", function() { return SinglePicPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _single_pic_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-pic.page */ "./src/app/camera-preview/single-pic/single-pic.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _single_pic_page__WEBPACK_IMPORTED_MODULE_5__["SinglePicPage"]
    }
];
var SinglePicPageModule = /** @class */ (function () {
    function SinglePicPageModule() {
    }
    SinglePicPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_pic_page__WEBPACK_IMPORTED_MODULE_5__["SinglePicPage"]]
        })
    ], SinglePicPageModule);
    return SinglePicPageModule;
}());



/***/ }),

/***/ "./src/app/camera-preview/single-pic/single-pic.page.html":
/*!****************************************************************!*\
  !*** ./src/app/camera-preview/single-pic/single-pic.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer_single_pic\" >\n    <ion-buttons class=\"single_pic_btn_cancel\" (click)=\"goBack()\"  text-center slot=\"start\">\n      <ion-button>\n        <ion-label>CANCEL</ion-label>\n      </ion-button>\n    </ion-buttons>\n    \n    <ion-buttons class=\"single_pic_btn_submit\" text-center slot=\"end\" (click)=\"capture()\">\n      <ion-button>\n        <ion-label>CAPTURE</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/camera-preview/single-pic/single-pic.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/camera-preview/single-pic/single-pic.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  background: transparent; }\n\n.footer_single_pic {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n\n.footer_single_pic ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.footer_single_pic ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n\n.footer_single_pic ion-buttons.single_pic_btn_submit {\n    background: #9b1f60; }\n\n.footer_single_pic ion-buttons.single_pic_btn_cancel {\n    background: #191242; }\n"

/***/ }),

/***/ "./src/app/camera-preview/single-pic/single-pic.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/camera-preview/single-pic/single-pic.page.ts ***!
  \**************************************************************/
/*! exports provided: SinglePicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePicPage", function() { return SinglePicPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SinglePicPage = /** @class */ (function () {
    function SinglePicPage(navCtrl, restService) {
        this.navCtrl = navCtrl;
        this.restService = restService;
    }
    SinglePicPage.prototype.ngOnInit = function () {
    };
    SinglePicPage.prototype.goBack = function () {
        this.restService.stopCamera();
    };
    SinglePicPage.prototype.capture = function () {
        this.restService.takePicture();
    };
    SinglePicPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-pic',
            template: __webpack_require__(/*! ./single-pic.page.html */ "./src/app/camera-preview/single-pic/single-pic.page.html"),
            styles: [__webpack_require__(/*! ./single-pic.page.scss */ "./src/app/camera-preview/single-pic/single-pic.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], SinglePicPage);
    return SinglePicPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-preview-single-pic-single-pic-module.js.map