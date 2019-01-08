'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Api = require('../helpers/Api');

var _Api2 = _interopRequireDefault(_Api);

var _User = require('../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountService = function () {
    function AccountService() {
        (0, _classCallCheck3.default)(this, AccountService);
    }

    AccountService.get = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var apiClient, result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context.next = 3;
                            return apiClient.get('account');

                        case 3:
                            result = _context.sent;
                            return _context.abrupt('return', _User2.default.fromJSON(result.data));

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function get() {
            return _ref.apply(this, arguments);
        }

        return get;
    }();

    AccountService.update = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(user) {
            var apiClient, values;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            values = {
                                email: user.email,
                                firstName: user.first_name,
                                lastName: user.last_name
                            };


                            if (user.password) {
                                values.password = user.password;
                            }
                            _context2.next = 5;
                            return apiClient.put('account', values);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function update(_x) {
            return _ref2.apply(this, arguments);
        }

        return update;
    }();

    return AccountService;
}();

exports.default = AccountService;
module.exports = exports.default;