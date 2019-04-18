"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stringifyValue = _interopRequireDefault(require("./stringifyValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 08.03.17.
 */
var _default = function _default(rawOptions) {
  return rawOptions ? Object.keys(rawOptions).map(function (value) {
    return {
      value: (0, _stringifyValue["default"])(value),
      label: rawOptions[value]
    };
  }) : [];
};

exports["default"] = _default;