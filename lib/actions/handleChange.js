"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formErrorsActions = require("./formErrorsActions");

var _wikomData = require("wikom-data");

/**
 * Created by rouven on 19.07.17.
 */
var timeout = null;
var runningCheck = {};

var handleChange = function handleChange(_ref) {
  var name = _ref.name,
      url = _ref.url;
  return function (values, dispatch) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      if (runningCheck[name]) {
        runningCheck[name].cancel();
      }

      var req = _wikomData.actions.post({
        url: url,
        data: values
      });

      runningCheck[name] = req.then(function (result) {
        dispatch((0, _formErrorsActions.setFormErrors)(name, result.body));
        delete runningCheck[name];
      });

      runningCheck[name].cancel = function () {
        return req.abort();
      };

      return runningCheck[name];
    }, 1000);
    return Promise.resolve('field changed');
  };
};

var _default = handleChange;
exports["default"] = _default;