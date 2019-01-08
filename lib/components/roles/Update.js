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

var _RoleState = require('../../records/RoleState');

var _RoleState2 = _interopRequireDefault(_RoleState);

var _RolesActions = require('../../actions/RolesActions');

var _RolesActions2 = _interopRequireDefault(_RolesActions);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Update = function (_React$PureComponent) {
    (0, _inherits3.default)(Update, _React$PureComponent);

    function Update() {
        var _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Update);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(values) {
                var _this$props, updateRole, dictionary, navigateTo, match;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props = _this.props, updateRole = _this$props.updateRole, dictionary = _this$props.dictionary, navigateTo = _this$props.navigateTo, match = _this$props.match;
                                _context.prev = 1;
                                _context.next = 4;
                                return updateRole(match.params.id, values);

                            case 4:
                                _antd.notification.success({
                                    message: dictionary.getByKey("ROLE_UPDATE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ROLE_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                navigateTo(_constants.Urls.ROLES);
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](1);

                                _antd.notification.error({
                                    message: dictionary.getByKey("ROLE_UPDATE_API_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("ROLE_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION")
                                });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 8]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Update.prototype.componentWillMount = function componentWillMount() {
        this.props.fetchRole(this.props.match.params.id);
    };

    Update.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            roleState = _props.roleState,
            user = _props.user;


        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("ROLE_UPDATE_TITLE")
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
                    _react2.default.createElement(_antd.Icon, { type: 'edit' }),
                    ' ',
                    dictionary.getByKey("ROLE_UPDATE_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("ROLE_UPDATE_TITLE")
            ),
            _react2.default.createElement(_Form2.default, { dictionary: dictionary,
                role: roleState.role,
                onSubmit: this.onSubmit,
                disabled: !user.hasPermission(_constants.Permissions.ROLE_UPDATE),
                loading: roleState.loading })
        );
    };

    return Update;
}(_react2.default.PureComponent);

Update.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    roleState: _propTypes2.default.instanceOf(_RoleState2.default).isRequired,
    fetchRole: _propTypes2.default.func.isRequired,
    updateRole: _propTypes2.default.func.isRequired,
    navigateTo: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchRole: (0, _redux.bindActionCreators)(_RolesActions2.default.get, dispatch),
        updateRole: (0, _redux.bindActionCreators)(_RolesActions2.default.update, dispatch),
        navigateTo: (0, _redux.bindActionCreators)(_connectedReactRouter.push, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        user: state.auth.user,
        dictionary: state.dictionary,
        roleState: state.roleState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Update);
module.exports = exports.default;