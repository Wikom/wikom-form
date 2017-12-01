'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _VirtualizedSelectInput = require('./VirtualizedSelectInput');

var _VirtualizedSelectInput2 = _interopRequireDefault(_VirtualizedSelectInput);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by rouven on 13.04.17.
                                                                                                                                                                                                                              */

var Select = function Select(_ref) {
    var options = _ref.options,
        props = _objectWithoutProperties(_ref, ['options']);

    var selectOptions = options instanceof Array ? options.map(function (option) {
        return {
            value: (0, _helpers.stringifyValue)(option.value),
            label: option.label
        };
    }) : (0, _helpers.buildOptions)(options);
    var Component = selectOptions.length > 100 ? _VirtualizedSelectInput2.default : _SelectInput2.default;

    return _react2.default.createElement(Component, _extends({ options: selectOptions }, props));
};

Select.defaultProps = {
    placeholder: 'Bitte auswählen...',
    noResultsText: 'Kein Ergebnis gefunden'
};

Select.propTypes = {
    options: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    placeholder: _propTypes2.default.node,
    noResultsText: _propTypes2.default.node
};

exports.default = Select;