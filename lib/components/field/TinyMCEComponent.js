'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTinymce = require('react-tinymce');

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

require('../../../css/TinyMCEComponent.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by Marvn on 27.03.17.
                                                                                                                                                                                                                              */

var TinyMCEComponent = function TinyMCEComponent(_ref) {
    var _ref$input = _ref.input,
        name = _ref$input.name,
        value = _ref$input.value,
        input = _objectWithoutProperties(_ref$input, ['name', 'value']),
        disabled = _ref.disabled,
        props = _objectWithoutProperties(_ref, ['input', 'disabled']);

    if (disabled === true) {
        return _react2.default.createElement('div', {
            dangerouslySetInnerHTML: { __html: value },
            className: 'input-lookalike'
        });
    }

    return _react2.default.createElement(
        'div',
        { className: 'wikom-form__tinymcewrapper' },
        _react2.default.createElement(_reactTinymce2.default, _extends({}, props, {
            name: name,
            content: value,
            onBlur: function onBlur(e) {
                return input.onBlur(e.target.getContent());
            },
            config: {
                inline: true,
                menubar: false,
                toolbar: 'bold italic underline | alignleft aligncenter alignright ',
                height: 150,
                statusbar: true
            }
        }))
    );
};

TinyMCEComponent.defaultProps = {
    disabled: false
};

exports.default = TinyMCEComponent;