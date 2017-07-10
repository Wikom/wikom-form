'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _helpers = require('../helpers');

var _findInObject = require('find-in-object');

var _findInObject2 = _interopRequireDefault(_findInObject);

var _reactRouterRedux = require('react-router-redux');

var _FormErrors2 = require('./FormErrors');

var _FormErrors3 = _interopRequireDefault(_FormErrors2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Marvin on 20.03.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            typeof this.props.asyncValidate === 'function' ? this.props.asyncValidate() : null;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.form !== nextProps.form && typeof nextProps.asyncValidate === 'function') {
                nextProps.asyncValidate();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.props.handleSubmit(this.props.onSubmit) },
                _react2.default.cloneElement(this.props.children, _extends({}, this.props))
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.propTypes = {
    handleSubmit: _propTypes2.default.func.isRequired,
    onSubmit: _propTypes2.default.func.isRequired,
    reset: _propTypes2.default.func.isRequired,
    errors: _propTypes2.default.object,
    formErrors: _propTypes2.default.object
};

var FormWrapper = (0, _reduxForm.reduxForm)({
    asyncBlurFields: ['-']
})(Form);

FormWrapper.propTypes = {
    name: _propTypes2.default.string.isRequired,
    checkUrl: _propTypes2.default.string,
    submitHandler: _propTypes2.default.func.isRequired,
    successHandler: _propTypes2.default.func
};

FormWrapper.defaultProps = {
    successHandler: _reactRouterRedux.goBack
};

var mapState = function mapState(state, _ref) {
    var name = _ref.name,
        checkUrl = _ref.checkUrl,
        initialValues = _ref.initialValues;

    var _FormErrors = (0, _FormErrors3.default)((0, _findInObject2.default)('formErrors.' + name + '.data', state)),
        FieldError = _FormErrors.FieldError,
        hasErrors = _FormErrors.hasErrors,
        isValidated = _FormErrors.isValidated;

    var submitting = isValidated() && (0, _findInObject2.default)('form.' + name + '.asyncValidating', state) === true || (0, _findInObject2.default)('form.' + name + '.submitting', state);

    return {
        form: name,
        FieldError: FieldError,
        hasErrors: hasErrors,
        isValidated: isValidated,
        submitting: submitting,
        formValues: (0, _findInObject2.default)('form.' + name + '.values', state),
        initialValues: Object.assign({}, (0, _helpers.initialValuesFromURL)(name), initialValues),
        asyncValidate: checkUrl ? (0, _actions.asyncValidate)({ name: name, url: checkUrl }) : false,
        onChange: checkUrl ? (0, _actions.asyncValidate)({ name: name, url: checkUrl }) : false
    };
};

var mapDispatch = function mapDispatch(dispatch, _ref2) {
    var name = _ref2.name,
        submitHandler = _ref2.submitHandler,
        successHandler = _ref2.successHandler;
    return {
        reset: function reset() {
            return dispatch((0, _reduxForm.reset)(name));
        },
        onSubmit: function onSubmit(data) {
            return dispatch(submitHandler(data)).then(function (result) {
                return dispatch(successHandler(result));
            }).catch(function (err) {
                return dispatch(_actions.formErrorsActions.setFormErrorsFromSubmit(name, err.response.body));
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(FormWrapper);