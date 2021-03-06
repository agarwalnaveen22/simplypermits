(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-by-user-search-by-user-module"],{

/***/ "./src/app/search-by-user/search-by-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchByUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByUserPageModule", function() { return SearchByUserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _search_by_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-by-user.page */ "./src/app/search-by-user/search-by-user.page.ts");
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
        component: _search_by_user_page__WEBPACK_IMPORTED_MODULE_5__["SearchByUserPage"]
    }
];
var SearchByUserPageModule = /** @class */ (function () {
    function SearchByUserPageModule() {
    }
    SearchByUserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_by_user_page__WEBPACK_IMPORTED_MODULE_5__["SearchByUserPage"]]
        })
    ], SearchByUserPageModule);
    return SearchByUserPageModule;
}());



/***/ }),

/***/ "./src/app/search-by-user/search-by-user.page.html":
/*!*********************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [showProperty]=\"showProperty\" [pageName]=\"pageName\"></app-header>\n\n<ion-content padding text-center>\n\n  <ion-item class=\"margin-bottom\" margin-top>\n    <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n    <ion-input [(ngModel)]=\"firstName\" placeholder=\"First Name\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n    <ion-input [(ngModel)]=\"lastName\" placeholder=\"Last Name\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n    <ion-input [(ngModel)]=\"residentUnit\" placeholder=\"Resident Unit\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n    <ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Email Address\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"margin-bottom\">\n    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n    <ion-input [(ngModel)]=\"phone\" type=\"tel\" placeholder=\"Phone Number\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"loginButton\" expand=\"block\" size=\"large\" (click)=\"submitForm()\">Search</ion-button>\n\n</ion-content>\n\n<ion-footer (click)=\"goToBack()\">\n  <ion-toolbar>\n    <ion-title text-center>BACK</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/search-by-user/search-by-user.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-by-user/search-by-user.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/search-by-user/search-by-user.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchByUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByUserPage", function() { return SearchByUserPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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




var SearchByUserPage = /** @class */ (function () {
    function SearchByUserPage(restService, navCtrl, location) {
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.location = location;
        this.firstName = '';
        this.lastName = '';
        this.residentUnit = '';
        this.email = '';
        this.phone = '';
        this.showProperty = false;
        this.pageName = 'SEARCH BY USER';
    }
    SearchByUserPage.prototype.ngOnInit = function () {
    };
    SearchByUserPage.prototype.goToBack = function () {
        this.location.back();
    };
    SearchByUserPage.prototype.submitForm = function () {
        if (this.firstName == '' && this.lastName == '' && this.residentUnit == '' && this.email == '' && this.phone == '') {
            this.restService.showAlert('Error', 'Please enter some input');
        }
        else {
            this.searchManualUser();
        }
    };
    SearchByUserPage.prototype.searchManualUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            sp_action: "sp_search_permit_by_user",
                            selected_cat: this.restService.selectedProperty,
                            first_name: this.firstName,
                            last_name: this.lastName,
                            email_address: this.email,
                            phone_number: this.phone,
                            unit_number: this.residentUnit
                        };
                        return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 1:
                        _a.sent();
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
                                            this.firstName = '';
                                            this.lastName = '';
                                            this.email = '';
                                            this.phone = '';
                                            this.residentUnit = '';
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
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchByUserPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-by-user',
            template: __webpack_require__(/*! ./search-by-user.page.html */ "./src/app/search-by-user/search-by-user.page.html"),
            styles: [__webpack_require__(/*! ./search-by-user.page.scss */ "./src/app/search-by-user/search-by-user.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SearchByUserPage);
    return SearchByUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-by-user-search-by-user-module.js.map