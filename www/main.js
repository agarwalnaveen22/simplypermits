(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-note/add-note.module": [
		"./src/app/add-note/add-note.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"add-note-add-note-module"
	],
	"./camera-preview/multiple-pics/multiple-pics.module": [
		"./src/app/camera-preview/multiple-pics/multiple-pics.module.ts",
		"camera-preview-multiple-pics-multiple-pics-module"
	],
	"./camera-preview/single-pic/single-pic.module": [
		"./src/app/camera-preview/single-pic/single-pic.module.ts",
		"camera-preview-single-pic-single-pic-module"
	],
	"./forgot-password/forgot-password.module": [
		"./src/app/forgot-password/forgot-password.module.ts",
		"forgot-password-forgot-password-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
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
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"permit-detail-permit-detail-module"
	],
	"./property-list/property-list.module": [
		"./src/app/property-list/property-list.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"property-list-property-list-module"
	],
	"./search-by-user/search-by-user.module": [
		"./src/app/search-by-user/search-by-user.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"search-by-user-search-by-user-module"
	],
	"./search-by-vehicle/search-by-vehicle.module": [
		"./src/app/search-by-vehicle/search-by-vehicle.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"search-by-vehicle-search-by-vehicle-module"
	],
	"./view-notes/view-notes.module": [
		"./src/app/view-notes/view-notes.module.ts",
		"add-note-add-note-module~home-home-module~permit-detail-permit-detail-module~property-list-property-~00cac255",
		"common",
		"view-notes-view-notes-module"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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
    { path: 'view-notes/:permitId', loadChildren: './view-notes/view-notes.module#ViewNotesPageModule' },
    { path: 'add-note/:permitId', loadChildren: './add-note/add-note.module#AddNotePageModule' },
    { path: 'search-by-user', loadChildren: './search-by-user/search-by-user.module#SearchByUserPageModule' },
    { path: 'search-by-vehicle', loadChildren: './search-by-vehicle/search-by-vehicle.module#SearchByVehiclePageModule' },
    { path: 'single-pic', loadChildren: './camera-preview/single-pic/single-pic.module#SinglePicPageModule' },
    { path: 'multiple-pics', loadChildren: './camera-preview/multiple-pics/multiple-pics.module#MultiplePicsPageModule' },
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
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
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
    function AppComponent(platform, splashScreen, statusBar, restService, nativeAudio) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.restService = restService;
        this.nativeAudio = nativeAudio;
        this.setUrl = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp, err_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restService.getStorage("cityApiUrl")];
                    case 1:
                        resp = _a.sent();
                        if (resp != null) {
                            this.restService.cityApiUrl = resp.toString();
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.nativeAudio.preloadSimple('permitFound', 'assets/sound/PermitFound.wav')];
                    case 3:
                        _a.sent();
                        this.restService.permitFoundReady = true;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        if (err_1 === 'A reference already exists for the specified audio id.') {
                            this.restService.permitFoundReady = true;
                        }
                        else {
                            this.restService.permitFoundReady = false;
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.nativeAudio.preloadSimple('permitNotFound', 'assets/sound/NoPermitFound.wav')];
                    case 6:
                        _a.sent();
                        this.restService.permitNotFoundReady = true;
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        if (err_2 === 'A reference already exists for the specified audio id.') {
                            this.restService.permitNotFoundReady = true;
                        }
                        else {
                            this.restService.permitNotFoundReady = false;
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
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
            _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeAudio"]])
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
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/power-management/ngx */ "./node_modules/@ionic-native/power-management/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./image-preview/image-preview.component */ "./src/app/image-preview/image-preview.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
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
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_26__["ImagePreviewComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_28__["MainMenuComponent"]],
            entryComponents: [_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_26__["ImagePreviewComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_28__["MainMenuComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({ mode: 'md', scrollAssist: 'DISABLED' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"].forRoot(),
                _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__["CameraPreview"],
                _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__["Diagnostic"],
                _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_19__["LocationAccuracy"],
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"],
                _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"],
                _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardService"],
                _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"],
                _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_15__["Device"],
                _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_16__["ScreenOrientation"],
                _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__["Keyboard"],
                _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_22__["NativeAudio"],
                _ionic_native_power_management_ngx__WEBPACK_IMPORTED_MODULE_23__["PowerManagement"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
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
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.restService.getStorage("userInfo")];
                    case 1:
                        resp = _a.sent();
                        console.log(resp);
                        if (!(resp != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.restService.checkLoginStatus()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        this.router.navigate(['/login']);
                        return [2 /*return*/, false];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.router.navigate(['/login']);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
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

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-item (click)=\"goToPage('home')\">\n    <ion-label>\n      <img src=\"assets/icon/dashborad_menu_icon.png\" />\n      DASHBOARD\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"scanImage()\">\n    <ion-label>\n      <img src=\"assets/icon/camera_menu_icon.png\" />\n      SCAN PLATE\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"viewVehicleSearchForm()\">\n    <ion-label>\n      <img src=\"assets/icon/vehicle_menu_icon.png\" />\n      SEARCH BY VEHICLE\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"viewUserSearchForm()\">\n    <ion-label>\n      <img src=\"assets/icon/user_menu_icon.png\" />\n      SEARCH BY USER\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"logout()\">\n    <ion-label>\n      <img src=\"assets/icon/logout_menu_icon.png\" />\n      LOGOUT\n    </ion-label>\n  </ion-item>\n</ion-list>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.list.list-md.hydrated {\n  background: #130d31;\n  margin-bottom: 0;\n  border-radius: .3em; }\n\nion-list ion-item ion-label {\n  align-items: center;\n  display: flex; }\n\nion-list ion-item ion-label img {\n    width: 15px;\n    margin-right: .75em; }\n\nion-item {\n  --padding-start: 0.75em; }\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
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



var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(restService, popoverCtrl, navCtrl) {
        this.restService = restService;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.goToPage = function (pageName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.navCtrl.goForward(pageName);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenuComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.restService.systemLogout();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenuComponent.prototype.scanImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.restService.askLprMode();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenuComponent.prototype.viewVehicleSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.restService.viewVehicleSearchForm();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenuComponent.prototype.viewUserSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        this.restService.viewUserSearchForm();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/main-menu/main-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MainMenuComponent);
    return MainMenuComponent;
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
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
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
    function RestService(http, loadingController, alertController, toastController, modalCtrl, storage, navCtrl, keyboard, transfer, cameraPreview, diagnostic, platform, locationAccuracy, geolocation, events, location, nativeAudio, screenOrientation, nhttp) {
        var _this = this;
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.transfer = transfer;
        this.cameraPreview = cameraPreview;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.events = events;
        this.location = location;
        this.nativeAudio = nativeAudio;
        this.screenOrientation = screenOrientation;
        this.nhttp = nhttp;
        this.apiUrl = 'https://simplypermits.com/API/rest.php';
        this.cityApiUrl = '';
        this.isKeyBoardHide = false;
        this.selectedImage = '';
        this.selectedProperty = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.lastLprNumber = '';
        this.isTakeMultiplePics = false;
        this.permitFoundReady = false;
        this.permitNotFoundReady = false;
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
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentLocation()];
                    case 1:
                        _a.sent();
                        this.checkSession = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var requestData, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        requestData = {
                                            sp_action: "sp_check_session",
                                            user_latitude: this.latitude,
                                            user_longitude: this.longitude
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
                }
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
    RestService.prototype.openCameraMultiplePics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!(this.selectedProperty == 0 || this.selectedProperty == undefined)) return [3 /*break*/, 1];
                        this.showToast("Please select property");
                        return [3 /*break*/, 5];
                    case 1:
                        this.navCtrl.goForward('/multiple-pics');
                        return [4 /*yield*/, this.startCameraPreview()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cameraPreview.setFocusMode('continuous-picture')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.cameraPreview.setExposureMode('continuous')];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_4 = _a.sent();
                        this.hideLoader();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.takeMultiplePictures = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isTakeMultiplePics) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cameraPreview.takeSnapshot()];
                    case 1:
                        pic = _a.sent();
                        return [4 /*yield*/, this.checkPermitDetails(pic)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.checkPermitDetails = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var request, resp, lprNumber, requestParams, pictureResult, pictureData, pictureData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 17, , 19]);
                        request = {
                            upload: blob
                        };
                        return [4 /*yield*/, this.scanPlateNumber(request)];
                    case 1:
                        resp = _a.sent();
                        resp = JSON.parse(resp.data);
                        if (!(resp.results.length > 0)) return [3 /*break*/, 14];
                        lprNumber = resp.results[0].plate;
                        if (!(lprNumber != this.lastLprNumber)) return [3 /*break*/, 11];
                        this.lastLprNumber = lprNumber;
                        requestParams = {
                            sp_action: "sp_permit_check_vehicle_image_upload",
                            selected_cat: this.selectedProperty,
                            img_latitude: this.latitude,
                            img_longitude: this.longitude,
                            plate_value: lprNumber
                        };
                        return [4 /*yield*/, this.makePostRequest(requestParams)];
                    case 2:
                        pictureResult = _a.sent();
                        if (!(pictureResult['json'].length > 0)) return [3 /*break*/, 6];
                        pictureData = {
                            status: true,
                            data: pictureResult['json'][0]
                        };
                        this.events.publish('pictureData', pictureData);
                        if (!this.permitFoundReady) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.nativeAudio.play('permitFound')];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.takeMultiplePictures()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        pictureData = {
                            status: false,
                            data: pictureResult['plateData']
                        };
                        this.events.publish('pictureData', pictureData);
                        if (!this.permitNotFoundReady) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.nativeAudio.play('permitNotFound')];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, this.takeMultiplePictures()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, this.takeMultiplePictures()];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, this.takeMultiplePictures()];
                    case 15:
                        _a.sent();
                        _a.label = 16;
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        error_5 = _a.sent();
                        return [4 /*yield*/, this.takeMultiplePictures()];
                    case 18:
                        _a.sent();
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.scanPlateNumber = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var resp, error_6;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.nhttp.post('https://api.platerecognizer.com/v1/plate-reader/', data, { Authorization: 'Token e6ccde48a93495cd13a3e8fd0ceed83bb488f3d8' })];
                                case 1:
                                    resp = _a.sent();
                                    resolve(resp);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_6 = _a.sent();
                                    reject(error_6);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    RestService.prototype.openCameraSinglePic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.selectedProperty == 0 || this.selectedProperty == undefined)) return [3 /*break*/, 1];
                        this.showToast("Please select property");
                        return [3 /*break*/, 3];
                    case 1:
                        this.navCtrl.goForward('/single-pic');
                        return [4 /*yield*/, this.startCameraPreview()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_7 = _a.sent();
                        this.hideLoader();
                        this.showAlert("Notice", JSON.stringify(error_7));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.stopCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lastLprNumber = '';
                        return [4 /*yield*/, this.stopCameraPreview()];
                    case 1:
                        _a.sent();
                        this.location.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.stopCameraPreview = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cameraPreview.stopCamera()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.startCameraPreview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceWidth, deviceHeight, setWidth, setHeight, cameraPreviewOpts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deviceWidth = window.screen.width;
                        deviceHeight = window.screen.height;
                        setWidth = 0;
                        setHeight = 0;
                        if (this.screenOrientation.type === 'landscape-primary' || this.screenOrientation.type === 'landscape-secondary') {
                            setWidth = deviceHeight;
                            setHeight = deviceWidth;
                        }
                        else {
                            setWidth = deviceWidth;
                            setHeight = deviceHeight;
                        }
                        cameraPreviewOpts = {
                            x: 0,
                            y: 0,
                            width: setWidth,
                            height: setHeight,
                            camera: 'rear',
                            tapPhoto: false,
                            tapToFocus: false,
                            previewDrag: false,
                            toBack: true,
                            alpha: 1
                        };
                        return [4 /*yield*/, this.cameraPreview.startCamera(cameraPreviewOpts)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cameraPreview.takeSnapshot()];
                    case 1:
                        pic = _a.sent();
                        this.sendImageToServer(pic);
                        return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.sendImageToServer = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var request, resp, lprNumber, requestParams, pictureResult, response, response, plateResp, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {
                            upload: blob
                        };
                        this.showLoader('Sending Image');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        return [4 /*yield*/, this.scanPlateNumber(request)];
                    case 2:
                        resp = _a.sent();
                        resp = JSON.parse(resp.data);
                        if (!(resp.results.length > 0)) return [3 /*break*/, 9];
                        lprNumber = resp.results[0].plate;
                        requestParams = {
                            sp_action: "sp_permit_check_vehicle_image_upload",
                            selected_cat: this.selectedProperty,
                            img_latitude: this.latitude,
                            img_longitude: this.longitude,
                            plate_value: lprNumber
                        };
                        return [4 /*yield*/, this.makePostRequest(requestParams)];
                    case 3:
                        pictureResult = _a.sent();
                        this.hideLoader();
                        if (!(pictureResult['json'].length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.setStorage("userData", [])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.setStorage("vehicleData", pictureResult['json'])];
                    case 5:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/property-list");
                            this.stopCameraPreview();
                        }
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.setStorage("plateData", pictureResult['plateData'])];
                    case 7:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/no-permit-result");
                        }
                        _a.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        this.hideLoader();
                        plateResp = {
                            plateData: {
                                plateNumber: "NO PLATE FOUND"
                            }
                        };
                        return [4 /*yield*/, this.setStorage("plateData", plateResp['plateData'])];
                    case 10:
                        response = _a.sent();
                        if (response) {
                            this.navCtrl.goForward("/no-permit-result");
                        }
                        _a.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        error_8 = _a.sent();
                        this.hideLoader();
                        this.showAlert('Notice', error_8.error);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.convertBase64ToBlob = function (base64) {
        var info = this.getInfoFromBase64(base64);
        var sliceSize = 512;
        var byteCharacters = window.atob(info.rawBase64);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: info.mime });
    };
    RestService.prototype.getInfoFromBase64 = function (base64) {
        var meta = base64.split(',')[0];
        var rawBase64 = base64.split(',')[1].replace(/\s/g, '');
        var mime = /:([^;]+);/.exec(meta)[1];
        var extension = /\/([^;]+);/.exec(meta)[1];
        return {
            mime: mime,
            extension: extension,
            meta: meta,
            rawBase64: rawBase64
        };
    };
    RestService.prototype.viewVehicleSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
                    this.showToast("Please select property");
                }
                else {
                    this.navCtrl.goForward('/search-by-vehicle');
                }
                return [2 /*return*/];
            });
        });
    };
    RestService.prototype.viewUserSearchForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.selectedProperty == 0 || this.selectedProperty == undefined) {
                    this.showToast("Please select property");
                }
                else {
                    this.navCtrl.goForward('/search-by-user');
                }
                return [2 /*return*/];
            });
        });
    };
    RestService.prototype.requestLocationAccuracy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locationAuthorizationStatus, _a, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 13, , 14]);
                        return [4 /*yield*/, this.diagnostic.getLocationAuthorizationStatus()];
                    case 1:
                        locationAuthorizationStatus = _b.sent();
                        _a = locationAuthorizationStatus;
                        switch (_a) {
                            case this.diagnostic.permissionStatus.GRANTED: return [3 /*break*/, 2];
                            case this.diagnostic.permissionStatus.NOT_REQUESTED: return [3 /*break*/, 5];
                            case this.diagnostic.permissionStatus.DENIED: return [3 /*break*/, 7];
                            case this.diagnostic.permissionStatus.DENIED_ALWAYS: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 12];
                    case 2:
                        if (!!this.platform.is('ios')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.makeRequest()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 12];
                    case 5: return [4 /*yield*/, this.requestLocationAuthorization()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 7:
                        if (!this.platform.is('android')) return [3 /*break*/, 8];
                        this.showToast("User denied permission to use location");
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.makeRequest()];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        // Android only
                        this.showToast("User denied permission to use location");
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        error_9 = _b.sent();
                        console.log("Error: " + JSON.stringify(error_9));
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.requestLocationAuthorization = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.diagnostic.requestLocationAuthorization()];
                    case 1:
                        _a.sent();
                        this.requestLocationAccuracy();
                        return [3 /*break*/, 3];
                    case 2:
                        error_10 = _a.sent();
                        console.log("Error: " + JSON.stringify(error_10));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.makeRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var canRequest, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.locationAccuracy.canRequest()];
                    case 1:
                        canRequest = _a.sent();
                        if (!canRequest) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.showToast("Location service is currently in use or app does not have authorization to use location");
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_11 = _a.sent();
                        console.log("Error: " + error_11);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.getCurrentLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, coordinates, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.requestLocationAccuracy()];
                    case 1:
                        _a.sent();
                        options = {
                            maximumAge: 3000,
                            timeout: 10000,
                            enableHighAccuracy: true
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 2:
                        coordinates = _a.sent();
                        this.latitude = coordinates.coords.latitude;
                        this.longitude = coordinates.coords.longitude;
                        return [2 /*return*/, coordinates.coords];
                    case 3:
                        error_12 = _a.sent();
                        return [2 /*return*/, {
                                latitude: this.latitude,
                                longitude: this.longitude
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RestService.prototype.askLprMode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Select a LPR mode...',
                            inputs: [
                                {
                                    name: 'automatic',
                                    type: 'radio',
                                    label: 'Automatic',
                                    value: 'automatic',
                                    checked: true
                                },
                                {
                                    name: 'manual',
                                    type: 'radio',
                                    label: 'Manual',
                                    value: 'manual'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (value) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Confirm Ok', value);
                                                    if (!(value === 'automatic')) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, this.openCameraMultiplePics()];
                                                case 1:
                                                    _a.sent();
                                                    return [3 /*break*/, 4];
                                                case 2: return [4 /*yield*/, this.openCameraSinglePic()];
                                                case 3:
                                                    _a.sent();
                                                    _a.label = 4;
                                                case 4: return [2 /*return*/];
                                            }
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
    RestService.prototype.manageFlashMode = function (mode) {
        if (mode === void 0) { mode = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        if (!(mode === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cameraPreview.setFlashMode('torch')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.cameraPreview.setFlashMode('off')];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        error_13 = _a.sent();
                        return [4 /*yield*/, this.showToast(error_13)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
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
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_6__["CameraPreview"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeAudio"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__["ScreenOrientation"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"]])
    ], RestService);
    return RestService;
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