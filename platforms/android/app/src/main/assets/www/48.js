(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-11949516.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-11949516.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hostContext; });
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
function hostContext(e, t) { return !!t.closest(e); }
function createColorClasses(e) { var _a; return e ? (_a = { "ion-color": !0 }, _a["ion-color-" + e] = !0, _a) : null; }
function createThemedClasses(e, t) { var _a; return _a = {}, _a[t] = !0, _a[t + "-" + e] = !!e, _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, r, n) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                o = e.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                r && r.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(t, n))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}
function getParentNode(e) { var t = e.parentNode; return t && 11 === t.NODE_TYPE ? t.host : t; }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/modorktz.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/modorktz.js ***!
  \***********************************************************/
/*! exports provided: IonImg, IonNote, IonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonImg", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNote", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonText", function() { return Text; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_11949516_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-11949516.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-11949516.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Img=function(){function e(){}return e.prototype.srcChanged=function(){this.addIO()},e.prototype.componentDidLoad=function(){this.addIO()},e.prototype.addIO=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.loadSrc=e.src,e.removeIO(),e.ionImgDidLoad.emit())}),this.io.observe(this.el)):setTimeout(function(){return e.loadSrc=e.src},200))},e.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img",{src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(e,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),e}(),Note=function(){function e(){}return e.prototype.hostData=function(){return{class:Object.assign({},Object(_chunk_11949516_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color))}},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{color:var(--ion-color-base);--ion-color-base:var(--ion-text-color-step-650, #a6a6a6);font-family:var(--ion-font-family,inherit)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),Text=function(){function e(){}return e.prototype.hostData=function(){return{class:Object(_chunk_11949516_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.color)}},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:currentColor;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=48.js.map