'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectClassic = function SelectClassic(_ref) {
    var name = _ref.name,
        className = _ref.className,
        options = _ref.options;

    var optionTags = Object.keys(options).map(function (option) {
        return _react2.default.createElement(
            'option',
            { value: option, key: option },
            options[option]
        );
    });

    return _react2.default.createElement(
        _reduxForm.Field,
        { name: name, component: 'select', className: className },
        _react2.default.createElement(
            'option',
            null,
            'Bitte ausw\xE4hlen'
        ),
        optionTags
    );
}; /**
    * Created by rouven on 02.03.17.
    */

SelectClassic.propTypes = {
    name: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    options: _propTypes2.default.object.isRequired
};

exports.default = SelectClassic;