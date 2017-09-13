'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

require('react-datepicker/dist/react-datepicker.css');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _de = require('moment/locale/de');

var _de2 = _interopRequireDefault(_de);

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
        dateFormat = _ref.dateFormat,
        openToDate = _ref.openToDate,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['input', 'disabled', 'dateFormat', 'openToDate', 'className']);

    var onChange = function onChange(v) {
        if (_moment2.default.isMoment(v) && v.isValid()) {
            return input.onBlur(v);
        }

        if (_moment2.default.utc(v, dateFormat, true).isValid() || v === null || v === "") {
            return input.onChange(v);
        }

        return input.onChange('');
    };

    var onBlur = function onBlur(event) {
        // const eTarget = event.target;
        var eValue = event.target.value;
        var v = _moment2.default.utc(eValue, dateFormat, true);

        if (_moment2.default.isMoment(v) && v.isValid()) {
            return input.onBlur(v);
        }

        return input.onBlur(eValue);
    };

    value = value ? _moment2.default.utc(value, [dateFormat, 'YYYY-MM-DD', _moment2.default.ISO_8601], true) : null;
    value = _moment2.default.isMoment(value) && value.isValid() ? value : null;

    if (disabled) {
        return _react2.default.createElement(
            'div',
            { className: 'input-lookalike' },
            _moment2.default.utc(value, [dateFormat, 'YYYY-MM-DD', _moment2.default.ISO_8601], true).format(dateFormat)
        );
    }

    var props = _extends({
        name: name,
        value: value,
        className: className,
        dateFormat: dateFormat,
        selected: value,
        onChange: onChange,
        onBlur: onBlur
    }, rest);

    if (openToDate !== null) {
        props.openToDate = _moment2.default.isMoment(value) && value.isValid() ? value : _moment2.default.utc(openToDate, [dateFormat, 'YYYY-MM-DD', _moment2.default.ISO_8601], true);
    }

    return _react2.default.createElement(_reactDatepicker2.default, props);
};

Datepicker.defaultProps = {
    className: 'form-control',
    dateFormat: 'DD.MM.YYYY',
    openToDate: null
};

Datepicker.propTypes = {
    className: _propTypes2.default.string,
    dateFormat: _propTypes2.default.string,
    openToDate: _propTypes2.default.string
};

exports.default = Datepicker;