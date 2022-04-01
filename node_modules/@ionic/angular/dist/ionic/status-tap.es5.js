/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("status-tap.js",["exports"],function(n){window.Ionic.h,n.startStatusTap=function(n,t){t.read(function(){var e=n.innerWidth,o=n.innerWidth,i=n.document.elementFromPoint(e/2,o/2);if(i){var c=i.closest("ion-content");c&&c.componentOnReady().then(function(){t.write(function(){c.getScrollElement().scrollToTop(300)})})}})},Object.defineProperty(n,"__esModule",{value:!0})});