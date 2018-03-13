'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
};

if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var ResponsiveRender = function (_React$Component) {
    (0, _inherits3.default)(ResponsiveRender, _React$Component);

    function ResponsiveRender(props) {
        (0, _classCallCheck3.default)(this, ResponsiveRender);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.state = {
            visible: true
        };
        _this.mql = undefined;

        _this.resize = function () {
            _this.setState({
                visible: _this.mql.matches
            });
        };

        var matchMedia = undefined;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }

        if (matchMedia) {
            var query = '';

            if (props.displayFrom && props.displayFrom in dimensionMap) {
                query += '(min-width: ' + dimensionMap[props.displayFrom] + ')';
            }

            if (props.displayTo && props.displayTo in dimensionMap) {
                if (query !== '' && props.orOperator) {
                    query += ', ';
                } else if (query !== '' && !props.orOperator) {
                    query += ' and ';
                }

                query += '(max-width: ' + dimensionMap[props.displayTo] + ')';
            }

            if (query !== '') {
                _this.mql = matchMedia(query);
            }
        }
        return _this;
    }

    ResponsiveRender.prototype.componentDidMount = function componentDidMount() {
        if (this.mql) {
            this.mql.addListener(this.resize);
            this.resize();
        }
    };

    ResponsiveRender.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.mql) {
            this.mql.removeListener(this.resize);
        }
    };

    ResponsiveRender.prototype.render = function render() {
        if (!this.state.visible) {
            return null;
        }
        return this.props.children;
    };

    return ResponsiveRender;
}(_react2.default.Component);

ResponsiveRender.propTypes = {
    displayFrom: _propTypes2.default.string,
    displayTo: _propTypes2.default.string,
    orOperator: _propTypes2.default.bool
};
ResponsiveRender.defaultProps = {
    displayFrom: undefined,
    displayTo: undefined,
    orOperator: false
};
exports.default = ResponsiveRender;
module.exports = exports['default'];