(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n  <ion-grid>\n    <ion-row class=\"item-verticle-align-center\">\n\n      <ion-col size=\"12\" [attr.size-sm]=\"colSize\" [attr.size-md]=\"colSize\" [attr.size-lg]=\"colSize\" [attr.size-xl]=\"colSize\">\n        <ion-item>\n          <img class=\"logoImg\" [src]=\"appLogo\" />\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\" [attr.size-sm]=\"colSize\" [attr.size-md]=\"colSize\" [attr.size-lg]=\"colSize\" [attr.size-xl]=\"colSize\">\n        <ion-item class=\"margin-bottom\" margin-top>\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <!-- <ion-input [(ngModel)]=\"username\" placeholder=\"USERNAME OR EMAIL ADDRESS\"></ion-input> -->\n          <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"USERNAME OR EMAIL ADDRESS\" />\n        </ion-item>\n\n        <ion-item class=\"margin-bottom\">\n          <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\n          <!-- <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"PASSWORD\"></ion-input> -->\n          <input type=\"password\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"PASSWORD\" />\n\n        </ion-item>\n\n        <ion-item class=\"margin-bottom\">\n          <ion-icon class=\"select-pin\" slot=\"start\" name=\"pin\"></ion-icon>\n          <ion-select [(ngModel)]=\"city\" interface=\"popover\" (ionChange)=\"changeApiUrl()\" placeholder=\"SELECT CITY\">\n            <ion-select-option *ngFor=\"let city of cities\" value=\"{{city.city_api_url}}|{{city.forgot_password_link}}\">{{city.city_name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-button class=\"loginButton\" expand=\"block\" size=\"large\" (click)=\"login()\">LOGIN</ion-button>\n        <ion-button class=\"forget-link\" (click)=\"openForgotPassword()\">FORGOT YOUR PASSWORD?</ion-button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-interactive.sc-ion-label-md-h, .item-interactive .sc-ion-label-md-h {\n  z-index: 9; }\n\n.input-box {\n  position: relative; }\n\n.select-pin {\n  margin-top: 0; }\n\n.logoImg {\n  max-width: 85% !important;\n  margin: 0 auto; }\n\n.forget-link {\n  --box-shadow: none !important;\n  box-shadow: none !important; }\n\nion-grid.hydrated {\n  display: -ms-grid;\n  display: grid;\n  align-items: center;\n  height: 100%; }\n\nion-row.item-verticle-align-center.hydrated {\n  display: flex;\n  align-items: center; }\n\n@media screen and (min-width: 576px) {\n  .logoImg {\n    max-width: 90% !important;\n    margin: 0 auto; }\n  .loginButton {\n    margin-top: 25px; } }\n\n@media screen and (max-device-width: 768px) and (orientation: portrait) {\n  ion-item.item.hydrated {\n    margin-bottom: 1.2em; } }\n"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
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





var LoginPage = /** @class */ (function () {
    function LoginPage(restService, navCtrl, zone, iab, screenOrientation) {
        var _this = this;
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.iab = iab;
        this.screenOrientation = screenOrientation;
        this.cities = [];
        this.username = '';
        this.password = '';
        this.city = '';
        this.forgotPasswordLink = '';
        this.appLogo = 'assets/icon/login_logo.png';
        this.deviceMode = '';
        this.colSize = 12;
        this.login = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.city == '' || this.city == undefined)) return [3 /*break*/, 1];
                        this.restService.showToast('Please select a city');
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.username == '')) return [3 /*break*/, 2];
                        this.restService.showToast('Please enter username');
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.password == '')) return [3 /*break*/, 3];
                        this.restService.showToast('Please enter password');
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 4:
                        _a.sent();
                        this.restService.showLoader('Logging in...');
                        requestData = {
                            sp_action: "sp_lpr_login",
                            sp_user_login: this.username,
                            sp_user_password: this.password
                        };
                        this.restService.makePostRequest(requestData).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.restService.hideLoader();
                                        if (!!result['sp_error']) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.restService.setStorage("session_id", result['session_id'])];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.restService.setStorage("userInfo", result['sp_user'])];
                                    case 2:
                                        response = _a.sent();
                                        if (response) {
                                            this.navCtrl.goRoot("/home");
                                            this.restService.checkLoginStatus();
                                        }
                                        return [3 /*break*/, 4];
                                    case 3:
                                        this.restService.showAlert('Error', result['sp_error']);
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
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCities();
        this.deviceMode = this.screenOrientation.type;
        if (this.deviceMode == 'landscape-primary' || this.deviceMode == 'landscape-secondary') {
            this.colSize = 6;
        }
        this.screenOrientation.onChange().subscribe(function () {
            _this.deviceMode = _this.screenOrientation.type;
            if (_this.deviceMode == 'landscape-primary' || _this.deviceMode == 'landscape-secondary') {
                _this.colSize = 6;
            }
            else {
                _this.colSize = 12;
            }
        });
    };
    LoginPage.prototype.changeApiUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fglink;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.city);
                        if (!(this.city !== undefined)) return [3 /*break*/, 2];
                        fglink = this.city.split("|");
                        console.log(fglink);
                        this.forgotPasswordLink = fglink[1];
                        return [4 /*yield*/, this.restService.setStorage("cityApiUrl", fglink[0])];
                    case 1:
                        _a.sent();
                        this.restService.cityApiUrl = fglink[0];
                        console.log(this.restService.cityApiUrl);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getCities = function () {
        var _this = this;
        this.restService.showLoader('Loading cities...');
        var requestData = {
            sp_action: "sp_lpr_cities_list"
        };
        this.restService.makeCommonGetRequest(requestData).then(function (result) {
            _this.restService.hideLoader();
            _this.cities = result['CityApiList'];
            console.log(_this.cities);
        }, function (err) {
            _this.restService.hideLoader();
            if (err.error) {
                _this.restService.showAlert("Notice", _this.restService.setErrorMessageArray(err.error.message));
            }
            else {
                _this.restService.showAlert("Notice", err.statusText);
            }
        });
    };
    LoginPage.prototype.openForgotPassword = function () {
        if (this.city == '' || this.city == undefined) {
            this.restService.showToast('Please select a city');
        }
        else {
            this.iab.create(this.forgotPasswordLink);
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map