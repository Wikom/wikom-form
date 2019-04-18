"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxForm = require("redux-form");

var multiChange = function multiChange(form, fields) {
  return function (dispatch) {
    for (var field in fields) {
      dispatch((0, _reduxForm.change)(form, field, fields[field]));
    }
  };
};

var _default = multiChange;
exports["default"] = _default;