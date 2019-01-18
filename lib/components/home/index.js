'use strict';

exports.__esModule = true;
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'content-section-inner' },
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Home page'
            )
        ),
        _react2.default.createElement(
            _antd.Breadcrumb,
            null,
            _react2.default.createElement(
                _antd.Breadcrumb.Item,
                null,
                _react2.default.createElement(_antd.Icon, { type: 'home' })
            )
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Home page'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Replace this component with your custom dashboard'
        )
    );
}
module.exports = exports.default;