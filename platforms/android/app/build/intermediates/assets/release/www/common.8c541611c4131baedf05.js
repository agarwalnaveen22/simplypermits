(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CbKC:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return l}),t("y6cb");var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(n){o(n)}}function l(n){try{a(r.throw(n))}catch(n){o(n)}}function a(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(u,l)}a((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},o=function(){return t.e(143).then(t.bind(null,"v4tM"))},u=function(){return t.e(142).then(t.bind(null,"aLs3"))};function l(n){var e=this;return new Promise(function(t){n.queue.write(function(){return r(e,void 0,void 0,function(){var e,l;return i(this,function(p){switch(p.label){case 0:return function(n){var e=n.enteringEl,t=n.leavingEl;(function(n,e,t){n&&(n.style.zIndex="back"===t?"99":"101"),e&&(e.style.zIndex="100")})(e,t,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),a(e,!1),t&&a(t,!1)}(n),[4,function(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return n.leavingEl&&!1!==n.animated&&0!==n.duration?n.animationBuilder?(e=n.animationBuilder,[3,6]):[3,1]:[3,7];case 1:return"ios"!==n.mode?[3,3]:[4,o()];case 2:return t=r.sent().iosTransitionAnimation,[3,5];case 3:return[4,u()];case 4:t=r.sent().mdTransitionAnimation,r.label=5;case 5:e=t,r.label=6;case 6:return[2,e];case 7:return[2]}})})}(n)];case 1:return e=p.sent(),l=e?function(n,e){return r(this,void 0,void 0,function(){var t;return i(this,function(r){switch(r.label){case 0:return[4,s(e,!0)];case 1:return r.sent(),[4,e.animationCtrl.create(n,e.baseEl,e)];case 2:return t=r.sent(),f(e.window,e.enteringEl,e.leavingEl),[4,function(n,e){var t=e.progressCallback,r=new Promise(function(e){return n.onFinish(e)});return t?(n.progressStart(),t(n)):n.play(),r}(t,e)];case 3:return[2,(r.sent(),c(e),t.hasCompleted&&d(e.window,e.enteringEl,e.leavingEl),t)]}})})}(e,n):function(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return e=n.enteringEl,t=n.leavingEl,[4,s(n,!1)];case 1:return[2,(r.sent(),c(n),f(n.window,e,t),d(n.window,e,t),null)]}})})}(n),t(l),[2]}})})})})}function a(n,e){e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}function c(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){return t=n.leavingEl,(e=n.enteringEl)&&e.classList.remove("ion-page-invisible"),t&&t.classList.remove("ion-page-invisible"),[2]})})}function s(n,e){return r(this,void 0,void 0,function(){var t;return i(this,function(o){switch(o.label){case 0:return t=(null!=n.deepWait?n.deepWait:e)?[v(n.enteringEl),v(n.leavingEl)]:[h(n.enteringEl),h(n.leavingEl)],[4,Promise.all(t)];case 1:return o.sent(),[4,function(n,e){return r(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return n?[4,n(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}(n.viewIsReady,n.enteringEl)];case 2:return o.sent(),[2]}})})}function f(n,e,t){p(n,t,"ionViewWillLeave"),p(n,e,"ionViewWillEnter")}function d(n,e,t){p(n,e,"ionViewDidEnter"),p(n,t,"ionViewDidLeave")}function p(n,e,t){if(e){var r=new(0,n.CustomEvent)(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(r)}}function h(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function v(n){return r(this,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return(e=n)?(t=e.componentOnReady)?[4,e.componentOnReady()]:[3,2]:[3,4];case 1:t=r.sent(),r.label=2;case 2:return t?[2]:[4,Promise.all(Array.from(e.children).map(v))];case 3:r.sent(),r.label=4;case 4:return[2]}})})}},GCaz:function(n,e,t){"use strict";function r(n){return v(n,/iPad/i)}function i(n){return v(n,/iPhone/i)}function o(n){return v(n,/iPad|iPhone|iPod/i)}function u(n){return!o(n)}function l(n){var e=n.innerWidth,t=n.innerHeight,r=Math.min(e,t),i=Math.max(e,t);return r>390&&r<520&&i>620&&i<800}function a(n){var e=n.innerWidth,t=n.innerHeight,r=Math.min(e,t),i=Math.max(e,t);return r>460&&r<820&&i>780&&i<1400}function c(n){return m(n,"(any-pointer:coarse)")}function s(n){return f(n)||function(n){var e=n.Capacitor;return!(!e||!e.isNative)}(n)}function f(n){return!!(n.cordova||n.phonegap||n.PhoneGap)}function d(n){return v(n,/electron/)}function p(n){return n.matchMedia("(display-mode: standalone)").matches}function h(n){return o(n)&&c(n)}function v(n,e){return e.test(n.navigator.userAgent)}function m(n,e,t){return void 0===t&&(t=!1),n.matchMedia?n.matchMedia(e).matches:t}t.d(e,"a",function(){return c}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return p}),t.d(e,"d",function(){return h}),t.d(e,"e",function(){return u}),t.d(e,"f",function(){return f}),t.d(e,"g",function(){return d}),t.d(e,"h",function(){return o}),t.d(e,"i",function(){return r}),t.d(e,"j",function(){return i}),t.d(e,"k",function(){return l}),t.d(e,"l",function(){return a}),t.d(e,"m",function(){return m})},PCNd:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=function(){}},XGMM:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"b",function(){return u}),t.d(e,"c",function(){return c}),t.d(e,"d",function(){return o}),t.d(e,"e",function(){return a});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(n){o(n)}}function l(n){try{a(r.throw(n))}catch(n){o(n)}}function a(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(u,l)}a((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function o(n,e){return!!e.closest(n)}function u(n){var e;return n?((e={"ion-color":!0})["ion-color-"+n]=!0,e):null}function l(n,e){var t;return(t={})[e]=!0,t[e+"-"+n]=!!n,t}function a(n){var e={};return function(n){return n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return e[n]=!0}),e}function c(n,e,t,o){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return e&&"#"!==e[0]&&-1===e.indexOf("://")&&(r=n.document.querySelector("ion-router"))?(t&&t.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return[2,(i.sent(),r.push(e,o))];case 2:return[2,Promise.resolve()]}})})}},Y0TM:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r});var r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function i(n){if(!n)return!0;var e=r[n];return!(!e||!matchMedia(e))&&matchMedia(e).matches}},a18t:function(n,e,t){"use strict";var r=t("CcnG"),i=t("ntG5"),o=t("gIcY"),u=t("uhuC"),l=t("Ip0R"),a=t("M9A9"),c=t("ZYCi");t("fECr"),t("apKv"),t("2yus"),t("tXrQ"),t.d(e,"a",function(){return s}),t.d(e,"b",function(){return h});var s=r.La({encapsulation:0,styles:[[".property-dropdown[_ngcontent-%COMP%]{padding:.1em 1.75em 1em 1em;background:#150e35;float:left;width:100%;margin-top:-1px;margin-bottom:-1px}.header-md[_ngcontent-%COMP%]::after{display:none}.property-dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:34px;float:right}.property-dropdown[_ngcontent-%COMP%]   ion-select.header-dropdown[_ngcontent-%COMP%]{width:calc(100% - 60px);float:left;padding:10px 15px;text-align:left;font-size:.75em;position:relative}@media only screen and (min-width:480px){.property-dropdown[_ngcontent-%COMP%]{padding-left:1.75em}}ion-label[_ngcontent-%COMP%]{float:left}"]],data:{}});function f(n){return r.ab(0,[(n()(),r.Na(0,0,null,null,2,"ion-select-option",[],null,null,null,null,null)),r.Ma(1,16384,null,0,i.Ja,[r.k],{value:[0,"value"]},null),(n()(),r.Za(2,null,["",""]))],function(n,e){n(e,1,0,r.Pa(1,"",e.context.$implicit.id,""))},function(n,e){n(e,2,0,e.context.$implicit.name)})}function d(n){return r.ab(0,[(n()(),r.Na(0,0,null,null,5,"ion-select",[["class","header-dropdown"],["interface","popover"],["placeholder","SELECT PROPERTY"]],null,[[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var i=!0,o=n.component;return"ionChange"===e&&(i=!1!==r.Wa(n,3)._handleChangeEvent(t.target.value)&&i),"ionBlur"===e&&(i=!1!==r.Wa(n,3)._handleBlurEvent()&&i),"ionChange"===e&&(i=!1!==o.selectProperty(t)&&i),i},null,null)),r.Xa(5120,null,o.b,function(n){return[n]},[u.a]),r.Ma(2,16384,null,0,i.Ia,[r.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},{ionChange:"ionChange",ionBlur:"ionBlur"}),r.Ma(3,16384,null,0,u.a,[r.k],null,null),(n()(),r.Ea(16777216,null,null,1,null,f)),r.Ma(5,278528,null,0,l.i,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,2,0,"SELECT PROPERTY","popover"),n(e,5,0,t.properties)},null)}function p(n){return r.ab(0,[(n()(),r.Na(0,0,null,null,2,"ion-label",[],null,null,null,null,null)),r.Ma(1,16384,null,0,i.L,[r.k],null,null),(n()(),r.Za(2,null,["",""]))],null,function(n,e){n(e,2,0,e.component.pageName)})}function h(n){return r.ab(0,[(n()(),r.Na(0,0,null,null,22,"ion-header",[],null,null,null,null,null)),r.Ma(1,16384,null,0,i.y,[r.k],null,null),(n()(),r.Na(2,0,null,null,14,"ion-toolbar",[],null,null,null,null,null)),r.Ma(3,16384,null,0,i.Xa,[r.k],null,null),(n()(),r.Na(4,0,null,null,5,"ion-buttons",[["class","logoHeader"],["slot","start"]],null,null,null,null,null)),r.Ma(5,16384,null,0,i.g,[],null,null),(n()(),r.Na(6,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,e,t){var i=!0,o=n.component;return"click"===e&&(i=!1!==r.Wa(n,8).onClick(t)&&i),"click"===e&&(i=!1!==o.goToHome()&&i),i},null,null)),r.Ma(7,16384,null,0,i.f,[r.k],null,null),r.Ma(8,16384,null,0,a.a,[[2,c.l],r.k],null,null),(n()(),r.Na(9,0,null,null,0,"img",[["slot","start"]],[[8,"src",4]],null,null,null,null)),(n()(),r.Na(10,0,null,null,6,"ion-buttons",[["slot","end"]],null,null,null,null,null)),r.Ma(11,16384,null,0,i.g,[],null,null),(n()(),r.Na(12,0,null,null,4,"ion-button",[["class","header-menu"]],null,[[null,"click"]],function(n,e,t){var i=!0,o=n.component;return"click"===e&&(i=!1!==r.Wa(n,14).onClick(t)&&i),"click"===e&&(i=!1!==o.presentMainMenu(t)&&i),i},null,null)),r.Ma(13,16384,null,0,i.f,[r.k],null,null),r.Ma(14,16384,null,0,a.a,[[2,c.l],r.k],null,null),(n()(),r.Na(15,0,null,null,1,"ion-icon",[["name","more"],["slot","icon-only"]],null,null,null,null,null)),r.Ma(16,16384,null,0,i.A,[r.k],{name:[0,"name"]},null),(n()(),r.Na(17,0,null,null,5,"div",[["class","property-dropdown"]],null,null,null,null,null)),(n()(),r.Ea(16777216,null,null,1,null,d)),r.Ma(19,16384,null,0,l.j,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.Na(20,0,null,null,0,"img",[],[[8,"src",4]],[[null,"click"]],function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.openVideoScanner()&&r),r},null,null)),(n()(),r.Ea(16777216,null,null,1,null,p)),r.Ma(22,16384,null,0,l.j,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,16,0,"more"),n(e,19,0,t.showProperty),n(e,22,0,!t.showProperty)},function(n,e){var t=e.component;n(e,9,0,t.appLogo),n(e,20,0,t.lprImage)})}},ccrQ:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return l}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return s}),t.d(e,"e",function(){return m}),t.d(e,"f",function(){return d}),t.d(e,"g",function(){return h}),t.d(e,"h",function(){return v}),t.d(e,"i",function(){return f});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(n){o(n)}}function l(n){try{a(r.throw(n))}catch(n){o(n)}}function a(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(u,l)}a((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},o=1;function u(n,e){Object.assign(n,e),n.overlayId=o++;var t=n.ownerDocument;return(t.querySelector("ion-app")||t.body).appendChild(n),n.componentOnReady()}function l(n,e,t,r){r=r>=0?r:c(t);var i=t.get(r);return i?i.dismiss(n,e):Promise.reject("overlay does not exist")}function a(n){return n.get(c(n))}function c(n){var e=-1;return n.forEach(function(n,t){t>e&&(e=t)}),e}function s(n){var e=a(n);return e?e.dismiss():Promise.resolve()}function f(n,e,t,o,u){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),r=n.enterAnimation?n.enterAnimation:n.config.get(e,"ios"===n.mode?t:o),[4,p(n,r,n.el,u)]);case 1:return i.sent(),n.didPresent.emit(),[2]}})})}function d(n,e,t,o,u,l,a){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return n.presented?(n.presented=!1,n.willDismiss.emit({data:e,role:t}),r=n.leaveAnimation?n.leaveAnimation:n.config.get(o,"ios"===n.mode?u:l),[4,p(n,r,n.el,a)]):[2];case 1:return i.sent(),n.didDismiss.emit({data:e,role:t}),n.el.remove(),[2]}})})}function p(n,e,t,o){return r(this,void 0,void 0,function(){var r,u,l;return i(this,function(i){switch(i.label){case 0:return n.keyboardClose&&(r=t.ownerDocument.activeElement)&&r.blur(),n.animation&&(n.animation.destroy(),n.animation=void 0),l=n,[4,n.animationCtrl.create(e,t.shadowRoot||n.el,o)];case 1:return u=l.animation=i.sent(),n.animation=u,n.willAnimate||u.duration(0),[4,u.playAsync()];case 2:return i.sent(),u.destroy(),n.animation=void 0,[2]}})})}function h(n,e,t){var r,i=new Promise(function(n){return r=n});return function(n,e,t){var r=function(i){n.removeEventListener(e,r),t(i)};n.addEventListener(e,r)}(n,e,function(n){var e=n.detail;t&&t(e),r(e)}),i}function v(n){return"cancel"===n||n===m}var m="backdrop"},fECr:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var r=t("CcnG"),i=(t("OO+k"),t("9jgp")),o=(t("2yus"),function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(n){o(n)}}function l(n){try{a(r.throw(n))}catch(n){o(n)}}function a(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(u,l)}a((r=r.apply(n,e||[])).next())})}),u=function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},l=function(){function n(n,e,t,i){var o=this;this.popoverController=n,this.restService=e,this.zone=t,this.navCtrl=i,this.appLogo="assets/icon/inner_header_logo.png",this.lprImage="assets/icon/camera_icon.png",this.properties=[],this.selectedProperty=new r.m,this.selectProperty=function(n){o.restService.selectedProperty=n.target.value,o.selectedProperty.emit(n.target.value)}}return n.prototype.ngOnInit=function(){this.showProperty&&this.getProperties()},n.prototype.getProperties=function(){return o(this,void 0,void 0,function(){var n,e=this;return u(this,function(t){switch(t.label){case 0:return n={sp_action:"sp_get_property_list"},[4,this.restService.keyBoardHide()];case 1:return t.sent(),this.restService.showLoader("Fetching Properties"),this.restService.makePostRequest(n).then(function(n){e.restService.hideLoader(),e.zone.run(function(){return o(e,void 0,void 0,function(){return u(this,function(e){return this.properties=n.Properties,[2]})})})},function(n){e.restService.hideLoader(),e.restService.showAlert("Notice",n.error?e.restService.setErrorMessageArray(n.error.message):n.statusText)}),[2]}})})},n.prototype.presentMainMenu=function(n){return o(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,this.popoverController.create({component:i.a,event:n,translucent:!0,cssClass:"main-menu"})];case 1:return[4,e.sent().present()];case 2:return[2,e.sent()]}})})},n.prototype.goToHome=function(){this.navCtrl.goBack("/home")},n.prototype.openVideoScanner=function(){return o(this,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,this.restService.askLprMode()];case 1:return n.sent(),[2]}})})},n}()},kk3N:function(n,e,t){"use strict";function r(n){return!!n.shadowRoot&&!!n.attachShadow}function i(n,e,t,i){if(r(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=i,o.name=e,o.value=t}}function o(n,e,t){return Math.max(n,Math.min(e,t))}function u(n){return n.timeStamp||Date.now()}function l(n){if(n){var e=n.changedTouches;if(e&&e.length>0){var t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function a(n,e){var t="rtl"===n.document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function c(n){return s(n,0)}function s(n,e){var t=n._original||n;return{_original:n,emit:f(t.emit.bind(t),e)}}function f(n,e){var t;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(t),t=setTimeout.apply(void 0,[n,e].concat(r))}}t.d(e,"a",function(){return u}),t.d(e,"b",function(){return r}),t.d(e,"c",function(){return c}),t.d(e,"d",function(){return i}),t.d(e,"e",function(){return s}),t.d(e,"f",function(){return a}),t.d(e,"g",function(){return o}),t.d(e,"h",function(){return f}),t.d(e,"i",function(){return l})},s9Q1:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u});var r=function(n,e,t,r){return new(t||(t=Promise))(function(i,o){function u(n){try{a(r.next(n))}catch(n){o(n)}}function l(n){try{a(r.throw(n))}catch(n){o(n)}}function a(n){n.done?i(n.value):new t(function(e){e(n.value)}).then(u,l)}a((r=r.apply(n,e||[])).next())})},i=function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(n){o=[6,n],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function o(n,e,t,o,u){return r(this,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:if(n)return[2,n.attachViewToDom(e,t,u,o)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return r="string"==typeof t?e.ownerDocument.createElement(t):t,o&&o.forEach(function(n){return r.classList.add(n)}),u&&Object.assign(r,u),e.appendChild(r),r.componentOnReady?[4,r.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,r]}})})}function u(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},y6cb:function(n,e,t){"use strict";function r(){var n=window.TapticEngine;n&&n.selection()}function i(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function o(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u}),t.d(e,"c",function(){return i}),t.d(e,"d",function(){return r})}}]);