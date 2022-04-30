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

module.exports = "<ion-content>\n  <ion-button *ngIf=\"isFlashMode\" class=\"flash\" (click)=\"manageFlashMode()\">\n    <ion-icon slot=\"icon-only\" name=\"flash\"></ion-icon>\n  </ion-button>\n  <ion-button *ngIf=\"!isFlashMode\" class=\"flash\" (click)=\"manageFlashMode()\">\n    <ion-icon slot=\"icon-only\" name=\"flash-off\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer_single_pic\">\n    <ion-buttons class=\"single_pic_btn_cancel\" (click)=\"goBack()\" text-center slot=\"start\">\n      <ion-button>\n        <ion-label>CANCEL</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"single_pic_btn_submit\" text-center slot=\"end\" (click)=\"capture()\">\n      <ion-button>\n        <ion-label>SCAN PLATE</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/camera-preview/single-pic/single-pic.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/camera-preview/single-pic/single-pic.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: transparent;\n  background: transparent; }\n\n.footer_single_pic {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n\n.footer_single_pic ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.footer_single_pic ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n\n.footer_single_pic ion-buttons.single_pic_btn_submit {\n    background: #9b1f60; }\n\n.footer_single_pic ion-buttons.single_pic_btn_cancel {\n    background: #191242; }\n\n.flash {\n  --background: transparent;\n  position: absolute;\n  right: 0.1em;\n  top: 1.5em;\n  --box-shadow: none; }\n"

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
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
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



var SinglePicPage = /** @class */ (function () {
    function SinglePicPage(restService, screenOrientation) {
        var _this = this;
        this.restService = restService;
        this.screenOrientation = screenOrientation;
        this.isFlashMode = false;
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
    SinglePicPage.prototype.ngOnInit = function () {
    };
    SinglePicPage.prototype.goBack = function () {
        this.restService.stopCamera();
    };
    SinglePicPage.prototype.capture = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.restService.takePicture();
                return [2 /*return*/];
            });
        });
    };
    SinglePicPage.prototype.manageFlashMode = function () {
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
    SinglePicPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-pic',
            template: __webpack_require__(/*! ./single-pic.page.html */ "./src/app/camera-preview/single-pic/single-pic.page.html"),
            styles: [__webpack_require__(/*! ./single-pic.page.scss */ "./src/app/camera-preview/single-pic/single-pic.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]])
    ], SinglePicPage);
    return SinglePicPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-preview-single-pic-single-pic-module.js.map