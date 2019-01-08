'use strict';

exports.__esModule = true;

var _redux = require('redux');

var _immutable = require('redux-form/immutable');

var _connectedReactRouter = require('connected-react-router');

var _Config = require('./Config');

var _Config2 = _interopRequireDefault(_Config);

var _Ui = require('./Ui');

var _Ui2 = _interopRequireDefault(_Ui);

var _Auth = require('./Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _Session = require('./Session');

var _Session2 = _interopRequireDefault(_Session);

var _Dictionary = require('./Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _RolesState = require('./RolesState');

var _RolesState2 = _interopRequireDefault(_RolesState);

var _RolesOptionsState = require('./RolesOptionsState');

var _RolesOptionsState2 = _interopRequireDefault(_RolesOptionsState);

var _RoleState = require('./RoleState');

var _RoleState2 = _interopRequireDefault(_RoleState);

var _UsersState = require('./UsersState');

var _UsersState2 = _interopRequireDefault(_UsersState);

var _UserState = require('./UserState');

var _UserState2 = _interopRequireDefault(_UserState);

var _AccountState = require('./AccountState');

var _AccountState2 = _interopRequireDefault(_AccountState);

var _AccountActionLogState = require('./AccountActionLogState');

var _AccountActionLogState2 = _interopRequireDefault(_AccountActionLogState);

var _ActionLogState = require('./ActionLogState');

var _ActionLogState2 = _interopRequireDefault(_ActionLogState);

var _UsersOptionsState = require('./UsersOptionsState');

var _UsersOptionsState2 = _interopRequireDefault(_UsersOptionsState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (history) {
    return (0, _redux.combineReducers)({
        router: (0, _connectedReactRouter.connectRouter)(history),
        config: _Config2.default,
        ui: _Ui2.default,
        auth: _Auth2.default,
        form: _immutable.reducer,
        session: _Session2.default,
        dictionary: _Dictionary2.default,
        rolesState: _RolesState2.default,
        rolesOptionsState: _RolesOptionsState2.default,
        roleState: _RoleState2.default,
        usersState: _UsersState2.default,
        userState: _UserState2.default,
        accountState: _AccountState2.default,
        accountActionLogState: _AccountActionLogState2.default,
        actionLogState: _ActionLogState2.default,
        usersOptionsState: _UsersOptionsState2.default
    });
};

module.exports = exports.default;