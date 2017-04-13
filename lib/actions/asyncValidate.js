"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formErrorsActions = require("./formErrorsActions");

var _wikomData = require("wikom-data");

var checkData = function checkData(_ref) {
    var name = _ref.name,
        url = _ref.url;
    return function (values, dispatch) {
        var req = _wikomData.actions.post({ url: url, data: values });
        var promise = req.then(function (result) {
            dispatch((0, _formErrorsActions.setFormErrors)(name, result.body));
        });

        promise.cancel = function () {
            return req.abort();
        };

        return promise;
    };
};

exports.default = checkData;