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

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForceLogout = function () {
    function ForceLogout() {
        (0, _classCallCheck3.default)(this, ForceLogout);
    }

    ForceLogout.logout = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ids) {
            var apiClient;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            apiClient = new _Api2.default();
                            _context.next = 3;
                            return apiClient.post('force-logout', { ids: ids });

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function logout(_x) {
            return _ref.apply(this, arguments);
        }

        return logout;
    }();

    return ForceLogout;
}();

exports.default = ForceLogout;
module.exports = exports.default;