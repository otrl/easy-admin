'use strict';

exports.__esModule = true;
exports.default = FooterSection;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FooterSection(_ref) {
    var dictionary = _ref.dictionary;

    return _react2.default.createElement(
        _antd.Layout.Footer,
        { className: 'footer-section' },
        _react2.default.createElement(
            'footer',
            null,
            'footer'
        )
    );
}

FooterSection.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired
};
module.exports = exports.default;