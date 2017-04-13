"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setFormErrorsFromSubmit = exports.setFormErrors = undefined;

var _actionTypes = require("./actionTypes");

var setFormErrors = exports.setFormErrors = function setFormErrors(name, formErrors) {
    return {
        type: _actionTypes.FORM_ERROR_SET,
        name: name,
        formErrors: formErrors
    };
}; /**
    * Created by Marvin on 17.03.17.
    */

var setFormErrorsFromSubmit = exports.setFormErrorsFromSubmit = function setFormErrorsFromSubmit(name, errors) {
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
        formErrors: { fatal: fatal }
    };
};