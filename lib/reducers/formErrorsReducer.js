"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require("../actions/actionTypes");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by Marvin on 17.03.17.
                                                                                                                                                                                                                   */

var formErrorsReducer = function formErrorsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.FORM_ERROR_SET:
            return Object.assign({}, state, _defineProperty({}, action.name, action.formErrors));
        default:
            return state;
    }
};

exports.default = formErrorsReducer;