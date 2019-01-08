'use strict';

exports.__esModule = true;
exports.default = TimelineItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _constants = require('../../constants');

var _LoggedAction = require('../../records/LoggedAction');

var _LoggedAction2 = _interopRequireDefault(_LoggedAction);

var _User = require('../../records/User');

var _User2 = _interopRequireDefault(_User);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimelineItem(_ref) {
    var loggedAction = _ref.loggedAction,
        user = _ref.user,
        dictionary = _ref.dictionary;

    var colour = void 0;
    switch (loggedAction.action) {
        case _constants.ResourceAction.DELETE:
        case _constants.ResourceAction.BATCH_DELETE:
        case _constants.ResourceAction.FORCE_LOGOUT:
            colour = "red";
            break;
        case _constants.ResourceAction.CREATE:
            colour = "green";
            break;
        default:
            colour = "blue";
    }

    var msg = 'ACCOUNT_LOGGED_ACTION_' + loggedAction.action;
    if (loggedAction.resource_type) {
        msg = msg + '_' + loggedAction.resource_type;
    }

    var dotIcon = void 0;
    switch (loggedAction.action) {
        case _constants.ResourceAction.DELETE:
        case _constants.ResourceAction.BATCH_DELETE:
            dotIcon = _react2.default.createElement(_antd.Icon, { type: 'delete', style: { fontSize: '16px' } });
            break;
        case _constants.ResourceAction.LOGIN:
            dotIcon = _react2.default.createElement(_antd.Icon, { type: 'unlock', style: { fontSize: '16px' } });
            break;
        default:
            dotIcon = undefined;
    }

    return _react2.default.createElement(
        _antd.Timeline.Item,
        { color: colour, dot: dotIcon },
        dictionary.getByKey(msg, {
            name: user.first_name + ' ' + user.last_name,
            date: loggedAction.created_at.format("h:mm DD/MM/YY"),
            id: loggedAction.resource_identifier
        })
    );
}

TimelineItem.propTypes = {
    loggedAction: _propTypes2.default.instanceOf(_LoggedAction2.default).isRequired,
    user: _propTypes2.default.instanceOf(_User2.default).isRequired,
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default)
};

TimelineItem.defaultProps = {
    dictionary: new _Dictionary2.default()
};
module.exports = exports.default;