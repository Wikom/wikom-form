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

var _FormErrors2 = _interopRequireDefault(require("./FormErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      typeof this.props.asyncValidate === 'function' ? setTimeout(this.props.asyncValidate, 0) : null;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.form !== nextProps.form && typeof nextProps.asyncValidate === 'function') {
        setTimeout(nextProps.asyncValidate, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("form", {
        onSubmit: this.props.handleSubmit(this.props.onSubmit)
      }, _react["default"].cloneElement(this.props.children, _objectSpread({}, this.props)));
    }
  }]);

  return Form;
}(_react["default"].Component);

Form.propTypes = {
  handleSubmit: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  reset: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].object,
  formErrors: _propTypes["default"].object
};
var FormWrapper = (0, _reduxForm.reduxForm)({
  shouldAsyncValidate: function shouldAsyncValidate(_ref) {
    var trigger = _ref.trigger;
    return trigger === 'submit';
  }
})(Form);

var mapState = function mapState(state, _ref2) {
  var name = _ref2.name,
      checkUrl = _ref2.checkUrl,
      initialValues = _ref2.initialValues;

  var _FormErrors = (0, _FormErrors2["default"])((0, _findInObject["default"])('formErrors.' + name + '.data', state)),
      FieldError = _FormErrors.FieldError,
      hasErrors = _FormErrors.hasErrors,
      isValidated = _FormErrors.isValidated;

  var submitting = isValidated() && (0, _findInObject["default"])('form.' + name + '.asyncValidating', state) === true || (0, _findInObject["default"])('form.' + name + '.submitting', state);
  return {
    form: name,
    FieldError: FieldError,
    hasErrors: hasErrors,
    isValidated: isValidated,
    submitting: submitting,
    formValues: (0, _findInObject["default"])('form.' + name + '.values', state),
    initialValues: Object.assign({}, (0, _helpers.initialValuesFromURL)(name), initialValues),
    asyncValidate: checkUrl ? (0, _actions.asyncValidate)({
      name: name,
      url: checkUrl
    }) : false,
    onChange: checkUrl ? (0, _actions.handleChange)({
      name: name,
      url: checkUrl
    }) : false
  };
};

var mapDispatch = function mapDispatch(dispatch, _ref3) {
  var name = _ref3.name,
      submitHandler = _ref3.submitHandler,
      successHandler = _ref3.successHandler;
  return {
    reset: function reset() {
      return dispatch((0, _reduxForm.reset)(name));
    },
    onSubmit: function onSubmit(data) {
      return dispatch(submitHandler(data)).then(function (result) {
        return dispatch(successHandler(result));
      })["catch"](function (err) {
        return dispatch(_actions.formErrorsActions.setFormErrorsFromSubmit(name, err.response.body));
      });
    }
  };
};

var ConnectedFormWrapper = (0, _reactRedux.connect)(mapState, mapDispatch)(FormWrapper);
ConnectedFormWrapper.defaultProps = {
  successHandler: _reactRouterRedux.goBack
};
ConnectedFormWrapper.propTypes = {
  name: _propTypes["default"].string.isRequired,
  checkUrl: _propTypes["default"].string,
  submitHandler: _propTypes["default"].func.isRequired,
  successHandler: _propTypes["default"].func
};
var _default = ConnectedFormWrapper;
exports["default"] = _default;