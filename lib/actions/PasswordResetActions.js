'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _PasswordReset = require('../services/PasswordReset');

var _PasswordReset2 = _interopRequireDefault(_PasswordReset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordResetActions = {
    requestPasswordReset: function requestPasswordReset(email) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_REQUEST_START });
                                _context.next = 4;
                                return _PasswordReset2.default.requestPasswordReset(email);

                            case 4:
                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_REQUEST_SUCCESS });
                                return _context.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_REQUEST_FAIL });
                                return _context.abrupt('return', _promise2.default.reject(_context.t0));

                            case 12:
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
    resetPassword: function resetPassword(password, token) {
        return function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;

                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_START });
                                _context2.next = 4;
                                return _PasswordReset2.default.resetPassword(password, token);

                            case 4:
                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_SUCCESS });
                                return _context2.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                dispatch({ type: _constants.PasswordResetActionTypes.PASSWORD_RESET_FAIL });
                                return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

                            case 12:
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

exports.default = PasswordResetActions;
module.exports = exports.default;