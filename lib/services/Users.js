'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _Api = require('../helpers/Api');

var _Api2 = _interopRequireDefault(_Api);

var _constants = require('../constants');

var _mappers = require('../helpers/mappers');

var _User = require('../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersService = function () {
    function UsersService() {
        (0, _classCallCheck3.default)(this, UsersService);
    }

    UsersService.getList = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page, limit) {
            var apiClient, query, result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            query = _qs2.default.stringify({ page: page, limit: limit });
                            _context.next = 4;
                            return apiClient.get('users?' + query);

                        case 4:
                            result = _context.sent;
                            return _context.abrupt('return', {
                                users: (0, _mappers.resolveAll)(result.data.data).as(_User2.default),
                                count: result.data.count
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getList(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return getList;
    }();

    UsersService.get = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
            var apiClient, result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context2.next = 3;
                            return apiClient.get('users/' + id);

                        case 3:
                            result = _context2.sent;
                            return _context2.abrupt('return', _User2.default.fromJSON(result.data.data));

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function get(_x3) {
            return _ref2.apply(this, arguments);
        }

        return get;
    }();

    UsersService.create = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(user) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context3.next = 3;
                            return apiClient.post('users', {
                                firstName: user.first_name,
                                lastName: user.last_name,
                                email: user.email,
                                roleId: user.role_id
                            });

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function create(_x4) {
            return _ref3.apply(this, arguments);
        }

        return create;
    }();

    UsersService.update = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, user) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context4.next = 3;
                            return apiClient.put('users/' + id, {
                                firstName: user.first_name,
                                lastName: user.last_name,
                                email: user.email,
                                roleId: user.role_id
                            });

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function update(_x5, _x6) {
            return _ref4.apply(this, arguments);
        }

        return update;
    }();

    UsersService.delete = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context5.next = 3;
                            return apiClient.delete('users/' + id);

                        case 3:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function _delete(_x7) {
            return _ref5.apply(this, arguments);
        }

        return _delete;
    }();

    UsersService.deleteList = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ids) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context6.next = 3;
                            return apiClient.patch('users', { ids: ids, action: _constants.BulkActions.DELETE });

                        case 3:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function deleteList(_x8) {
            return _ref6.apply(this, arguments);
        }

        return deleteList;
    }();

    return UsersService;
}();

exports.default = UsersService;
module.exports = exports.default;