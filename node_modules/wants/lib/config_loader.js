var path = require('path');
var processPath = path.dirname(process.argv[1]);
var configPath = path.join(__dirname, '../../../config/config');
module.exports = require(configPath);