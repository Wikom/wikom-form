"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 02.03.17.
 */
var SelectClassic = function SelectClassic(_ref) {
  var name = _ref.name,
      className = _ref.className,
      options = _ref.options;
  var optionTags = Object.keys(options).map(function (option) {
    return _react["default"].createElement("option", {
      value: option,
      key: option
    }, options[option]);
  });
  return _react["default"].createElement(_reduxForm.Field, {
    name: name,
    component: "select",
    className: className
  }, _react["default"].createElement("option", null, "Bitte ausw\xE4hlen"), optionTags);
};

SelectClassic.propTypes = {
  name: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  options: _propTypes["default"].object.isRequired
};
var _default = SelectClassic;
exports["default"] = _default;