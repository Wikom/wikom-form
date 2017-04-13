'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialValuesFromURL = function initialValuesFromURL(arrayKey) {
    try {
        var result = _queryString2.default.parse(decodeURI(location.search.substr(1)));
        var formResult = JSON.parse(result.form);

        return formResult[arrayKey];
    } catch (e) {
        return {};
    }
}; /**
    * Created by Marvin on 28.03.17.
    */

exports.default = initialValuesFromURL;