(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-permit-result-no-permit-result-module"],{

/***/ "./src/app/no-permit-result/no-permit-result.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/no-permit-result/no-permit-result.module.ts ***!
  \*************************************************************/
/*! exports provided: NoPermitResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPermitResultPageModule", function() { return NoPermitResultPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _no_permit_result_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-permit-result.page */ "./src/app/no-permit-result/no-permit-result.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _no_permit_result_page__WEBPACK_IMPORTED_MODULE_5__["NoPermitResultPage"]
    }
];
var NoPermitResultPageModule = /** @class */ (function () {
    function NoPermitResultPageModule() {
    }
    NoPermitResultPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_no_permit_result_page__WEBPACK_IMPORTED_MODULE_5__["NoPermitResultPage"]]
        })
    ], NoPermitResultPageModule);
    return NoPermitResultPageModule;
}());



/***/ }),

/***/ "./src/app/no-permit-result/no-permit-result.page.html":
/*!*************************************************************!*\
  !*** ./src/app/no-permit-result/no-permit-result.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-row class=\"no-results-found\">\n    <ion-col size=\"12\">\n      <ion-item class=\"logoImgHeader\" (click)=\"goToHome()\">\n        <img class=\"logoImg\" [src]=\"appLogo\" />\n      </ion-item>\n\n      <ion-item class=\"no-result-header\" text-center margin-top>\n        <ion-label>No results found.</ion-label>\n      </ion-item>\n\n      <ion-item text-center>\n        <ion-label text-wrap class=\"no-result-sub-header\">We can’t find any permits\n          matching your search:</ion-label>\n      </ion-item>\n\n      <ion-item class=\"no-result-item\" text-center>\n        <ion-label text-wrap>Plate: {{plateData.plateNumber}}</ion-label>\n      </ion-item>\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer (click)=\"goBack()\">\n  <ion-toolbar class=\"footerBack\">\n    <ion-title text-center>BACK</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/no-permit-result/no-permit-result.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/no-permit-result/no-permit-result.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-result-header {\n  font-size: 2em; }\n\n.no-result-sub-header {\n  font-size: 1.3em; }\n\n.logoImgHeader img {\n  max-width: 80%;\n  margin: 0 auto; }\n\n.no-result-item {\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n.footerBack {\n  --background: #201553; }\n\nion-row.no-results-found.hydrated {\n  display: flex;\n  height: 100%;\n  align-items: center; }\n\n.no-results-found ion-label {\n  text-align: center; }\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1824px) and (orientation: portrait) {\n  .logoImgHeader img {\n    max-width: 50%; } }\n\n@media screen and (min-device-width: 768px) and (max-device-width: 1824px) and (orientation: landscape) {\n  .logoImgHeader img {\n    max-width: 30%; } }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 823px) and (orientation: landscape) {\n  .logoImgHeader img {\n    max-width: 15%; }\n  .sc-ion-label-md-h {\n    margin: 0; } }\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .logoImgHeader img {\n    max-width: 15%; }\n  .sc-ion-label-md-h {\n    margin: 0; } }\n\n@media only screen and (max-width: 479px) {\n  .logoImgHeader img {\n    max-width: 50%; } }\n"

/***/ }),

/***/ "./src/app/no-permit-result/no-permit-result.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/no-permit-result/no-permit-result.page.ts ***!
  \***********************************************************/
/*! exports provided: NoPermitResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPermitResultPage", function() { return NoPermitResultPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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




var NoPermitResultPage = /** @class */ (function () {
    function NoPermitResultPage(navCtrl, restService, zone, location) {
        this.navCtrl = navCtrl;
        this.restService = restService;
        this.zone = zone;
        this.location = location;
        this.appLogo = 'assets/icon/round_logo.png';
        this.plateData = {};
        this.getData();
    }
    NoPermitResultPage.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.restService.getStorage("plateData")];
                            case 1:
                                _a.plateData = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    NoPermitResultPage.prototype.goBack = function () {
        this.location.back();
    };
    NoPermitResultPage.prototype.goToHome = function () {
        this.navCtrl.goRoot("/home");
    };
    NoPermitResultPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-permit-result',
            template: __webpack_require__(/*! ./no-permit-result.page.html */ "./src/app/no-permit-result/no-permit-result.page.html"),
            styles: [__webpack_require__(/*! ./no-permit-result.page.scss */ "./src/app/no-permit-result/no-permit-result.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], NoPermitResultPage);
    return NoPermitResultPage;
}());



/***/ })

}]);
//# sourceMappingURL=no-permit-result-no-permit-result-module.js.map