(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"logoHeader\" slot=\"start\">\n      <ion-button>\n        <img slot=\"start\" [src]=\"appLogo\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-select [(ngModel)]=\"property\" interface=\"popover\" placeholder=\"Select One\">\n      <ion-select-option *ngFor=\"let property of properties\" value=\"{{property.id}}\">{{property.name}}</ion-select-option>\n    </ion-select>\n\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"logout-btn\" (click)=\"logout()\">\n        <ion-icon class=\"logoutIcon\" slot=\"icon-only\" name=\"ios-log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col  size=\"12\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" size-xl=\"5\">\n        <ion-item (click)=\"takePicture()\">\n          <img class=\"scanImage\" [src]=\"scanImage\" />\n        </ion-item>\n      </ion-col>\n      <ion-col  size=\"12\" size-sm=\"7\" size-md=\"7\" size-lg=\"7\" size-xl=\"7\">\n        <ion-item class=\"ad-search\">\n          <ion-label>ADVANCED SEARCH</ion-label>\n        </ion-item>\n\n        <ion-item class=\"hintIcon\" (click)=\"viewVehicleSearchForm()\">\n          <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n          <ion-label>SEARCH PERMITS BY VEHICLE</ion-label>\n        </ion-item>\n\n        <ion-item class=\"hintIcon\" (click)=\"viewUserSearchForm()\" *ngIf=\"!isEnforcement\">\n          <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n          <ion-label>SEARCH PERMITS BY USER</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  border: 0.5px solid;\n  margin-top: 5px; }\n\n.scanImage {\n  width: 60%;\n  margin: 15% auto; }\n\n@media screen and (min-width: 576px) {\n  .scanImage {\n    width: 90%;\n    margin: 5% auto; } }\n\n.hintIcon {\n  background: #28223d;\n  margin-bottom: 5%;\n  float: left;\n  width: 100%; }\n\n.hintIcon ion-icon.hydrated {\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin: 0;\n    width: 2em;\n    height: 100%;\n    background: #5f2877; }\n\n.hintIcon .sc-ion-label-md-h {\n    margin-left: 3em; }\n\n.ad-search {\n  float: left;\n  width: 100%;\n  margin-bottom: 5%;\n  background: transparent !important;\n  position: relative; }\n\n.ad-search .sc-ion-label-md-h {\n    padding-left: 0 !important;\n    left: 0;\n    z-index: 9;\n    position: absolute; }\n\nion-select {\n  background: #2c2649; }\n\nion-button.logout-btn::before {\n  content: \"Logout\";\n  position: absolute;\n  text-align: center;\n  display: block;\n  color: #FFF;\n  left: 0;\n  right: 0;\n  top: .25em; }\n\nion-button.logout-btn {\n  width: 6em;\n  position: relative; }\n\nion-button.logout-btn ion-icon {\n    margin-top: 1em; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-resizer/ngx */ "./node_modules/@ionic-native/image-resizer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _search_by_vehicle_search_by_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-by-vehicle/search-by-vehicle.component */ "./src/app/search-by-vehicle/search-by-vehicle.component.ts");
/* harmony import */ var _search_by_user_search_by_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-by-user/search-by-user.component */ "./src/app/search-by-user/search-by-user.component.ts");
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








