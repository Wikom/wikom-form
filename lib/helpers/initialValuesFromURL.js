"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by Marvin on 28.03.17.
 */
var initialValuesFromURL = function initialValuesFromURL(arrayKey) {
  try {
    var result = _queryString["default"].parse(decodeURI(location.search.substr(1)));

    var formResult = JSON.parse(result.form);
    return formResult[arrayKey];
  } catch (e) {
    return {};
  }
};

var _default = initialValuesFromURL;
exports["default"] = _default;