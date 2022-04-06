(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

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

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-9b785f2c.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-9b785f2c.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection() { var n = window.TapticEngine; n && n.selection(); }
function hapticSelectionStart() { var n = window.TapticEngine; n && n.gestureSelectionStart(); }
function hapticSelectionChanged() { var n = window.TapticEngine; n && n.gestureSelectionChanged(); }
function hapticSelectionEnd() { var n = window.TapticEngine; n && n.gestureSelectionEnd(); }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-deb847e6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-deb847e6.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deferEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return debounce; });
function renderHiddenInput(e, n, t, r) { if (e.shadowRoot) {
    var o = e.querySelector("input.aux-input");
    o || ((o = e.ownerDocument.createElement("input")).type = "hidden", o.classList.add("aux-input"), e.appendChild(o)), o.disabled = r, o.name = n, o.value = t;
} }
function clamp(e, n, t) { return Math.max(e, Math.min(n, t)); }
function assert(e, n) { if (!e) {
    var e_1 = "ASSERT: " + n;
    throw console.error(e_1), new Error(e_1);
} }
function now(e) { return e.timeStamp || Date.now(); }
function pointerCoord(e) { if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
        var e_2 = n[0];
        return { x: e_2.clientX, y: e_2.clientY };
    }
    if (void 0 !== e.pageX)
        return { x: e.pageX, y: e.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(e, n) { var t = "rtl" === e.document.dir; switch (n) {
    case "start": return t;
    case "end": return !t;
    default: throw new Error("\"" + n + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(e) { return debounceEvent(e, 0); }
function debounceEvent(e, n) { var t = e._original || e; return { _original: e, emit: debounce(t.emit.bind(t), n) }; }
function debounce(e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var r = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            r[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(r));
    };
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/w9qygvbe.sc.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/w9qygvbe.sc.js ***!
  \**************************************************************/
/*! exports provided: IonToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToggle", function() { return Toggle; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_9b785f2c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-9b785f2c.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-9b785f2c.js");
/* harmony import */ var _chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-deb847e6.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-deb847e6.js");
/* harmony import */ var _chunk_11949516_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-11949516.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-11949516.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Toggle=function(){function e(){this.inputId="ion-tg-"+toggleIds++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},e.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},e.prototype.componentWillLoad=function(){this.ionStyle=Object(_chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.ionStyle),this.emitStyle()},e.prototype.componentDidLoad=function(){var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var t=e.currentX;shouldToggle(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,Object(_chunk_9b785f2c_js__WEBPACK_IMPORTED_MODULE_1__["d"])())},e.prototype.onDragEnd=function(e){var t=e.currentX-this.pivotX;shouldToggle(this.checked,t,4)&&(this.checked=!this.checked,Object(_chunk_9b785f2c_js__WEBPACK_IMPORTED_MODULE_1__["d"])()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:Object.assign({},Object(_chunk_11949516_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this.color),{"in-item":Object(_chunk_11949516_js__WEBPACK_IMPORTED_MODULE_3__["f"])(".item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){var e=this;return Object(_chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.el,this.name,this.value,this.disabled),[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-gesture",{onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,direction:"x",threshold:0,attachTo:"parent",disabled:this.disabled,tabIndex:-1},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"toggle-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"toggle-inner"}))),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-toggle-md-host]{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--checked-background:rgba(var(--ion-color-base-rgb), 0.5);--checked-knob:var(--ion-color-base);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-key[data-ion-toggle-md-host]   input[data-ion-toggle-md]{border:2px solid #5e9ed6}[data-ion-toggle-md-host]:focus{outline:0}ion-gesture[data-ion-toggle-md]{display:block;width:100%;height:100%;visibility:inherit}input[data-ion-toggle-md]{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}.toggle-icon[data-ion-toggle-md]{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background-color:rgba(var(--ion-item-border-color-rgb,0,0,0),.13);pointer-events:none}.toggle-inner[data-ion-toggle-md]{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;background-color:var(--ion-background-color,#fff);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}.toggle-checked[data-ion-toggle-md-host]   .toggle-icon[data-ion-toggle-md]{background-color:var(--checked-background)}.toggle-checked[data-ion-toggle-md-host]   .toggle-inner[data-ion-toggle-md]{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background-color:var(--checked-knob)}.toggle-disabled[data-ion-toggle-md-host]{opacity:.3;pointer-events:none}.in-item[slot][data-ion-toggle-md-host]{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.in-item[slot=start][data-ion-toggle-md-host]{padding:12px 18px 12px 2px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function shouldToggle(e,t,i){var o="rtl"===document.dir;return e?!o&&i>t||o&&-i<t:!o&&-i<t||o&&i>t}var toggleIds=0;

/***/ })

}]);
//# sourceMappingURL=106.js.map