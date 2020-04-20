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

module.exports = "<ion-content>\n  <ion-button *ngIf=\"isFlashMode\" class=\"flash\" (click)=\"manageFlashMode()\">\n    <ion-icon slot=\"icon-only\" name=\"flash\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"!isFlashMode\" class=\"flash\" (click)=\"manageFlashMode()\">\n    <ion-icon slot=\"icon-only\" name=\"flash-off\"></ion-icon>\n  </ion-button>\n  <ion-row class=\"result-outer\">\n    <div *ngFor=\"let plateData of pictureData; let i = index\" [ngClass]=\"plateData.data.status === 'Expired' ? 'inactive' : 'active'\">\n      <ion-card *ngIf=\"scanStatus && plateData.status\" (click)=\"goToDetail(i)\"\n        [@fadeAnimation]=\"plateData.animationType\">\n        <ion-item class=\"title_bar\">\n          <ion-label>{{plateData.data.permit_id}}</ion-label>\n          <ion-label text-end slot=\"end\">{{plateData.data.status}}</ion-label>\n        </ion-item>\n\n        <ion-card-content text-center>\n          <ion-item *ngFor=\"let licenseInfo of plateData.data.vehicle_info\">\n            <ion-label start>License Plate</ion-label>\n            <ion-label end color=\"medium\">{{licenseInfo.license_plate}} ({{licenseInfo.license_plate_state}})</ion-label>\n          </ion-item>\n          <ion-item *ngFor=\"let attributeData of plateData.data.attribute_data\">\n            <ion-label start>{{attributeData.attribute_name}}</ion-label>\n            <ion-label end color=\"medium\" text-wrap>{{attributeData.attribute_value}}</ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"inactive-no-permit\" *ngIf=\"scanStatus && !plateData.status\"\n        [@fadeAnimation]=\"plateData.animationType\">\n        <ion-item text-center>\n          <ion-label start>No Permits Found</ion-label>\n          <ion-label end>{{plateData.data.plateNumber}}</ion-label>\n        </ion-item>\n      </ion-card>\n    </div>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer_multiple_pics\">\n    <ion-buttons class=\"multiple_pics_btn_cancel\" (click)=\"goBack()\" text-center slot=\"start\">\n      <ion-button>\n        <ion-label>CANCEL</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf=\"!scanStatus\" class=\"multiple_pics_btn_submit\" text-center slot=\"end\" (click)=\"start()\">\n      <ion-button>\n        <ion-label>START SCANNING</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf=\"scanStatus\" class=\"multiple_pics_btn_submit start-camera\" text-center slot=\"end\" (click)=\"stop()\">\n      <ion-button>\n        <ion-label>STOP SCANNING</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/camera-preview/multiple-pics/multiple-pics.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/camera-preview/multiple-pics/multiple-pics.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  background: transparent;\n  vertical-align: bottom;\n  display: flex; }\n\nion-row.result-outer {\n  display: block;\n  padding: 0 2.5em;\n  position: absolute;\n  bottom: .5em;\n  width: 100%; }\n\nion-row.result-outer ion-card-content {\n    padding: 0; }\n\n.active {\n  margin-bottom: .75em;\n  margin-top: 0; }\n\n.active ion-item.title_bar {\n    background: #f26825;\n    --min-height: 2.5em; }\n\n.active ion-item.title_bar ion-label {\n      color: #FFFFFF;\n      margin: 0; }\n\n.active ion-item.title_bar ion-label:nth-child(2) {\n        text-transform: uppercase; }\n\n.active ion-card-content ion-item {\n    background: rgba(242, 102, 37, 0.75);\n    --min-height: 1.5em; }\n\n.active ion-card-content ion-item ion-label {\n      color: #FFFFFF;\n      margin: 0; }\n\n.active ion-card-content ion-item:first-child {\n      padding-top: 5px; }\n\n.active ion-card-content ion-item:nth-child(2) {\n      padding-bottom: 5px; }\n\n.inactive {\n  margin-bottom: .75em;\n  margin-top: 0; }\n\n.inactive ion-item.title_bar {\n    background: #9b1f60;\n    --min-height: 2.5em; }\n\n.inactive ion-item.title_bar ion-label {\n      color: #FFFFFF;\n      margin: 0; }\n\n.inactive ion-item.title_bar ion-label:nth-child(2) {\n        text-transform: uppercase; }\n\n.inactive ion-card-content ion-item {\n    background: rgba(155, 31, 96, 0.75);\n    --min-height: 1.5em; }\n\n.inactive ion-card-content ion-item ion-label {\n      color: #FFFFFF;\n      margin: 0; }\n\n.inactive ion-card-content ion-item:first-child {\n      padding-top: 5px; }\n\n.inactive ion-card-content ion-item:nth-child(2) {\n      padding-bottom: 5px; }\n\n.inactive-no-permit {\n  background: #9b1f60; }\n\n.footer_multiple_pics {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n\n.footer_multiple_pics ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.footer_multiple_pics ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n\n.footer_multiple_pics ion-buttons.multiple_pics_btn_submit {\n    background: #9b1f60; }\n\n.footer_multiple_pics ion-buttons.multiple_pics_btn_submit.start-camera {\n    background: #c8212a; }\n\n.footer_multiple_pics ion-buttons.multiple_pics_btn_cancel {\n    background: #191242; }\n\n@media only screen and (min-width: 480px) {\n  ion-row.result-outer {\n    display: block;\n    padding: 0 2.5em;\n    position: absolute;\n    bottom: .5em;\n    width: 70%;\n    left: 0;\n    right: 0;\n    margin: 0 auto; } }\n\n.flash {\n  --background: transparent;\n  position: absolute;\n  right: 0.1em;\n  top: 0.5em;\n  --box-shadow: none; }\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/power-management/ngx */ "./node_modules/@ionic-native/power-management/ngx/index.js");
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






