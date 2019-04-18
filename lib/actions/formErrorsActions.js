"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFormErrorsFromSubmit = exports.setFormErrors = void 0;

var _actionTypes = require("./actionTypes");

/**
 * Created by Marvin on 17.03.17.
 */
var setFormErrors = function setFormErrors(name, formErrors) {
  return {
    type: _actionTypes.FORM_ERROR_SET,
    name: name,
    formErrors: formErrors
  };
};

exports.setFormErrors = setFormErrors;

var setFormErrorsFromSubmit = function setFormErrorsFromSubmit(name, errors) {
  var fatal = {};
  errors.map(function (error) {
    if (!fatal.hasOwnProperty(error.field)) {
      fatal[error.field] = [];
    }

    fatal[error.field].push(error.message);
  });
  return {
    type: _actionTypes.FORM_ERROR_SET,
    name: name,
    formErrors: {
      fatal: fatal
    }
  };
};

exports.setFormErrorsFromSubmit = setFormErrorsFromSubmit;