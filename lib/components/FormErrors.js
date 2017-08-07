'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Marvin Ruppelt on 13.03.17.
                                                                                                                                                                                                                                                                               */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findInObject = require('find-in-object');

var _findInObject2 = _interopRequireDefault(_findInObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormErrors = function FormErrors(errors) {
    var FieldError = function FieldError(_ref) {
        var name = _ref.name;

        if (!errors || !Object.keys(errors).length) return null;

        if (errors.hasOwnProperty('fatal') && errors.fatal[name] || false) {
            return _react2.default.createElement(
                'div',
                { className: 'text-danger form-error form-error--fatal' },
                errors.fatal[name][0]
            );
        }
        if (errors.hasOwnProperty('errors') && errors.errors[name] || false) {
            return _react2.default.createElement(
                'div',
                { className: 'text-danger form-error' },
                errors.errors[name][0]
            );
        }
        if (errors.hasOwnProperty('warnings') && errors.warnings[name] || false) {
            return _react2.default.createElement(
                'div',
                { className: 'text-warning form-error' },
                errors.warnings[name][0]
            );
        }
        if (errors.hasOwnProperty('infos') && errors.infos[name] || false) {
            return _react2.default.createElement(
                'div',
                { className: 'text-muted form-error' },
                errors.infos[name][0]
            );
        }

        return null;
    };

    var hasError = function hasError(name) {
        return errors && (errors.hasOwnProperty('fatal') && errors.fatal[name] || false) || errors.hasOwnProperty('errors') && errors.errors[name] || false;
    };

    var FormGroup1 = function FormGroup1(_ref2) {
        var errorFor = _ref2.errorFor,
            children = _ref2.children;

        var hasErrors = false;
        console.log('FormGroup', errorFor, typeof errorFor === 'undefined' ? 'undefined' : _typeof(errorFor));

        if (typeof errorFor == "string") {
            hasErrors = hasError(errorFor);
        }

        if ((typeof errorFor === 'undefined' ? 'undefined' : _typeof(errorFor)) == "object") {
            errorFor.map(function (key) {
                hasErrors = hasErrors || hasError(key);
            });
        }

        return _react2.default.createElement(
            'div',
            { className: 'form-group' + (hasErrors ? ' has-error' : null) },
            children
        );
    };

    var FormGroup = function FormGroup(_ref3) {
        var errorFor = _ref3.errorFor,
            children = _ref3.children;

        console.log('no matter');
        return _react2.default.createElement(
            'div',
            { className: 'form-group' + (1 ? ' has-error' : null) },
            _react2.default.cloneElement(children)
        );
    };

    return {
        FieldError: FieldError,
        RenderError: FieldError,
        FormGroup: FormGroup,

        //hat schwerwiegenden fehler
        hasErrors: function hasErrors() {
            return errors && errors.hasOwnProperty('fatal') && Object.keys(errors.fatal).length > 0;
        },

        // wurde geprüft -> errors gesetzt und array
        isValidated: function isValidated() {
            return errors && Object.keys(errors).length > 0;
        }
    };
};

exports.default = FormErrors;