var HomePage = /** @class */ (function () {
    function HomePage(camera, restService, imageResizer, transfer, modalController, actionSheetController, zone, navCtrl) {
        this.camera = camera;
        this.restService = restService;
        this.imageResizer = imageResizer;
        this.transfer = transfer;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.appLogo = 'assets/icon/inner_header_logo.png';
        this.scanImage = 'assets/icon/scan_img.png';
        this.property = 0;
        this.properties = [];
        this.make = '';
        this.model = '';
        this.year = '';
        this.vin = '';
        this.plate = '';
        this.firstName = '';
        this.lastName = '';
        this.residentUnit = '';
        this.email = '';
        this.phone = '';
        this.selectedImage = '';
        this.isEnforcement = false;
        this.checkRole();
        this.getProperties();
    }
    HomePage.prototype.logout = function () {
        this.restService.systemLogout();
    };
    HomePage.prototype.getProperties = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restService.getStorage("userInfo")];
                    case 1:
                        response = _a.sent();
                        requestData = {
                            sp_action: "sp_get_property_list",
                            user_id: response["user_id"]
                        };
                        this.restService.showLoader('Fetching Properties');
                        this.restService.makePostRequest(requestData).then(function (result) {
                            _this.restService.hideLoader();
                            _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.properties = result['Properties'];
                                    return [2 /*return*/];
                                });
                            }); });
                            console.log(_this.properties);
                        }, function (err) {
                            _this.restService.hideLoader();
                            if (err.error) {
                                _this.restService.showAlert("Notice", _this.restService.setErrorMessageArray(err.error.message));
                            }
                            else {
                                _this.restService.showAlert("Notice", err.statusText);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.viewVehicleSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.property == 0 || this.property == undefined)) return [3 /*break*/, 1];
                        this.restService.showToast("Please select property");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: _search_by_vehicle_search_by_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["SearchByVehicleComponent"]
                        })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss(function (data) {
                            if (Object.keys(data.data).length > 0) {
                                _this.make = data.data.make;
                                _this.model = data.data.model;
                                _this.year = data.data.year;
                                _this.vin = data.data.vin;
                                _this.plate = data.data.plate;
                                _this.searchManualVehicle();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.viewUserSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.property == 0 || this.property == undefined)) return [3 /*break*/, 1];
                        this.restService.showToast("Please select property");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: _search_by_user_search_by_user_component__WEBPACK_IMPORTED_MODULE_7__["SearchByUserComponent"]
                        })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss(function (data) {
                            if (Object.keys(data.data).length > 0) {
                                _this.firstName = data.data.firstName;
                                _this.lastName = data.data.lastName;
                                _this.residentUnit = data.data.residentUnit;
                                _this.email = data.data.email;
                                _this.phone = data.data.phone;
                                _this.searchManualUser();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchManualVehicle = function () {
        var _this = this;
        var requestData = {
            sp_action: "sp_search_permit_by_vehicle",
            selected_cat: this.property,
            vehicle_make: this.make,
            vehicle_model: this.model,
            vehicle_year: this.year,
            vehicle_vin: this.vin,
            vehicle_plate: this.plate
        };
        this.restService.showLoader('Searching Vehicles');
        this.restService.makeGetRequest(requestData).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.restService.hideLoader();
                        if (!(result['json'] && result['json'].length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.restService.setStorage("userData", [])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restService.setStorage("vehicleData", result['json'])];
                    case 2:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/property-list");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.restService.showAlert("Notice", "No vehicles found");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            _this.restService.hideLoader();
            if (err.error) {
                _this.restService.showAlert("Notice", _this.restService.setErrorMessageArray(err.error.message));
            }
            else {
                _this.restService.showAlert("Notice", err.statusText);
            }
        });
    };
    HomePage.prototype.searchManualUser = function () {
        var _this = this;
        var requestData = {
            sp_action: "sp_search_permit_by_user",
            selected_cat: this.property,
            first_name: this.firstName,
            last_name: this.lastName,
            email_address: this.email,
            phone_number: this.phone,
            unit_number: this.residentUnit
        };
        this.restService.showLoader('Searching Users');
        this.restService.makeGetRequest(requestData).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.restService.hideLoader();
                        if (!(result['json'] && result['json'].length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.restService.setStorage("vehicleData", [])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restService.setStorage("userData", result['json'])];
                    case 2:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/property-list");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.restService.showAlert("Notice", "No vehicles found");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            _this.restService.hideLoader();
            if (err.error) {
                _this.restService.showAlert("Notice", _this.restService.setErrorMessageArray(err.error.message));
            }
            else {
                _this.restService.showAlert("Notice", err.statusText);
            }
        });
    };
    HomePage.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (this.property == 0 || this.property == undefined) {
                    this.restService.showToast("Please select property");
                }
                else {
                    options = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.FILE_URI,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        correctOrientation: true
                    };
                    options['sourceType'] = 1;
                    this.launchProgram(options);
                    // const actionSheet = await this.actionSheetController.create({
                    //   header: "Plate Number",
                    //   buttons: [{
                    //     text: 'Camera',
                    //     icon: 'camera',
                    //     handler: () => {
                    //       options['sourceType'] = 1;
                    //       this.launchProgram(options);
                    //     }
                    //   }, {
                    //     text: 'Gallery',
                    //     icon: 'albums',
                    //     handler: () => {
                    //       options['sourceType'] = 0;
                    //       this.launchProgram(options);
                    //     }
                    //   }]
                    // });
                    // await actionSheet.present();
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.launchProgram = function (options) {
        var _this = this;
        this.camera.getPicture(options).then(function (imageData) {
            // this.selectedImage = imageData;
            // this.viewPicture();
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL): 'data:image/jpeg;base64,' + 
            console.log(imageData);
            var options = {
                uri: imageData,
                quality: 90,
                width: 1080,
                height: 1080
            };
            _this.imageResizer
                .resize(options)
                .then(function (filePath) {
                console.log('FilePath', filePath);
                _this.selectedImage = filePath;
                _this.viewPicture();
            })
                .catch(function (e) { return console.log(e); });
        }, function (err) {
            _this.restService.showAlert("Notice", JSON.stringify(err));
        });
    };
    HomePage.prototype.viewPicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.scanPlate();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.scanPlate = function () {
        var _this = this;
        var options = {
            fileKey: 'uploadFileName',
            fileName: 'name.jpg',
            chunkedMode: false,
            mimeType: "multipart/form-data"
        };
        var fileTransfer = this.transfer.create();
        this.restService.showLoader('Sending Image');
        fileTransfer.upload(this.selectedImage, this.restService.cityApiUrl + "?sp_action=sp_permit_check_vehicle_image&selected_cat=" + this.property, options)
            .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var response, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.restService.hideLoader();
                        console.log(result);
                        result = JSON.parse(result.response);
                        if (!(result['json'].length > 0)) return [3 /*break*/, 3];
                        // this.zone.run(() => {
                        //   this.vehicleData = result['json'];
                        // });
                        return [4 /*yield*/, this.restService.setStorage("userData", [])];
                    case 1:
                        // this.zone.run(() => {
                        //   this.vehicleData = result['json'];
                        // });
                        _a.sent();
                        return [4 /*yield*/, this.restService.setStorage("vehicleData", result['json'])];
                    case 2:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/property-list");
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.restService.setStorage("plateData", result['plateData'])];
                    case 4:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/no-permit-result");
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            _this.restService.hideLoader();
            _this.restService.showAlert("Notice", JSON.stringify(err));
        });
    };
    HomePage.prototype.checkRole = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, userRoles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restService.getStorage("userInfo")];
                    case 1:
                        response = _a.sent();
                        userRoles = response["roles"];
                        if (userRoles.indexOf("enforcement") !== -1) {
                            this.isEnforcement = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_3__["ImageResizer"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map