var MultiplePicsPage = /** @class */ (function () {
    function MultiplePicsPage(restService, events, screenOrientation, navCtrl, zone, powerManagement) {
        var _this = this;
        this.restService = restService;
        this.events = events;
        this.screenOrientation = screenOrientation;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.powerManagement = powerManagement;
        this.pictureData = [];
        this.scanStatus = false;
        this.plateDataCounter = -1;
        this.isFlashMode = false;
        this.events.subscribe('pictureData', function (data) {
            _this.plateDataCounter++;
            var plateData = data;
            plateData['animationType'] = 'in';
            _this.pictureData.push(plateData);
            var counter = _this.plateDataCounter;
            setTimeout(function () {
                _this.pictureData[counter]['animationType'] = 'out';
            }, 5000);
            _this.scanStatus = true;
        });
        this.screenOrientation.onChange().subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restService.stopCameraPreview()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restService.startCameraPreview()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    MultiplePicsPage.prototype.ngOnInit = function () {
    };
    MultiplePicsPage.prototype.goBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.scanStatus = false;
                                this.restService.isTakeMultiplePics = false;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, this.restService.stopCamera()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.powerManagement.release()];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                error_1 = _a.sent();
                                console.log(JSON.stringify(error_1));
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MultiplePicsPage.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.scanStatus = true;
                                this.restService.isTakeMultiplePics = true;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, this.powerManagement.acquire()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.restService.takeMultiplePictures()];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                error_2 = _a.sent();
                                this.restService.showToast(JSON.stringify(error_2));
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MultiplePicsPage.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.scanStatus = false;
                                this.restService.isTakeMultiplePics = false;
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.powerManagement.release()];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                error_3 = _a.sent();
                                this.restService.showToast(JSON.stringify(error_3));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MultiplePicsPage.prototype.goToDetail = function (serialNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scanStatus = false;
                        this.restService.lastLprNumber = '';
                        return [4 /*yield*/, this.restService.stopCameraPreview()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restService.setStorage("userData", [])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.restService.setStorage("vehicleData", [this.pictureData[serialNumber].data])];
                    case 3:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/permit-detail/" + this.pictureData[serialNumber].data.permit_id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MultiplePicsPage.prototype.manageFlashMode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isFlashMode) return [3 /*break*/, 2];
                        this.isFlashMode = false;
                        return [4 /*yield*/, this.restService.manageFlashMode(2)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.isFlashMode = true;
                        return [4 /*yield*/, this.restService.manageFlashMode(1)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MultiplePicsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-pics',
            template: __webpack_require__(/*! ./multiple-pics.page.html */ "./src/app/camera-preview/multiple-pics/multiple-pics.page.html"),
            styles: [__webpack_require__(/*! ./multiple-pics.page.scss */ "./src/app/camera-preview/multiple-pics/multiple-pics.page.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('600ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_5__["PowerManagement"]])
    ], MultiplePicsPage);
    return MultiplePicsPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-preview-multiple-pics-multiple-pics-module.js.map