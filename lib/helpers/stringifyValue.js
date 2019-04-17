"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Created by rouven on 28.03.17.
 */
var _default = function _default(value) {
  var valueType = _typeof(value);

  if (valueType === 'string') {
    return value;
  } else if (valueType === 'object') {
    return JSON.stringify(value);
  } else if (valueType === 'number' || valueType === 'boolean') {
    return String(value);
  } else {
    return '';
  }
};

exports["default"] = _default;