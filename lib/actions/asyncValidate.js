"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formErrorsActions = require("./formErrorsActions");

var _wikomData = require("wikom-data");

// import {stopAsyncValidation} from 'redux-form'

var runningCheck = null;

var checkData = function checkData(_ref) {
    var name = _ref.name,
        url = _ref.url;
    return function (values, dispatch) {
        if (runningCheck) {
            runningCheck.cancel();
        }

        var req = _wikomData.actions.post({ url: url, data: values });
        runningCheck = req.then(function (result) {
            // dispatch(stopAsyncValidation(name, result.body));
            dispatch((0, _formErrorsActions.setFormErrors)(name, result.body));
            runningCheck = null;
        });

        runningCheck.cancel = function () {
            return req.abort();
        };

        return runningCheck;
    };
};

exports.default = checkData;