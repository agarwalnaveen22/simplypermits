(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./forgot-password/forgot-password.module": [
		"./src/app/forgot-password/forgot-password.module.ts",
		"forgot-password-forgot-password-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./no-permit-result/no-permit-result.module": [
		"./src/app/no-permit-result/no-permit-result.module.ts",
		"no-permit-result-no-permit-result-module"
	],
	"./permit-detail/permit-detail.module": [
		"./src/app/permit-detail/permit-detail.module.ts",
		"permit-detail-permit-detail-module"
	],
	"./property-list/property-list.module": [
		"./src/app/property-list/property-list.module.ts",
		"property-list-property-list-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/add-note/add-note.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-note/add-note.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons class=\"logoHeader\" slot=\"start\" (click)=\"closeModal(0)\">\n        <ion-button>\n          <img [src]=\"appLogo\" />\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-label>ADD NOTE</ion-label>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding text-center>\n\n  <ion-item class=\"description_area\">\n    <ion-textarea rows=\"21\" [(ngModel)]=\"description\" placeholder=\"Add note here...\"></ion-textarea>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar class=\"footer_add_note\" >\n      <ion-buttons class=\"add_note_btn_cancel\" (click)=\"closeModal(1)\"  text-center slot=\"start\">\n        <ion-button>\n          <ion-label>CANCEL</ion-label>\n        </ion-button>\n      </ion-buttons>\n      \n      <ion-buttons class=\"add_note_btn_submit\" text-center slot=\"end\" (click)=\"addNotes()\">\n        <ion-button>\n          <ion-label>SUBMIT</ion-label>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/add-note/add-note.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-note/add-note.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description_area {\n  background: #191242;\n  height: 100%; }\n  .description_area ion-textarea {\n    color: #FFF;\n    height: 100%; }\n  .footer_add_note {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n  .footer_add_note ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n  .footer_add_note ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n  .footer_add_note ion-buttons.add_note_btn_submit {\n    background: #9b1f60; }\n  .footer_add_note ion-buttons.add_note_btn_cancel {\n    background: #191242; }\n"

/***/ }),

/***/ "./src/app/add-note/add-note.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-note/add-note.component.ts ***!
  \************************************************/
/*! exports provided: AddNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function() { return AddNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
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



var AddNoteComponent = /** @class */ (function () {
    function AddNoteComponent(modalCtrl, restService, navParams) {
        this.modalCtrl = modalCtrl;
        this.restService = restService;
        this.navParams = navParams;
        this.appLogo = 'assets/icon/inner_header_logo.png';
        this.description = '';
        this.permitId = 0;
        this.permitId = navParams.get("permitId");
    }
    AddNoteComponent.prototype.closeModal = function (type) {
        var data = { type: type };
        this.modalCtrl.dismiss(data);
    };
    AddNoteComponent.prototype.addNotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.description == '')) return [3 /*break*/, 1];
                        this.restService.showAlert('Error', 'Please enter description');
                        return [3 /*break*/, 3];
                    case 1:
                        requestData = {
                            sp_action: "sp_permit_add_note",
                            permit_id: this.permitId,
                            page_id: "Permit Detail",
                            add_note: this.description
                        };
                        return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 2:
                        _a.sent();
                        this.restService.showLoader('Saving notes');
                        this.restService.makePostRequest(requestData).then(function (result) {
                            _this.restService.hideLoader();
                            if (!result['error']) {
                                _this.restService.showAlert('Success', result['message']);
                                _this.closeModal(1);
                            }
                            else {
                                _this.restService.showAlert('Error', result['message']);
                            }
                        }, function (err) {
                            _this.restService.hideLoader();
                            if (err.error) {
                                _this.restService.showAlert("Notice", _this.restService.setErrorMessageArray(err.error.message));
                            }
                            else {
                                _this.restService.showAlert("Notice", err.statusText);
                            }
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-note',
            template: __webpack_require__(/*! ./add-note.component.html */ "./src/app/add-note/add-note.component.html"),
            styles: [__webpack_require__(/*! ./add-note.component.scss */ "./src/app/add-note/add-note.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]])
    ], AddNoteComponent);
    return AddNoteComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
    { path: 'permit-detail/:id', loadChildren: './permit-detail/permit-detail.module#PermitDetailPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'property-list', loadChildren: './property-list/property-list.module#PropertyListPageModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'no-permit-result', loadChildren: './no-permit-result/no-permit-result.module#NoPermitResultPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest.service */ "./src/app/rest.service.ts");
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





var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, restService) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.restService = restService;
        this.setUrl = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restService.getStorage("cityApiUrl")];
                    case 1:
                        resp = _a.sent();
                        if (resp != null) {
                            this.restService.cityApiUrl = resp.toString();
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.splashScreen.hide();
                this.statusBar.styleLightContent();
                this.setUrl();
                return [2 /*return*/];
            });
        }); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-resizer/ngx */ "./node_modules/@ionic-native/image-resizer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/add-note/add-note.component.ts");
