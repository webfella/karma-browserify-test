var _      = require('lodash'),
    output = require('../config').output,
    path   = require('path');

exports.trimPath = function(fullPath) {
    var arr = fullPath.split(path.sep);
    return path.join.apply(null, _.rest(arr, arr.length - 2));
};

exports.fileOutput = function(pathObj) {
    pathObj.basename = output.replace('*', pathObj.dirname);
    pathObj.dirname = '';
};
