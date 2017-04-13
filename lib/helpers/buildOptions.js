'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringifyValue = require('./stringifyValue');

var _stringifyValue2 = _interopRequireDefault(_stringifyValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (rawOptions) {
  return rawOptions ? Object.keys(rawOptions).map(function (value) {
    return { value: (0, _stringifyValue2.default)(value), label: rawOptions[value] };
  }) : [];
}; /**
    * Created by rouven on 08.03.17.
    */