/* harmony import */ var _view_notes_view_notes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-notes/view-notes.component */ "./src/app/view-notes/view-notes.component.ts");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./image-preview/image-preview.component */ "./src/app/image-preview/image-preview.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _search_by_vehicle_search_by_vehicle_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search-by-vehicle/search-by-vehicle.component */ "./src/app/search-by-vehicle/search-by-vehicle.component.ts");
/* harmony import */ var _search_by_user_search_by_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search-by-user/search-by-user.component */ "./src/app/search-by-user/search-by-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_21__["AddNoteComponent"], _view_notes_view_notes_component__WEBPACK_IMPORTED_MODULE_22__["ViewNotesComponent"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_23__["ImagePreviewComponent"], _search_by_vehicle_search_by_vehicle_component__WEBPACK_IMPORTED_MODULE_25__["SearchByVehicleComponent"], _search_by_user_search_by_user_component__WEBPACK_IMPORTED_MODULE_26__["SearchByUserComponent"]],
            entryComponents: [_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_21__["AddNoteComponent"], _view_notes_view_notes_component__WEBPACK_IMPORTED_MODULE_22__["ViewNotesComponent"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_23__["ImagePreviewComponent"], _search_by_vehicle_search_by_vehicle_component__WEBPACK_IMPORTED_MODULE_25__["SearchByVehicleComponent"], _search_by_user_search_by_user_component__WEBPACK_IMPORTED_MODULE_26__["SearchByUserComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({ mode: 'md', scrollAssist: 'DISABLED' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"].forRoot(),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
                _ionic_native_image_resizer_ngx__WEBPACK_IMPORTED_MODULE_10__["ImageResizer"],
                _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"],
                _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"],
                _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_16__["Device"],
                _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_17__["ScreenOrientation"],
                _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_18__["Keyboard"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "./src/app/rest.service.ts");
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



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, restService) {
        this.router = router;
        this.restService = restService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getStorage("userInfo")];
                    case 1:
                        resp = _a.sent();
                        console.log(resp);
                        if (resp != null) {
                            return [2 /*return*/, true];
                        }
                        else {
                            this.router.navigate(['/login']);
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.router.navigate(['/login']);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/image-preview/image-preview.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-preview/image-preview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons class=\"logoHeader\" slot=\"start\">\n        <ion-button>\n          <img [src]=\"appLogo\" />\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-label>CONFIRM PHOTO</ion-label>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding text-center>\n\n  <ion-item>\n    <img [src]=\"selectedImage\" style=\"width: 300px;\" />\n  </ion-item>\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar class=\"image_preview\" >\n      <ion-buttons class=\"btn_retake\"  (click)=\"closeModal(0)\"  text-center slot=\"start\">\n        <ion-button>\n          <ion-label>RETAKE PHOTO</ion-label>\n        </ion-button>\n      </ion-buttons>\n      \n      <ion-buttons class=\"search_permit\"  text-center slot=\"end\" (click)=\"closeModal(1)\">\n        <ion-button>\n          <ion-label>SEARCH PERMITS</ion-label>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/image-preview/image-preview.component.scss":
/*!************************************************************!*\
  !*** ./src/app/image-preview/image-preview.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image_preview {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n  .image_preview ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n  .image_preview ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n  .image_preview ion-buttons.btn_retake {\n    background: #140d33; }\n  .image_preview ion-buttons.search_permit {\n    background: #f26825; }\n"

/***/ }),

