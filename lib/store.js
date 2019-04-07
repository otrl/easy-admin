'use strict';

exports.__esModule = true;
exports.persistor = exports.store = exports.history = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.injectAsyncReducers = injectAsyncReducers;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _storage = require('redux-persist/lib/storage');

var _storage2 = _interopRequireDefault(_storage);

var _autoMergeLevel = require('redux-persist/lib/stateReconciler/autoMergeLevel1');

var _autoMergeLevel2 = _interopRequireDefault(_autoMergeLevel);

var _reduxPersist = require('redux-persist');

var _connectedReactRouter = require('connected-react-router');

var _history = require('history');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _fromJS = require('./helpers/fromJS');

var _fromJS2 = _interopRequireDefault(_fromJS);

var _Analytics = require('./helpers/Analytics');

var _Analytics2 = _interopRequireDefault(_Analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createBrowserHistory)();

var SetTransform = (0, _reduxPersist.createTransform)(function (inboundState) {
    if (inboundState.toJS) {
        return inboundState.toJS();
    }
    return (0, _extends3.default)({}, inboundState);
}, function (outboundState) {
    try {
        return (0, _fromJS2.default)(outboundState);
    } catch (error) {
        console.error("error", error);
    }
});

var persistConfig = {
    transforms: [SetTransform],
    key: 'root',
    throttle: 1000,
    keyPrefix: 'easy-admin-',
    storage: _storage2.default,
    stateReconciler: _autoMergeLevel2.default,
    whitelist: ['auth', 'session']
};

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, (0, _reducers2.default)(history));

var store = exports.store = (0, _redux.createStore)(persistedReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, _Analytics2.default, (0, _connectedReactRouter.routerMiddleware)(history))));

var persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);

function injectAsyncReducers() {
    var asyncReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    store.replaceReducer((0, _reduxPersist.persistReducer)(persistConfig, (0, _reducers2.default)(history, asyncReducers)));
    (0, _reduxPersist.persistStore)(store);
}