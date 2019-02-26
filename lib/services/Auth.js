'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _Api = require('../helpers/Api');

var _Api2 = _interopRequireDefault(_Api);

var _User = require('../records/User');

var _User2 = _interopRequireDefault(_User);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthService = function () {
    function AuthService() {
        (0, _classCallCheck3.default)(this, AuthService);
    }

    AuthService.login = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, password) {
            var apiClient, result, _result$data, accessToken, accessTokenExpiry, refreshToken, refreshTokenExpiry, userResult;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            apiClient = new _Api2.default();
                            _context.next = 4;
                            return apiClient.post('/authenticate', {
                                email: email,
                                password: password
                            });

                        case 4:
                            result = _context.sent;
                            _result$data = result.data, accessToken = _result$data.accessToken, accessTokenExpiry = _result$data.accessTokenExpiry, refreshToken = _result$data.refreshToken, refreshTokenExpiry = _result$data.refreshTokenExpiry;


                            _jsCookie2.default.set(_constants.AccessTokenCookiePath, accessToken, { expires: new Date(accessTokenExpiry), secure: true });
                            _jsCookie2.default.set(_constants.RefreshTokenCookiePath, refreshToken, { expires: new Date(refreshTokenExpiry), secure: true });

                            _context.next = 10;
                            return apiClient.get('/account', { headers: { Authorization: accessToken } });

                        case 10:
                            userResult = _context.sent;
                            return _context.abrupt('return', _User2.default.fromJSON(userResult.data));

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', _promise2.default.reject(_context.t0));

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 14]]);
        }));

        function login(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return login;
    }();

    AuthService.logout = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var apiClient;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            apiClient = new _Api2.default();
                            _context2.next = 4;
                            return apiClient.patch('/logout', {
                                accessToken: _jsCookie2.default.get(_constants.AccessTokenCookiePath),
                                refreshToken: _jsCookie2.default.get(_constants.RefreshTokenCookiePath)
                            });

                        case 4:
                            return _context2.abrupt('return', _promise2.default.resolve());

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);

                            console.error(_context2.t0);
                            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 7]]);
        }));

        function logout() {
            return _ref2.apply(this, arguments);
        }

        return logout;
    }();

    return AuthService;
}();

exports.default = AuthService;
module.exports = exports.default;