/***/ "./src/app/image-preview/image-preview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-preview/image-preview.component.ts ***!
  \**********************************************************/
/*! exports provided: ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagePreviewComponent = /** @class */ (function () {
    function ImagePreviewComponent(modalCtrl, navParams, base64, domSanitizer) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.base64 = base64;
        this.domSanitizer = domSanitizer;
        this.appLogo = 'assets/icon/inner_header_logo.png';
        base64.encodeFile(navParams.get("imageData")).then(function (base64File) {
            console.log(base64File);
            _this.selectedImage = domSanitizer.bypassSecurityTrustUrl(base64File);
        }, function (err) {
            alert(JSON.stringify(err));
        });
    }
    ImagePreviewComponent.prototype.ngOnInit = function () {
    };
    ImagePreviewComponent.prototype.closeModal = function (type) {
        var data = { type: type };
        this.modalCtrl.dismiss(data);
    };
    ImagePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-preview',
            template: __webpack_require__(/*! ./image-preview.component.html */ "./src/app/image-preview/image-preview.component.html"),
            styles: [__webpack_require__(/*! ./image-preview.component.scss */ "./src/app/image-preview/image-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_2__["Base64"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ImagePreviewComponent);
    return ImagePreviewComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
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





var RestService = /** @class */ (function () {
    function RestService(http, loadingController, alertController, toastController, modalCtrl, storage, navCtrl, keyboard) {
        var _this = this;
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.apiUrl = 'https://simplypermits.com/API/rest.php';
        this.cityApiUrl = '';
        this.isKeyBoardHide = false;
        this.logout = function (type) { return __awaiter(_this, void 0, void 0, function () {
            var requestData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 1)) return [3 /*break*/, 5];
                        requestData = {
                            sp_action: "sp_lpr_logout"
                        };
                        return [4 /*yield*/, this.keyBoardHide()];
                    case 1:
                        _a.sent();
                        this.showLoader('Logging out...');
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.makePostRequest(requestData)];
                    case 3:
                        _a.sent();
                        this.hideLoader();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        this.storage.clear();
                        this.navCtrl.goRoot("/login");
                        return [2 /*return*/];
                }
            });
        }); };
        this.sessionExpireAction = function () {
            clearInterval(_this.checkSession);
            _this.hideLoader();
            _this.modalCtrl.dismiss();
            _this.logout(2);
            _this.showAlert("Error", "Your session has expired. Please login to continue.");
        };
        this.setSessionId = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, response, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = data;
                        _b = 'session_id';
                        return [4 /*yield*/, this.getStorage('session_id')];
                    case 1:
                        _a[_b] = _c.sent();
                        return [4 /*yield*/, this.getStorage('userInfo')];
                    case 2:
                        response = _c.sent();
                        data['user_id'] = response['user_id'];
                        return [2 /*return*/, data];
                    case 3:
                        error_2 = _c.sent();
                        this.logout(2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.checkLoginStatus = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.checkSession = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                    var requestData, error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requestData = {
                                    sp_action: "sp_check_session"
                                };
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this.makePostRequest(requestData)];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                error_3 = _a.sent();
                                this.logout(2);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }, 30000);
                return [2 /*return*/];
            });
        }); };
        this.keyBoardHide = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.keyboard.hide();
                        _this.checkKeyBoardVisible();
                        var keyboardhideint = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (this.isKeyBoardHide) {
                                    this.isKeyBoardHide = false;
                                    clearInterval(keyboardhideint);
                                    resolve();
                                }
                                return [2 /*return*/];
                            });
                        }); }, 100);
                    })];
            });
        }); };
        this.checkKeyBoardVisible = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.keyboard.isVisible) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.checkKeyBoardVisible();
                            return [2 /*return*/];
                        });
                    }); }, 50);
                }
                else {
                    this.isKeyBoardHide = true;
                }
                return [2 /*return*/];
            });
        }); };
    }
    RestService.prototype.showLoader = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                spinner: 'hide',
                                content: "<div class=\"loading-outer\"><div class=\"loader\"></div>\n      <img src=\"assets/icon/logo.png\" /></div>\n              <div style=\"margin-top:2em\">" + message + "</div>"
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        document.getElementsByClassName("loading-content")[0].innerHTML = document.getElementsByClassName("loading-content")[0].textContent;
                        document.getElementsByClassName("loading-wrapper")[0].style.visibility = 'visible';
                        document.getElementsByClassName("backdrop-no-tappable")[0].style.opacity = '1';
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.hideLoader = function () {
        if (document.getElementsByClassName("backdrop-no-tappable")[0] === undefined) {
            return;
        }
        document.getElementsByClassName("backdrop-no-tappable")[0].style.opacity = '0.5';
        this.loading.dismiss();
    };
    RestService.prototype.showAlert = function (header, message) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: header,
                                message: message,
                                buttons: ['OK']
                            })];
                    case 1:
                        _a.alert = _b.sent();
                        return [4 /*yield*/, this.alert.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.showToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.setStorage = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(key, value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestService.prototype.getStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve) {
                            _this.storage.get(key).then(function (val) {
                                resolve(val);
                            });
                        });
                        return [4 /*yield*/, promise];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestService.prototype.removeStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestService.prototype.setErrorMessageArray = function (msg) {
        return msg.join("<br/>");
    };
    RestService.prototype.setUrl = function (requestData) {
        return Object.keys(requestData).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(requestData[key]);
        }).join('&');
    };
    RestService.prototype.systemLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Logout',
                            message: 'Are you sure?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.logout(1);
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.makeCommonGetRequest = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                }),
                params: data
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestService.prototype.makeGetRequest = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setSessionId(data)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.get(_this.cityApiUrl, {
                                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                                        'Content-Type': 'application/json'
                                    }),
                                    params: data
                                })
                                    .subscribe(function (res) {
                                    if (res['session_status'] === "Invalid Session") {
                                        _this.sessionExpireAction();
                                        return;
                                    }
                                    resolve(res);
                                }, function (err) {
                                    reject(err);
                                });
                            })];
                }
            });
        });
    };
    RestService.prototype.makeCommonPostRequest = function (data) {
        var _this = this;
        data = this.setUrl(data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl, data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestService.prototype.makePostRequest = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data['sp_action'] !== 'sp_lpr_login')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setSessionId(data)];
                    case 1:
                        data = _a.sent();
                        _a.label = 2;
                    case 2:
                        data = this.setUrl(data);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.post(_this.cityApiUrl, data, {
                                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    })
                                })
                                    .subscribe(function (res) {
                                    if (res['session_status'] === "Invalid Session") {
                                        _this.sessionExpireAction();
                                        return;
                                    }
                                    resolve(res);
                                }, function (err) {
                                    reject(err);
                                });
                            })];
                }
            });
        });
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/search-by-user/search-by-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons class=\"logoHeader\" slot=\"start\" (click)=\"closeModal(0)\">\n        <ion-button>\n          <img slot=\"start\" [src]=\"appLogo\" />\n        </ion-button>\n      </ion-buttons>\n      <ion-label>Search By User</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeModal(0)\">\n          <ion-icon class=\"logoutIcon\" slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding text-center>\n  \n    <ion-item class=\"margin-bottom\" margin-top>\n      <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n      <ion-input [(ngModel)]=\"firstName\" placeholder=\"First Name\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"margin-bottom\">\n      <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n      <ion-input [(ngModel)]=\"lastName\" placeholder=\"Last Name\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"margin-bottom\">\n      <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n      <ion-input [(ngModel)]=\"residentUnit\" placeholder=\"Resident Unit\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"margin-bottom\">\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n    </ion-item>\n  \n    <ion-item class=\"margin-bottom\">\n      <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n      <ion-input [(ngModel)]=\"phone\" type=\"tel\" placeholder=\"Phone Number\"></ion-input>\n    </ion-item>\n  \n    <ion-button class=\"loginButton\" expand=\"block\" size=\"large\" (click)=\"closeModal(1)\">Search</ion-button>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/search-by-user/search-by-user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-by-user/search-by-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.component.ts ***!
  \************************************************************/
