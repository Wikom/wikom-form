'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formErrorsActions = require('./formErrorsActions');

var _wikomData = require('wikom-data');

/**
 * Created by rouven on 19.07.17.
 */

var timeout = null;
var runningCheck = null;

var handleChange = function handleChange(_ref) {
    var name = _ref.name,
        url = _ref.url;
    return function (values, dispatch) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            if (runningCheck) {
                runningCheck.cancel();
            }

            var req = _wikomData.actions.post({ url: url, data: values });
            runningCheck = req.then(function (result) {
                dispatch((0, _formErrorsActions.setFormErrors)(name, result.body));
                runningCheck = null;
            });

            runningCheck.cancel = function () {
                return req.abort();
            };

            return runningCheck;
        }, 1000);

        return Promise.resolve('field changed');
    };
};

exports.default = handleChange;