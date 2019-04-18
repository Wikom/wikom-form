"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxForm = require("redux-form");

var clearFields = function clearFields(form, fields) {
  return function (dispatch) {
    for (var i = 0, n = fields.length; i < n; i++) {
      dispatch((0, _reduxForm.change)(form, fields[i], null));
    }
  };
};

var _default = clearFields;
exports["default"] = _default;