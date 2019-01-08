'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _store = require('../store');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTokenRefreshing = false;
var pendingRequests = [];

var ApiGateway = function () {
    function ApiGateway() {
        var _this = this;

        (0, _classCallCheck3.default)(this, ApiGateway);
        this.apiInstance = null;
        this.baseUrl = null;

        var _store$getState = _store.store.getState(),
            config = _store$getState.config;

        this.baseUrl = config.api;
        this.apiInstance = _axios2.default.create({
            baseURL: this.baseUrl + '/'
        });

        this.apiInstance.interceptors.request.use(function (config) {
            var accessToken = _jsCookie2.default.get(_constants.AccessTokenCookiePath);
            var processId = _lodash2.default.uniqueId();
            config.processId = processId;
            if (accessToken) {
                config.headers.Authorization = 'Bearer ' + accessToken;
            }
            _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_START, id: processId });
            return config;
        }, function (error) {
            return _promise2.default.reject(error);
        });

        this.apiInstance.interceptors.response.use(function (res) {
            if (res.config.processId) {
                _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: res.config.processId });
            }
            return res;
        }, function (err) {
            var config = err.config,
                status = err.response.status;

            var originalRequest = config;
            var refreshToken = _jsCookie2.default.get(_constants.RefreshTokenCookiePath);

            if (status === 401) {
                if (refreshToken) {

                    if (!isTokenRefreshing) {
                        isTokenRefreshing = true;
                        _this.refreshAccessToken(refreshToken);
                    }

                    return new _promise2.default(function (resolve, reject) {
                        pendingRequests.push(function (refreshError, token) {
                            if (refreshError) {
                                _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: err.response.config.processId });
                                return reject(refreshError);
                            }
                            // replace the expired token and retry
                            originalRequest.headers.Authorization = 'Bearer ' + token;
                            (0, _axios2.default)(originalRequest).then(function (result) {
                                _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: originalRequest.processId });
                                resolve(result);
                            }).catch(function (error) {
                                _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: originalRequest.processId });
                                reject(error);
                            });
                        });
                    });
                } else {
                    _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: err.response.config.processId });
                    _store.store.dispatch({ type: _constants.AuthActionTypes.AUTH_LOGOUT });
                    return _promise2.default.reject(err);
                }
            } else {
                _store.store.dispatch({ type: _constants.UiActionTypes.LOADING_END, id: err.response.config.processId });
                return _promise2.default.reject(err);
            }
        });

        return this.apiInstance;
    }

    ApiGateway.prototype.refreshAccessToken = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(oldRefreshToken) {
            var result, _result$data, accessToken, accessTokenExpiry, refreshToken, refreshTokenExpiry;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _axios2.default.post(this.baseUrl + '/refresh-tokens', { refreshToken: oldRefreshToken });

                        case 3:
                            result = _context.sent;
                            _result$data = result.data, accessToken = _result$data.accessToken, accessTokenExpiry = _result$data.accessTokenExpiry, refreshToken = _result$data.refreshToken, refreshTokenExpiry = _result$data.refreshTokenExpiry;


                            _jsCookie2.default.set(_constants.AccessTokenCookiePath, accessToken, { expires: new Date(accessTokenExpiry), secure: true });
                            _jsCookie2.default.set(_constants.RefreshTokenCookiePath, refreshToken, { expires: new Date(refreshTokenExpiry), secure: true });

                            isTokenRefreshing = false;
                            pendingRequests.map(function (cb) {
                                return cb(null, accessToken);
                            });
                            pendingRequests = [];
                            _context.next = 19;
                            break;

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);
                            isTokenRefreshing = false;
                            pendingRequests.map(function (cb) {
                                return cb(_context.t0, null);
                            });
                            pendingRequests = [];
                            _store.store.dispatch({ type: _constants.AuthActionTypes.AUTH_LOGOUT });

                        case 19:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 12]]);
        }));

        function refreshAccessToken(_x) {
            return _ref.apply(this, arguments);
        }

        return refreshAccessToken;
    }();

    return ApiGateway;
}();

exports.default = ApiGateway;
module.exports = exports.default;