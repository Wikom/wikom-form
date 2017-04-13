'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by rouven on 03.03.17.
                                                                                                                                                                                                                                                                   */

require('react-select/dist/react-select.css');

require('react-virtualized/styles.css');

require('react-virtualized-select/styles.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactVirtualizedSelect = require('react-virtualized-select');

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

var _stringifyValue = require('../../helpers/stringifyValue');

var _stringifyValue2 = _interopRequireDefault(_stringifyValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VirtualizedSelectInput = function VirtualizedSelectInput(props) {
    var value = (0, _stringifyValue2.default)(props.input.value);

    return _react2.default.createElement(_reactVirtualizedSelect2.default, _extends({}, props, {
        value: value,
        onChange: function onChange(selected) {
            return props.input.onChange(selected != null && selected.hasOwnProperty('value') ? selected.value : null);
        },
        onBlur: function onBlur() {
            return props.input.onBlur(value);
        },
        disabled: props.readOnly || props.disabled
    }));
};

VirtualizedSelectInput.propTypes = {
    input: _propTypes2.default.object,
    options: _propTypes2.default.array,
    placeholder: _propTypes2.default.node
};

exports.default = VirtualizedSelectInput;