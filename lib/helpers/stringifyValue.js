'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by rouven on 28.03.17.
 */

exports.default = function (value) {
    var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (valueType === 'string') {
        return value;
    } else if (valueType === 'object') {
        return JSON.stringify(value);
    } else if (valueType === 'number' || valueType === 'boolean') {
        return String(value);
    } else {
        return '';
    }
};