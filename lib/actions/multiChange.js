'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxForm = require('redux-form');

var multiChange = function multiChange(form, fields) {
    return function (dispatch) {
        for (var field in fields) {
            dispatch((0, _reduxForm.change)(form, field, fields[field]));
        }
    };
};

exports.default = multiChange;