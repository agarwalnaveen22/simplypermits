cordova.define("cordova-plugin-backlight.Backlight", function(require, exports, module) {
var exec = require('cordova/exec');
var pluginName = 'Backlight';

exports.on = function(success, error) {
  exec(success, error, pluginName, 'on', []);
};

exports.off = function(success, error) {
  exec(success, error, pluginName, 'off', []);
};

});
