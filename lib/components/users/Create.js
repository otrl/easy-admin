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

var _RolesOptionsState = require('../../records/RolesOptionsState');

var _RolesOptionsState2 = _interopRequireDefault(_RolesOptionsState);

var _UsersActions = require('../../actions/UsersActions');

var _UsersActions2 = _interopRequireDefault(_UsersActions);

var _RolesOptionsActions = require('../../actions/RolesOptionsActions');

var _RolesOptionsActions2 = _interopRequireDefault(_RolesOptionsActions);

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
                var _this$props, createUser, dictionary, navigateTo;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$props = _this.props, createUser = _this$props.createUser, dictionary = _this$props.dictionary, navigateTo = _this$props.navigateTo;
                                _context.prev = 1;

                                _this.setState({ loading: true });
                                _context.next = 5;
                                return createUser(values);

                            case 5:
                                _antd.notification.success({
                                    message: dictionary.getByKey("USER_CREATE_SUCCESS_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USER_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION")
                                });
                                navigateTo(_constants.Urls.USERS);
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ loading: false });
                                _antd.notification.error({
                                    message: dictionary.getByKey("USER_CREATE_API_ERROR_NOTIFICATION_TITLE"),
                                    description: dictionary.getByKey("USER_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION")
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

    Create.prototype.componentWillMount = function componentWillMount() {
        this.props.fetchRolesOptions();
    };

    Create.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            rolesOptionsState = _props.rolesOptionsState;


        return _react2.default.createElement(
            'div',
            { className: 'content-section-inner' },
            _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    dictionary.getByKey("USER_CREATE_TITLE")
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
                        { to: _constants.Urls.USERS },
                        _react2.default.createElement(_antd.Icon, { type: 'team' }),
                        ' ',
                        dictionary.getByKey("USERS_LISTING_BREADCRUMB")
                    )
                ),
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'usergroup-add' }),
                    ' ',
                    dictionary.getByKey("USER_CREATE_BREADCRUMB")
                )
            ),
            _react2.default.createElement(
                'h2',
                null,
                dictionary.getByKey("USER_CREATE_TITLE")
            ),
            _react2.default.createElement(_Form2.default, { dictionary: dictionary,
                onSubmit: this.onSubmit,
                roles: rolesOptionsState.roles,
                loading: this.state.loading || rolesOptionsState.loading })
        );
    };

    return Create;
}(_react2.default.PureComponent);

Create.propTypes = {
    rolesOptionsState: _propTypes2.default.instanceOf(_RolesOptionsState2.default).isRequired,
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    fetchRolesOptions: _propTypes2.default.func.isRequired,
    createUser: _propTypes2.default.func.isRequired,
    navigateTo: _propTypes2.default.func.isRequired
};


var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchRolesOptions: (0, _redux.bindActionCreators)(_RolesOptionsActions2.default.getList, dispatch),
        createUser: (0, _redux.bindActionCreators)(_UsersActions2.default.create, dispatch),
        navigateTo: (0, _redux.bindActionCreators)(_connectedReactRouter.push, dispatch)
    };
};

var getStoresMap = function getStoresMap(state) {
    return {
        dictionary: state.dictionary,
        rolesOptionsState: state.rolesOptionsState
    };
};

exports.default = (0, _reactRedux.connect)(getStoresMap, dispatchToProps)(Create);
module.exports = exports.default;