'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _constants = require('../constants');

var _Auth = require('../services/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthActions = {
    login: function login(email, password) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                var user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _Auth2.default.login(email, password);

                            case 3:
                                user = _context.sent;

                                dispatch({ type: _constants.AuthActionTypes.AUTH_LOGIN_SUCCESS, user: user });
                                return _context.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', _promise2.default.reject(_context.t0));

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 8]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();
    },
    logout: function logout() {
        return function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;

                                if (!_jsCookie2.default.get(_constants.TokenCookiePath)) {
                                    _context2.next = 4;
                                    break;
                                }

                                _context2.next = 4;
                                return _Auth2.default.logout();

                            case 4:
                                dispatch({ type: _constants.AuthActionTypes.AUTH_LOGOUT });
                                return _context2.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);
                                return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[0, 8]]);
            }));

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        }();
    }
};

exports.default = AuthActions;
module.exports = exports.default;