/*! exports provided: SearchByUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByUserComponent", function() { return SearchByUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchByUserComponent = /** @class */ (function () {
    function SearchByUserComponent(modalCtrl, restService) {
        this.modalCtrl = modalCtrl;
        this.restService = restService;
        this.firstName = '';
        this.lastName = '';
        this.residentUnit = '';
        this.email = '';
        this.phone = '';
        this.appLogo = 'assets/icon/inner_header_logo.png';
    }
    SearchByUserComponent.prototype.closeModal = function (type) {
        if (type == 1) {
            if (this.firstName == '' && this.lastName == '' && this.residentUnit == '' && this.email == '' && this.phone == '') {
                this.restService.showAlert('Error', 'Please enter some input');
            }
            else {
                var data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    residentUnit: this.residentUnit,
                    email: this.email,
                    phone: this.phone
                };
                this.modalCtrl.dismiss(data);
            }
        }
        else {
            var data = {};
            this.modalCtrl.dismiss(data);
        }
    };
    SearchByUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-by-user',
            template: __webpack_require__(/*! ./search-by-user.component.html */ "./src/app/search-by-user/search-by-user.component.html"),
            styles: [__webpack_require__(/*! ./search-by-user.component.scss */ "./src/app/search-by-user/search-by-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], SearchByUserComponent);
    return SearchByUserComponent;
}());



/***/ }),

