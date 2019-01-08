'use strict';

exports.__esModule = true;
exports.default = IsAuthorised;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _User = require('../records/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IsAuthorised(_ref) {
    var user = _ref.user,
        permission = _ref.permission,
        children = _ref.children;

    if (user.hasPermission(permission)) {
        return children;
    }

    return null;
}

IsAuthorised.propTypes = {
    user: _propTypes2.default.instanceOf(_User2.default).isRequired,
    permission: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node
};

IsAuthorised.defaultProps = {
    children: null
};
module.exports = exports.default;