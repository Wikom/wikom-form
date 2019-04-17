"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("react-select/dist/react-select.css");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect2 = _interopRequireDefault(require("react-select"));

var _stringifyValue = _interopRequireDefault(require("../../helpers/stringifyValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SelectInput = function SelectInput(props) {
  var value = (0, _stringifyValue["default"])(props.input.value);
  return _react["default"].createElement(_reactSelect2["default"], _extends({}, props, {
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

SelectInput.propTypes = {
  input: _propTypes["default"].object,
  options: _propTypes["default"].array,
  placeholder: _propTypes["default"].node
};
var _default = SelectInput;
exports["default"] = _default;