/***/ "./src/app/search-by-vehicle/search-by-vehicle.component.html":
/*!********************************************************************!*\
  !*** ./src/app/search-by-vehicle/search-by-vehicle.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"logoHeader\" slot=\"start\" (click)=\"closeModal(0)\">\n      <ion-button>\n        <img slot=\"start\" [src]=\"appLogo\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Search By Vehicle</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal(0)\">\n        <ion-icon class=\"logoutIcon\" slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-item class=\"margin-bottom\" margin-top>\n    <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n    <ion-input [(ngModel)]=\"make\" placeholder=\"Make\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n    <ion-input [(ngModel)]=\"model\" placeholder=\"Model\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n    <ion-input [(ngModel)]=\"year\" type=\"number\" placeholder=\"Year\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"disc\"></ion-icon>\n    <ion-input [(ngModel)]=\"vin\" placeholder=\"Vin\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"car\"></ion-icon>\n    <ion-input [(ngModel)]=\"plate\" placeholder=\"Plate\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"loginButton\" expand=\"block\" size=\"large\" (click)=\"closeModal(1)\">Search</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search-by-vehicle/search-by-vehicle.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/search-by-vehicle/search-by-vehicle.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-by-vehicle/search-by-vehicle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/search-by-vehicle/search-by-vehicle.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchByVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByVehicleComponent", function() { return SearchByVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchByVehicleComponent = /** @class */ (function () {
    function SearchByVehicleComponent(modalCtrl, restService) {
        this.modalCtrl = modalCtrl;
        this.restService = restService;
        this.make = '';
        this.model = '';
        this.year = '';
        this.vin = '';
        this.plate = '';
        this.appLogo = 'assets/icon/inner_header_logo.png';
    }
    SearchByVehicleComponent.prototype.closeModal = function (type) {
        if (type == 1) {
            if (this.make == '' && this.model == '' && this.year == '' && this.vin == '' && this.plate == '') {
                this.restService.showAlert('Error', 'Please enter some input');
            }
            else {
                var data = {
                    make: this.make,
                    model: this.model,
                    year: this.year,
                    vin: this.vin,
                    plate: this.plate
                };
                this.modalCtrl.dismiss(data);
            }
        }
        else {
            var data = {};
            this.modalCtrl.dismiss(data);
        }
    };
    SearchByVehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-by-vehicle',
            template: __webpack_require__(/*! ./search-by-vehicle.component.html */ "./src/app/search-by-vehicle/search-by-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./search-by-vehicle.component.scss */ "./src/app/search-by-vehicle/search-by-vehicle.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], SearchByVehicleComponent);
    return SearchByVehicleComponent;
}());



