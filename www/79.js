(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

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

/***/ "./node_modules/@ionic/core/dist/esm/es5/etuy3po3.sc.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/etuy3po3.sc.js ***!
  \**************************************************************/
/*! exports provided: IonRippleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return RippleEffect; });
/* harmony import */ var _chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-deb847e6.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-deb847e6.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var RippleEffect=function(){function e(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"ionActivated",e,this.parent),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=Object(_chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e);var t=e.touches[0];this.addRipple(t.clientX,t.clientY)},e.prototype.mouseDown=function(e){var t=Object(_chunk_deb847e6_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e);this.lastClick<t-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var n,i,o,a=this;this.queue.read(function(){var r=a.el.getBoundingClientRect(),p=r.width,c=r.height;o=Math.min(2*Math.sqrt(p*p+c*c),MAX_RIPPLE_DIAMETER),n=e-r.left-o/2,i=t-r.top-o/2}),this.queue.write(function(){var e=a.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,r=Math.max(RIPPLE_FACTOR*Math.sqrt(o),MIN_RIPPLE_DURATION);t.top=i+"px",t.left=n+"px",t.width=o+"px",t.height=o+"px",t.animationDuration=r+"ms",(a.el.shadowRoot||a.el).appendChild(e),setTimeout(function(){return e.remove()},r+50)})},e.prototype.render=function(){return null},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-ripple-effect-host]{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect[data-ion-ripple-effect]{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),RIPPLE_FACTOR=35,MIN_RIPPLE_DURATION=260,MAX_RIPPLE_DIAMETER=550;

/***/ })

}]);
//# sourceMappingURL=79.js.map