(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-note-add-note-module"],{

/***/ "./src/app/add-note/add-note.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.module.ts ***!
  \*********************************************/
/*! exports provided: AddNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function() { return AddNotePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-note.page */ "./src/app/add-note/add-note.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: _add_note_page__WEBPACK_IMPORTED_MODULE_5__["AddNotePage"],
    },
];
var AddNotePageModule = /** @class */ (function () {
    function AddNotePageModule() {
    }
    AddNotePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_add_note_page__WEBPACK_IMPORTED_MODULE_5__["AddNotePage"]],
        })
    ], AddNotePageModule);
    return AddNotePageModule;
}());



/***/ }),

/***/ "./src/app/add-note/add-note.page.html":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [showProperty]=\"showProperty\" [pageName]=\"pageName\"></app-header>\n\n<ion-content padding text-center>\n\n  <ion-item class=\"category_area\">\n    <ion-select [(ngModel)]=\"category\" interface=\"popover\" placeholder=\"SELECT CATEGORY\">\n      <ion-select-option value=\"notice\">Notice</ion-select-option>\n      <ion-select-option value=\"warning\">Warning</ion-select-option>\n      <ion-select-option value=\"violation\">Violation</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class=\"description_area\">\n    <!-- <ion-textarea rows=\"21\" [(ngModel)]=\"description\" placeholder=\"Add note here...\"></ion-textarea> -->\n    <textarea rows=\"21\" [(ngModel)]=\"description\" placeholder=\"Add note here...\"></textarea>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"footer_add_note\">\n    <ion-buttons class=\"add_note_btn_cancel\" (click)=\"goBack()\" text-center slot=\"start\">\n      <ion-button>\n        <ion-label>CANCEL</ion-label>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"add_note_btn_submit\" text-center slot=\"end\" (click)=\"addNotes()\">\n      <ion-button>\n        <ion-label>SUBMIT</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/add-note/add-note.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category_area {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  width: 100%; }\n  .category_area ion-select {\n    background: #191242;\n    width: 100%;\n    max-width: 100%; }\n  .description_area {\n  background: #191242;\n  height: 85%; }\n  .description_area ion-textarea {\n    color: #FFF;\n    height: 85%; }\n  .footer_add_note {\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --min-height: aut0; }\n  .footer_add_note ion-buttons {\n    width: 50%;\n    float: left;\n    --padding-end: 0;\n    --padding-start: 0;\n    margin-left: 0;\n    margin-right: 0; }\n  .footer_add_note ion-buttons ion-button {\n      width: 100%;\n      text-align: center; }\n  .footer_add_note ion-buttons.add_note_btn_submit {\n    background: #9b1f60; }\n  .footer_add_note ion-buttons.add_note_btn_cancel {\n    background: #191242; }\n"

/***/ }),

/***/ "./src/app/add-note/add-note.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-note/add-note.page.ts ***!
  \*******************************************/
/*! exports provided: AddNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePage", function() { return AddNotePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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




var AddNotePage = /** @class */ (function () {
    function AddNotePage(restService, route, navCtrl) {
        var _this = this;
        this.restService = restService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.description = '';
        this.category = 'notice';
        this.permitId = 0;
        this.showProperty = false;
        this.pageName = 'ADD NOTE';
        this.route.params.subscribe(function (params) {
            _this.permitId = params['permitId'];
        });
    }
    AddNotePage.prototype.ngOnInit = function () {
    };
    AddNotePage.prototype.goBack = function () {
        this.navCtrl.goBack('/permit-detail/' + this.permitId);
    };
    AddNotePage.prototype.addNotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.description == '')) return [3 /*break*/, 1];
                        this.restService.showAlert('Error', 'Please enter description');
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(this.category == '')) return [3 /*break*/, 2];
                        this.restService.showAlert('Error', 'Please select category');
                        return [3 /*break*/, 4];
                    case 2:
                        requestData = {
                            sp_action: "sp_permit_add_note",
                            permit_id: this.permitId,
                            page_id: "Permit Detail",
                            add_note: this.description,
                            note_category: this.category
                        };
                        return [4 /*yield*/, this.restService.keyBoardHide()];
                    case 3:
                        _a.sent();
                        this.restService.showLoader('Saving notes');
                        this.restService.makePostRequest(requestData).then(function (result) {
                            _this.restService.hideLoader();
                            if (!result['error']) {
                                _this.restService.showAlert('Success', result['message']);
                                _this.goBack();
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
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddNotePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-note',
            template: __webpack_require__(/*! ./add-note.page.html */ "./src/app/add-note/add-note.page.html"),
            styles: [__webpack_require__(/*! ./add-note.page.scss */ "./src/app/add-note/add-note.page.scss")],
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AddNotePage);
    return AddNotePage;
}());



/***/ })

}]);
//# sourceMappingURL=add-note-add-note-module.js.map