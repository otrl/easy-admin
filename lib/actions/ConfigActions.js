'use strict';

exports.__esModule = true;

var _constants = require('../constants');

var ConfigActions = {
    setConfig: function setConfig(config) {
        return function (dispatch) {
            dispatch({ type: _constants.ConfigActions.SETUP, config: config });
        };
    }
};

exports.default = ConfigActions;
module.exports = exports.default;