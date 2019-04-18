"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Bool = function Bool(_ref) {
  var _inputClassName;

  var input = _ref.input,
      withNull = _ref.withNull,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["input", "withNull", "className"]);

  var isTrue = [true, 'true', 1, '1', 'j', 'J'].indexOf(input.value) !== -1;
  var isFalse = withNull === false ? isTrue === false : [false, 'false', 0, '0', 'n', 'N'].indexOf(input.value) !== -1;
  var inputClassName = (_inputClassName = {
    indeterminateCheckbox: true,
    'pull-left': true
  }, _defineProperty(_inputClassName, className, true), _defineProperty(_inputClassName, "checked", isTrue), _defineProperty(_inputClassName, "unchecked", isFalse), _defineProperty(_inputClassName, "indeterminate", withNull && !isTrue && !isFalse), _inputClassName);

  var changeValue = function changeValue(evt) {
    return input.onChange(isTrue ? '0' : isFalse && withNull ? '-1' : '1');
  };

  return _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("fieldset", null, _react["default"].createElement("input", {
    type: "hidden",
    name: input.name,
    value: input.value
  }), _react["default"].createElement("div", {
    className: (0, _classnames["default"])(inputClassName),
    style: {
      margin: '4px 12px 4px 0'
    },
    onClick: changeValue
  }), _react["default"].createElement("div", {
    style: {
      height: '36px',
      lineHeight: '36px'
    }
  }, _react["default"].createElement("span", {
    onClick: changeValue
  }, isTrue && 'ja', isFalse && 'nein', withNull && !isTrue && !isFalse && 'unbestimmt'))));
};

Bool.defaultProps = {
  withNull: false
};
Bool.propTypes = {
  withNull: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var _default = Bool;
exports["default"] = _default;