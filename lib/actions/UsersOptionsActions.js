'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _UsersOptions = require('../services/UsersOptions');

var _UsersOptions2 = _interopRequireDefault(_UsersOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersOptionsActions = {
    getList: function getList(searchString) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                var users;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_START, searchString: searchString });
                                _context.next = 4;
                                return _UsersOptions2.default.getList(searchString);

                            case 4:
                                users = _context.sent;

                                dispatch({ type: _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_SUCCESS, users: users });
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context['catch'](0);

                                dispatch({ type: _constants.UsersOptionsActionTypes.USERS_OPTIONS_GET_FAIL });

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
    }
};

exports.default = UsersOptionsActions;
module.exports = exports.default;