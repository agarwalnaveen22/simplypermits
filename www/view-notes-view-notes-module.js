(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-notes-view-notes-module"],{

/***/ "./src/app/view-notes/view-notes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/view-notes/view-notes.module.ts ***!
  \*************************************************/
/*! exports provided: ViewNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesPageModule", function() { return ViewNotesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _view_notes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-notes.page */ "./src/app/view-notes/view-notes.page.ts");
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
        component: _view_notes_page__WEBPACK_IMPORTED_MODULE_5__["ViewNotesPage"]
    }
];
var ViewNotesPageModule = /** @class */ (function () {
    function ViewNotesPageModule() {
    }
    ViewNotesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_notes_page__WEBPACK_IMPORTED_MODULE_5__["ViewNotesPage"]]
        })
    ], ViewNotesPageModule);
    return ViewNotesPageModule;
}());



/***/ }),

/***/ "./src/app/view-notes/view-notes.page.html":
/*!*************************************************!*\
  !*** ./src/app/view-notes/view-notes.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [showProperty]=\"showProperty\" [pageName]=\"pageName\"></app-header>\n\n<ion-content padding text-center>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshData($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor=\"let note of notes\" class=\"view_permit_notes\">\n    <ion-item class=\"header\" [ngStyle]=\"{'background-color': (note.note_category=='notice') ? '#5f2877' : (note.note_category=='warning' ? '#f26825' : '#c8202b')}\">\n      <ion-label class=\"note_category\">{{note.note_category}}</ion-label>\n    </ion-item>\n    <ion-item class=\"header\" [ngStyle]=\"{'background-color': (note.note_category=='notice') ? '#5f2877' : (note.note_category=='warning' ? '#f26825' : '#c8202b')}\">\n      <ion-label class=\"date_block\" text-wrap>{{note.notes_date}}</ion-label>\n      <ion-label text-end slot=\"end\">{{note.notes_time}}</ion-label>\n    </ion-item>\n    <ion-card-content [innerHtml]=\"note.notes_desc\">\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer (click)=\"goBack()\">\n  <ion-toolbar>\n    <ion-title text-center>BACK</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/view-notes/view-notes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/view-notes/view-notes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #1a1142; }\n\n.view_permit_notes {\n  background: #17082d;\n  margin-bottom: 2em; }\n\n.view_permit_notes .header {\n    background: #1b1549; }\n\n.view_permit_notes .header .date_block {\n      margin: 0; }\n\n.view_permit_notes ion-card-content {\n    color: #FFFFFF;\n    text-align: left; }\n\n.note_category {\n  text-transform: capitalize;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/view-notes/view-notes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/view-notes/view-notes.page.ts ***!
  \***********************************************/
/*! exports provided: ViewNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNotesPage", function() { return ViewNotesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var ViewNotesPage = /** @class */ (function () {
    function ViewNotesPage(restService, route, navCtrl) {
        var _this = this;
        this.restService = restService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.appLogo = 'assets/icon/inner_header_logo.png';
        this.notes = [];
        this.permitId = 0;
        this.showProperty = false;
        this.pageName = 'PERMIT NOTES';
        this.route.params.subscribe(function (params) {
            _this.permitId = params['permitId'];
            _this.getPermitDetail();
        });
    }
    ViewNotesPage.prototype.ngOnInit = function () {
    };
    ViewNotesPage.prototype.goBack = function () {
        this.navCtrl.goBack('/permit-detail/' + this.permitId);
    };
    ViewNotesPage.prototype.refreshData = function (event) {
        this.getPermitDetail();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    ViewNotesPage.prototype.getPermitDetail = function () {
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
                        // this.restService.showLoader('Getting Permit Notes');
                        this.restService.makeGetRequest(requestData).then(function (result) {
                            // this.restService.hideLoader();
                            if (result['PermitDetail']) {
                                _this.notes = result['PermitDetail']['Notes'];
                            }
                        }, function (err) {
                            // this.restService.hideLoader();
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
    ViewNotesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-notes',
            template: __webpack_require__(/*! ./view-notes.page.html */ "./src/app/view-notes/view-notes.page.html"),
            styles: [__webpack_require__(/*! ./view-notes.page.scss */ "./src/app/view-notes/view-notes.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ViewNotesPage);
    return ViewNotesPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-notes-view-notes-module.js.map