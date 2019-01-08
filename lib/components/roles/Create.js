'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _redux = require('redux');

var _antd = require('antd');

var _connectedReactRouter = require('connected-react-router');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _RolesActions = require('../../actions/RolesActions');

var _RolesActions2 = _interopRequireDefault(_RolesActions);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Create = function (_React$PureComponent) {
    (0, _inherits3.default)(Create, _React$PureComponent);

    function Create() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
                var _this$props, createRole, dictionary, navigateTo;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props = _this.props, createRole = _this$props.createRole, dictionary = _this$props.dictionary, navigateTo = _this$props.navigateTo;
                                _context.prev = 1;

                                _this.setState({ loading: true });
                                _context.next = 5;
                                return createRole(values);

                            case 5:
                                _antd.notification.success({
                                    message: dictionary.getByKey("ROLE_CREATE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ROLE_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                navigateTo(_constants.Urls.ROLES);
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ loading: false });
                                _antd.notification.error({
                                    message: dictionary.getByKey("ROLE_CREATE_API_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ROLE_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION")
                                });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Create.prototype.render = function render() {
        var dictionary = this.props.dictionary;


        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("ROLE_CREATE_TITLE")
                )
            ),
            _react2.default.createElement(
                _antd.Breadcrumb,
                null,
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: _constants.Urls.HOME },
                        _react2.default.createElement(_antd.Icon, { type: 'home' })
                    )
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: _constants.Urls.ROLES },
                        _react2.default.createElement(_antd.Icon, { type: 'team' }),
                        ' ',
                        dictionary.getByKey("ROLES_LISTING_BREADCRUMB")
                    )
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'usergroup-add' }),
                    ' ',
                    dictionary.getByKey("ROLE_CREATE_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("ROLE_CREATE_TITLE")
            ),
            _react2.default.createElement(_Form2.default, { dictionary: dictionary, onSubmit: this.onSubmit, loading: this.state.loading })
        );
    };

    return Create;
}(_react2.default.PureComponent);

Create.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    createRole: _propTypes2.default.func.isRequired,
    navigateTo: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        createRole: (0, _redux.bindActionCreators)(_RolesActions2.default.create, dispatch),
        navigateTo: (0, _redux.bindActionCreators)(_connectedReactRouter.push, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        dictionary: state.dictionary
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Create);
module.exports = exports.default;