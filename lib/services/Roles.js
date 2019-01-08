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

var _Role = require('../records/Role');

var _Role2 = _interopRequireDefault(_Role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RolesService = function () {
    function RolesService() {
        (0, _classCallCheck3.default)(this, RolesService);
    }

    RolesService.getList = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page, limit) {
            var apiClient, query, result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            query = _qs2.default.stringify({ page: page, limit: limit });
                            _context.next = 4;
                            return apiClient.get('roles?' + query);

                        case 4:
                            result = _context.sent;
                            return _context.abrupt('return', {
                                roles: (0, _mappers.resolveAll)(result.data.data).as(_Role2.default),
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

    RolesService.get = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
            var apiClient, result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context2.next = 3;
                            return apiClient.get('roles/' + id);

                        case 3:
                            result = _context2.sent;
                            return _context2.abrupt('return', _Role2.default.fromJSON(result.data.data));

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

    RolesService.create = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(role) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context3.next = 3;
                            return apiClient.post('roles', {
                                name: role.name,
                                description: role.description,
                                permissions: role.permissions
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

    RolesService.update = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id, roleData) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context4.next = 3;
                            return apiClient.put('roles/' + id, {
                                name: roleData.name,
                                description: roleData.description,
                                permissions: roleData.permissions
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

    RolesService.delete = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context5.next = 3;
                            return apiClient.delete('roles/' + id);

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

    RolesService.deleteList = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ids) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context6.next = 3;
                            return apiClient.patch('roles', { ids: ids, action: _constants.BulkActions.DELETE });

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

    return RolesService;
}();

exports.default = RolesService;
module.exports = exports.default;