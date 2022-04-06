(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/status-tap.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/status-tap.js ***!
  \*************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(t, n) { n.read(function () { var o = t.innerWidth, e = t.innerWidth, r = t.document.elementFromPoint(o / 2, e / 2); if (!r)
    return; var i = r.closest("ion-content"); i && i.componentOnReady().then(function () { n.write(function () { i.getScrollElement().scrollToTop(300); }); }); }); }



/***/ })

}]);
//# sourceMappingURL=116.js.map