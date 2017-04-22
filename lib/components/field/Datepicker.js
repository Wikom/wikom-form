'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reduxForm = require('redux-form');

var _reactDatetime3 = require('react-datetime/css/react-datetime.css');

var _reactDatetime4 = _interopRequireDefault(_reactDatetime3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by rouven on 30.03.17.
                                                                                                                                                                                                                              */

var Datepicker = function Datepicker(_ref) {
    var _ref$input = _ref.input,
        name = _ref$input.name,
        value = _ref$input.value,
        input = _objectWithoutProperties(_ref$input, ['name', 'value']),
        disabled = _ref.disabled,
        rest = _objectWithoutProperties(_ref, ['input', 'disabled']);

    var format = "DD.MM.YYYY";

    var onChange = function onChange(a) {
        if ((0, _moment2.default)(a, format, true).isValid()) {
            return input.onChange(a);
        }
    };

    value = value ? _moment2.default.utc(value) : null;

    if (disabled) {
        return _react2.default.createElement(
            'div',
            { className: 'input-lookalike' },
            (0, _moment2.default)(value).format(format)
        );
    }

    return _react2.default.createElement(_reactDatetime2.default, _extends({
        name: name,
        value: value,
        dateFormat: format,
        timeFormat: false,
        utc: true,
        closeOnSelect: true,
        selected: value,
        onChange: onChange,
        onBlur: input.onChange
    }, rest));
};

exports.default = Datepicker;