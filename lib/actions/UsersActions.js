'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = require('../constants');

var _Users = require('../services/Users');

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersActions = {
    getList: function getList(page, limit) {
        return function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                var _ref2, users, count;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USERS_GET_START, page: page, limit: limit });
                                _context.next = 4;
                                return _Users2.default.getList(page, limit);

                            case 4:
                                _ref2 = _context.sent;
                                users = _ref2.users;
                                count = _ref2.count;

                                dispatch({ type: _constants.UsersActionTypes.USERS_GET_SUCCESS, users: users, count: count });
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USERS_GET_FAIL });

                            case 13:
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
    },

    get: function get(id) {
        return function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
                var user;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USER_GET_START });
                                _context2.next = 4;
                                return _Users2.default.get(id);

                            case 4:
                                user = _context2.sent;

                                dispatch({ type: _constants.UsersActionTypes.USER_GET_SUCCESS, user: user });
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USER_GET_FAIL });

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[0, 8]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }();
    },

    create: function create(user) {
        return function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USER_CREATE_START });
                                _context3.next = 4;
                                return _Users2.default.create(user);

                            case 4:
                                dispatch({ type: _constants.UsersActionTypes.USER_CREATE_SUCCESS });
                                return _context3.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USER_CREATE_FAIL });
                                return _context3.abrupt('return', _promise2.default.reject(_context3.t0));

                            case 12:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined, [[0, 8]]);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }();
    },

    update: function update(id, userData) {
        return function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USER_UPDATE_START, userData: userData });
                                _context4.next = 4;
                                return _Users2.default.update(id, userData);

                            case 4:
                                dispatch({ type: _constants.UsersActionTypes.USER_UPDATE_SUCCESS });
                                return _context4.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context4.prev = 8;
                                _context4.t0 = _context4['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USER_UPDATE_FAIL });
                                return _context4.abrupt('return', _promise2.default.reject(_context4.t0));

                            case 12:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined, [[0, 8]]);
            }));

            return function (_x4) {
                return _ref5.apply(this, arguments);
            };
        }();
    },

    delete: function _delete(id) {
        return function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_START });
                                _context5.next = 4;
                                return _Users2.default.delete(id);

                            case 4:
                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_SUCCESS });
                                return _context5.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context5.prev = 8;
                                _context5.t0 = _context5['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_FAIL });
                                return _context5.abrupt('return', _promise2.default.reject(_context5.t0));

                            case 12:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined, [[0, 8]]);
            }));

            return function (_x5) {
                return _ref6.apply(this, arguments);
            };
        }();
    },

    deleteList: function deleteList(ids) {
        return function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;

                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_START });
                                _context6.next = 4;
                                return _Users2.default.deleteList(ids);

                            case 4:
                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_SUCCESS });
                                return _context6.abrupt('return', _promise2.default.resolve());

                            case 8:
                                _context6.prev = 8;
                                _context6.t0 = _context6['catch'](0);

                                dispatch({ type: _constants.UsersActionTypes.USERS_DELETE_FAIL });
                                return _context6.abrupt('return', _promise2.default.reject(_context6.t0));

                            case 12:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined, [[0, 8]]);
            }));

            return function (_x6) {
                return _ref7.apply(this, arguments);
            };
        }();
    }
};

exports.default = UsersActions;
module.exports = exports.default;