'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _Account = require('../services/Account');

var _Account2 = _interopRequireDefault(_Account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountActions = {
    get: function get() {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                var user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_GET_START });
                                _context.next = 4;
                                return _Account2.default.get();

                            case 4:
                                user = _context.sent;

                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_GET_SUCCESS, user: user });
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_GET_FAIL });

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

    update: function update(userData) {
        return function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;

                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_UPDATE_START, userData: userData });
                                _context2.next = 4;
                                return _Account2.default.update(userData);

                            case 4:
                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_UPDATE_SUCCESS });
                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);

                                dispatch({ type: _constants.AccountActionTypes.ACCOUNT_UPDATE_FAIL });

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[0, 7]]);
            }));

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        }();
    }
};

exports.default = AccountActions;
module.exports = exports.default;