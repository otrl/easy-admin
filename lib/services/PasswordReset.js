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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordResetService = function () {
    function PasswordResetService() {
        (0, _classCallCheck3.default)(this, PasswordResetService);
    }

    PasswordResetService.requestPasswordReset = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context.next = 3;
                            return apiClient.post('request-reset-password', { email: email });

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function requestPasswordReset(_x) {
            return _ref.apply(this, arguments);
        }

        return requestPasswordReset;
    }();

    PasswordResetService.resetPassword = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(password, token) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context2.next = 3;
                            return apiClient.post('reset-password', { password: password, token: token });

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function resetPassword(_x2, _x3) {
            return _ref2.apply(this, arguments);
        }

        return resetPassword;
    }();

    return PasswordResetService;
}();

exports.default = PasswordResetService;
module.exports = exports.default;