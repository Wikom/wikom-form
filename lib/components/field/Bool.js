'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Bool = function Bool(_ref) {
    var _inputClassName;

    var input = _ref.input,
        withNull = _ref.withNull,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['input', 'withNull', 'className']);

    var isTrue = [true, 'true', 1, '1', 'j', 'J'].indexOf(input.value) !== -1;
    var isFalse = withNull === false ? isTrue === false : [false, 'false', 0, '0', 'n', 'N'].indexOf(input.value) !== -1;
    var inputClassName = (_inputClassName = {
        indeterminateCheckbox: true,
        'pull-left': true
    }, _defineProperty(_inputClassName, className, true), _defineProperty(_inputClassName, 'checked', isTrue), _defineProperty(_inputClassName, 'unchecked', isFalse), _defineProperty(_inputClassName, 'indeterminate', withNull && !isTrue && !isFalse), _inputClassName);
    var changeValue = function changeValue(evt) {
        return input.onChange(isTrue ? '0' : isFalse && withNull ? '-1' : '1');
    };

    return _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement('input', {
                type: 'hidden',
                name: input.name,
                value: input.value
            }),
            _react2.default.createElement(
                'div',
                {
                    onClick: changeValue
                },
                _react2.default.createElement('div', {
                    className: (0, _classnames2.default)(inputClassName),
                    style: { margin: '4px 12px 4px 0' }
                }),
                _react2.default.createElement(
                    'div',
                    {
                        style: {
                            height: '36px',
                            lineHeight: '36px'
                        }
                    },
                    isTrue && 'ja',
                    isFalse && 'nein',
                    withNull && !isTrue && !isFalse && 'unbestimmt'
                )
            )
        )
    );
};

Bool.defaultProps = {
    withNull: false
};

Bool.propTypes = {
    withNull: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

exports.default = Bool;