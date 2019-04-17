"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxForm = require("redux-form");

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _helpers = require("../helpers");

var _findInObject = _interopRequireDefault(require("find-in-object"));

var _reactRouterRedux = require("react-router-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SimpleForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SimpleForm, _React$Component);

  function SimpleForm() {
    _classCallCheck(this, SimpleForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleForm).apply(this, arguments));
  }

  _createClass(SimpleForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      typeof this.props.asyncValidate === 'function' ? this.props.asyncValidate() : null;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.form !== nextProps.form && typeof nextProps.asyncValidate === 'function') {
        nextProps.asyncValidate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("form", {
        onSubmit: this.props.handleSubmit(this.props.onSubmit)
      }, this.props.children);
    }
  }]);

  return SimpleForm;
}(_react["default"].Component);

SimpleForm.propTypes = {
  handleSubmit: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  reset: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].object,
  formErrors: _propTypes["default"].object
};
var FormWrapper = (0, _reduxForm.reduxForm)()(SimpleForm);
FormWrapper.propTypes = {
  name: _propTypes["default"].string.isRequired,
  checkUrl: _propTypes["default"].string
};

var mapState = function mapState(state, _ref) {
  var name = _ref.name,
      checkUrl = _ref.checkUrl,
      initialValues = _ref.initialValues;
  return {
    form: name,
    formValues: (0, _findInObject["default"])('form.' + name + '.values', state),
    initialValues: Object.assign({}, (0, _helpers.initialValuesFromURL)(name), initialValues),
    asyncValidate: checkUrl ? (0, _actions.asyncValidate)({
      name: name,
      url: checkUrl
    }) : false,
    onChange: checkUrl ? (0, _actions.asyncValidate)({
      name: name,
      url: checkUrl
    }) : false
  };
};

var _default = (0, _reactRedux.connect)(mapState)(FormWrapper);

exports["default"] = _default;