/***/ }),

/***/ "./src/app/view-notes/view-notes.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-notes/view-notes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"logoHeader\" slot=\"start\" (click)=\"closeModal(0)\">\n      <ion-button>\n        <img [src]=\"appLogo\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-label>PERMIT NOTES</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let note of notes\" class=\"view_permit_notes\">\n    <ion-item class=\"header\">\n      <ion-label class=\"date_block\" text-wrap>{{note.notes_date}}</ion-label>\n      <ion-label text-end slot=\"end\">{{note.notes_time}}</ion-label>\n    </ion-item>\n    <ion-card-content [innerHtml]=\"note.notes_desc\">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer (click)=\"closeModal(1)\">\n  <ion-toolbar>\n    <ion-title text-center>BACK</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/view-notes/view-notes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/view-notes/view-notes.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #1a1142; }\n\n.view_permit_notes {\n  background: #17082d;\n  margin-bottom: 2em; }\n\n.view_permit_notes .header {\n    background: #1b1549; }\n\n.view_permit_notes .header .date_block {\n      margin: 0; }\n\n.view_permit_notes ion-card-content {\n    color: #FFFFFF;\n    text-align: left; }\n"

/***/ }),

/***/ "./src/app/view-notes/view-notes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-notes/view-notes.component.ts ***!
  \****************************************************/
/*! exports provided: ViewNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesComponent", function() { return ViewNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
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



var ViewNotesComponent = /** @class */ (function () {
    function ViewNotesComponent(modalCtrl, restService, navParams) {
        this.modalCtrl = modalCtrl;
        this.restService = restService;
        this.navParams = navParams;
        this.appLogo = 'assets/icon/inner_header_logo.png';
        this.notes = [];
        this.permitId = 0;
        this.permitId = navParams.get("permitId");
        this.getPermitDetail();
    }
    ViewNotesComponent.prototype.ngOnInit = function () {
    };
    ViewNotesComponent.prototype.closeModal = function (type) {
        var data = { type: type };
        this.modalCtrl.dismiss(data);
    };
    ViewNotesComponent.prototype.refreshData = function (event) {
        this.getPermitDetail();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    ViewNotesComponent.prototype.getPermitDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.notes = [];
                        requestData = {
                            sp_action: "sp_permit_detail",
                            permit_id: this.permitId
                        };
                        return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 1:
                        _a.sent();
                        this.restService.showLoader('Getting Permit Notes');
                        this.restService.makeGetRequest(requestData).then(function (result) {
                            _this.restService.hideLoader();
                            if (result['PermitDetail']) {
                                _this.notes = result['PermitDetail']['Notes'];
                            }
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
    ViewNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-notes',
            template: __webpack_require__(/*! ./view-notes.component.html */ "./src/app/view-notes/view-notes.component.html"),
            styles: [__webpack_require__(/*! ./view-notes.component.scss */ "./src/app/view-notes/view-notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]])
    ], ViewNotesComponent);
    return ViewNotesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/baps/Projects/ionic/SimplyPermits-LPR/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map