'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormErrors = function FormErrors(errors) {
    return {
        RenderError: function RenderError(_ref) {
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
        },

        //hat schwerwiegenden fehler
        hasErrors: function hasErrors() {
            return errors && errors.hasOwnProperty('fatal') && Object.keys(errors.fatal).length > 0;
        },

        // wurde geprüft -> errors gesetzt und array
        isValidated: function isValidated() {
            return errors && Object.keys(errors).length > 0;
        }
    };
}; /**
    * Created by Marvin Ruppelt on 13.03.17.
    */

exports.default = FormErrors;