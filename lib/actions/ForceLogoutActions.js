'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _ForceLogout = require('../services/ForceLogout');

var _ForceLogout2 = _interopRequireDefault(_ForceLogout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForceLogoutActions = {
    logout: function logout(ids) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.ForceLogoutActionTypes.FORCE_LOGOUT_START });
                                _context.next = 4;
                                return _ForceLogout2.default.logout(ids);

                            case 4:
                                dispatch({ type: _constants.ForceLogoutActionTypes.FORCE_LOGOUT_SUCCESS });
                                return _context.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                dispatch({ type: _constants.ForceLogoutActionTypes.FORCE_LOGOUT_FAIL });
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
    }
};

exports.default = ForceLogoutActions;
module.exports = exports.default;