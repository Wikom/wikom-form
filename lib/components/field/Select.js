"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectInput = _interopRequireDefault(require("./SelectInput"));

var _VirtualizedSelectInput = _interopRequireDefault(require("./VirtualizedSelectInput"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var options = _ref.options,
      props = _objectWithoutProperties(_ref, ["options"]);

  var selectOptions = options instanceof Array ? options.map(function (option) {
    return {
      value: (0, _helpers.stringifyValue)(option.value),
      label: option.label
    };
  }) : (0, _helpers.buildOptions)(options);
  var Component = selectOptions.length > 100 ? _VirtualizedSelectInput["default"] : _SelectInput["default"];
  return _react["default"].createElement(Component, _extends({
    options: selectOptions
  }, props));
};

Select.defaultProps = {
  placeholder: 'Bitte auswählen...',
  noResultsText: 'Kein Ergebnis gefunden'
};
Select.propTypes = {
  options: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  placeholder: _propTypes["default"].node,
  noResultsText: _propTypes["default"].node
};
var _default = Select;
exports["default"] = _default;