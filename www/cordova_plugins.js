cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com-badrit-base64.Base64",
        "file": "plugins/com-badrit-base64/www/Base64.js",
        "pluginId": "com-badrit-base64",
        "clobbers": [
            "navigator.Base64"
        ]
    },
    {
        "id": "cordova-plugin-advanced-http.lodash",
        "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.tough-cookie",
        "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.messages",
        "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.local-storage-store",
        "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.cookie-handler",
        "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.helpers",
        "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.http",
        "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
        "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "id": "cordova-plugin-camera-preview.CameraPreview",
        "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
        "pluginId": "cordova-plugin-camera-preview",
        "clobbers": [
            "CameraPreview"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "id": "cordova-plugin-flashlight.Flashlight",
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
        "file": "plugins/cordova-plugin-request-location-accuracy/www/android/RequestLocationAccuracy.js",
        "pluginId": "cordova-plugin-request-location-accuracy",
        "clobbers": [
            "cordova.plugins.locationAccuracy"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-badrit-base64": "0.2.0",
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-plugin-advanced-http": "2.0.1",
    "cordova-plugin-camera-preview": "0.11.1",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-ionic-keyboard": "2.1.3",
    "cordova-plugin-request-location-accuracy": "2.3.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});