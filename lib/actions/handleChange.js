'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _asyncValidate = require('./asyncValidate');

var _asyncValidate2 = _interopRequireDefault(_asyncValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeout = null; /**
                     * Created by rouven on 19.07.17.
                     */

var handleChange = function handleChange(_ref) {
    var name = _ref.name,
        url = _ref.url;
    return function (values, dispatch) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            return (0, _asyncValidate2.default)({ name: name, url: url })(values, dispatch);
        }, 1000);

        return Promise.resolve('field changed');
    };
};

exports.default = handleChange;