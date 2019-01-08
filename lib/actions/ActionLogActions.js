'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _ActionLog = require('../services/ActionLog');

var _ActionLog2 = _interopRequireDefault(_ActionLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionLogActions = {
    getActionLog: function getActionLog(search) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                var _ref2, actions, count;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.ActionLogActionTypes.ACTION_LOG_GET_START, search: search });
                                _context.next = 4;
                                return _ActionLog2.default.getList(search);

                            case 4:
                                _ref2 = _context.sent;
                                actions = _ref2.actions;
                                count = _ref2.count;

                                dispatch({ type: _constants.ActionLogActionTypes.ACTION_LOG_GET_SUCCESS, actions: actions, count: count });
                                _context.next = 14;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](0);

                                console.error(_context.t0);
                                dispatch({ type: _constants.ActionLogActionTypes.ACTION_LOG_GET_FAIL });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 10]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();
    }
};

exports.default = ActionLogActions;
module.exports = exports.default;