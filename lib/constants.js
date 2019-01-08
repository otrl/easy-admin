"use strict";

exports.__esModule = true;
exports.SmartcardStatus = exports.ResourceAction = exports.ResourceType = exports.BulkActions = exports.Permissions = exports.JourneyHistoryActionTypes = exports.TicketHistoryActionTypes = exports.SmartcardActionTypes = exports.CustomersActionTypes = exports.ForceLogoutActionTypes = exports.ActionLogActionTypes = exports.AccountActionLogActionTypes = exports.AccountActionTypes = exports.UsersActionTypes = exports.UsersOptionsActionTypes = exports.RolesOptionsActionTypes = exports.CardholdersActionTypes = exports.PasswordResetActionTypes = exports.RolesActionTypes = exports.AuthActionTypes = exports.SessionActionTypes = exports.UiActionTypes = exports.ConfigActions = exports.SessionDuration = exports.SessionCookiePath = exports.RefreshTokenCookiePath = exports.AccessTokenCookiePath = exports.UrlsParentage = exports.Urls = undefined;

var _keymirror = require("keymirror");

var _keymirror2 = _interopRequireDefault(_keymirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Urls = exports.Urls = {
    HOME: "/",
    LOGIN: "/login",
    LOGOUT: "/logout",
    REQUEST_PASSWORD_RESET: "/request-password-reset",
    RESET_PASSWORD: "/reset-password/:token",
    ROLES: "/roles",
    ROLES_CREATE: "/roles-create",
    ROLE_VIEW: "/roles/:id",
    USERS: "/users",
    USERS_CREATE: "/users-create",
    USER_VIEW: "/users/:id",
    TECHNICAL_DIFFICULTIES: "/technical-difficulties",
    CARDHOLDERS: "/cardholders",
    CUSTOMERS: "/customers",
    SMARTCARD: "/smartcard/:isrn",
    ACCOUNT: "/account",
    ACTION_LOG: "/action-log"
};

var UrlsParentage = exports.UrlsParentage = {
    "/roles-create": ["/roles"],
    "/roles/:id": ["/roles"],
    "/users-create": ["/users"],
    "/users/:id": ["/users"]
};

var AccessTokenCookiePath = exports.AccessTokenCookiePath = "access-token";
var RefreshTokenCookiePath = exports.RefreshTokenCookiePath = "refresh-token";

var SessionCookiePath = exports.SessionCookiePath = "uuid";

var SessionDuration = exports.SessionDuration = 60 * 20; //In seconds

var ConfigActions = exports.ConfigActions = (0, _keymirror2.default)({
    SETUP: null
});

var UiActionTypes = exports.UiActionTypes = (0, _keymirror2.default)({
    SET_PATH_MATCH: null,
    TOGGLE_NAV: null,
    LOADING_START: null,
    LOADING_END: null,
    LOADING_CLEAR_ALL: null
});

var SessionActionTypes = exports.SessionActionTypes = (0, _keymirror2.default)({
    SESSION_SET_EXPIRY: null
});

var AuthActionTypes = exports.AuthActionTypes = (0, _keymirror2.default)({
    AUTH_LOGIN_ATTEMPT: null,
    AUTH_LOGIN_SUCCESS: null,
    AUTH_LOGOUT: null,
    AUTH_USER_ACTION: null,
    AUTH_USER_UPDATED: null
});

var RolesActionTypes = exports.RolesActionTypes = (0, _keymirror2.default)({
    ROLES_GET_START: null,
    ROLES_GET_SUCCESS: null,
    ROLES_GET_FAIL: null,

    ROLES_DELETE_START: null,
    ROLES_DELETE_SUCCESS: null,
    ROLES_DELETE_FAIL: null,

    ROLE_CREATE_START: null,
    ROLE_CREATE_SUCCESS: null,
    ROLE_CREATE_FAIL: null,

    ROLE_GET_START: null,
    ROLE_GET_SUCCESS: null,
    ROLE_GET_FAIL: null,

    ROLE_UPDATE_START: null,
    ROLE_UPDATE_SUCCESS: null,
    ROLE_UPDATE_FAIL: null
});

var PasswordResetActionTypes = exports.PasswordResetActionTypes = (0, _keymirror2.default)({
    PASSWORD_RESET_REQUEST_START: null,
    PASSWORD_RESET_REQUEST_SUCCESS: null,
    PASSWORD_RESET_REQUEST_FAIL: null,

    PASSWORD_RESET_START: null,
    PASSWORD_RESET_SUCCESS: null,
    PASSWORD_RESET_FAIL: null
});

var CardholdersActionTypes = exports.CardholdersActionTypes = (0, _keymirror2.default)({
    CARDHOLDERS_GET_START: null,
    CARDHOLDERS_GET_SUCCESS: null,
    CARDHOLDERS_GET_FAIL: null,

    CARDHOLDER_GET_START: null,
    CARDHOLDER_GET_SUCCESS: null,
    CARDHOLDER_GET_FAIL: null
});

var RolesOptionsActionTypes = exports.RolesOptionsActionTypes = (0, _keymirror2.default)({
    ROLES_OPTIONS_GET_START: null,
    ROLES_OPTIONS_GET_SUCCESS: null,
    ROLES_OPTIONS_GET_FAIL: null
});

var UsersOptionsActionTypes = exports.UsersOptionsActionTypes = (0, _keymirror2.default)({
    USERS_OPTIONS_GET_START: null,
    USERS_OPTIONS_GET_SUCCESS: null,
    USERS_OPTIONS_GET_FAIL: null
});

var UsersActionTypes = exports.UsersActionTypes = (0, _keymirror2.default)({
    USERS_GET_START: null,
    USERS_GET_SUCCESS: null,
    USERS_GET_FAIL: null,

    USERS_DELETE_START: null,
    USERS_DELETE_SUCCESS: null,
    USERS_DELETE_FAIL: null,

    USER_CREATE_START: null,
    USER_CREATE_SUCCESS: null,
    USER_CREATE_FAIL: null,

    USER_GET_START: null,
    USER_GET_SUCCESS: null,
    USER_GET_FAIL: null,

    USER_UPDATE_START: null,
    USER_UPDATE_SUCCESS: null,
    USER_UPDATE_FAIL: null
});

var AccountActionTypes = exports.AccountActionTypes = (0, _keymirror2.default)({
    ACCOUNT_GET_START: null,
    ACCOUNT_GET_SUCCESS: null,
    ACCOUNT_GET_FAIL: null,

    ACCOUNT_UPDATE_START: null,
    ACCOUNT_UPDATE_SUCCESS: null,
    ACCOUNT_UPDATE_FAIL: null
});

var AccountActionLogActionTypes = exports.AccountActionLogActionTypes = (0, _keymirror2.default)({
    ACCOUNT_ACTION_LOG_GET_START: null,
    ACCOUNT_ACTION_LOG_GET_SUCCESS: null,
    ACCOUNT_ACTION_LOG_GET_FAIL: null
});

var ActionLogActionTypes = exports.ActionLogActionTypes = (0, _keymirror2.default)({
    ACTION_LOG_GET_START: null,
    ACTION_LOG_GET_SUCCESS: null,
    ACTION_LOG_GET_FAIL: null
});

var ForceLogoutActionTypes = exports.ForceLogoutActionTypes = (0, _keymirror2.default)({
    FORCE_LOGOUT_START: null,
    FORCE_LOGOUT_SUCCESS: null,
    FORCE_LOGOUT_FAIL: null
});

var CustomersActionTypes = exports.CustomersActionTypes = (0, _keymirror2.default)({
    CUSTOMERS_GET_START: null,
    CUSTOMERS_GET_SUCCESS: null,
    CUSTOMERS_GET_FAIL: null
});

var SmartcardActionTypes = exports.SmartcardActionTypes = (0, _keymirror2.default)({
    SMARTCARD_GET_START: null,
    SMARTCARD_GET_SUCCESS: null,
    SMARTCARD_GET_FAIL: null
});

var TicketHistoryActionTypes = exports.TicketHistoryActionTypes = (0, _keymirror2.default)({
    TICKET_HISTORY_GET_START: null,
    TICKET_HISTORY_GET_SUCCESS: null,
    TICKET_HISTORY_GET_FAIL: null
});

var JourneyHistoryActionTypes = exports.JourneyHistoryActionTypes = (0, _keymirror2.default)({
    JOURNEY_HISTORY_GET_START: null,
    JOURNEY_HISTORY_GET_SUCCESS: null,
    JOURNEY_HISTORY_GET_FAIL: null
});

var Permissions = exports.Permissions = {
    ALL: "all",
    USERS_VIEW: "users-view",
    USERS_DELETE: "users-delete",
    USERS_CREATE: "users-create",
    USER_VIEW: "user-view",
    USER_UPDATE: "user-update",
    USER_DELETE: "user-delete",
    ACCOUNT_VIEW: "account-view",
    ACCOUNT_UPDATE: "account-update",
    ROLES_VIEW: "roles-view",
    ROLES_DELETE: "roles-delete",
    ROLES_CREATE: "roles-create",
    ROLE_VIEW: "role-view",
    ROLE_UPDATE: "role-update",
    ROLE_DELETE: "role-delete",
    CARDHOLDERS_VIEW: "cardholders-view",
    CARDHOLDER_VIEW: "cardholder-view",
    ACTION_LOG_VIEW: "action-log-view",
    FORCE_LOGOUT: "force-logout",
    CUSTOMERS_VIEW: "customers-view",
    SMARTCARD_VIEW: "smartcard-view"
};

var BulkActions = exports.BulkActions = {
    DELETE: "delete"
};

var ResourceType = exports.ResourceType = {
    USER: 1,
    ROLE: 2
};

var ResourceAction = exports.ResourceAction = {
    CREATE: 1,
    UPDATE: 2,
    DELETE: 3,
    BATCH_DELETE: 4,
    LOGIN: 5,
    ACCOUNT_UPDATE: 6,
    PASSWORD_RESET_REQUEST: 7,
    PASSWORD_RESET: 8,
    FORCE_LOGOUT: 9
};

var SmartcardStatus = exports.SmartcardStatus = {
    REQUESTED: "Requested",
    FULFILLING: "Fulfilling",
    INACTIVE: "Inactive",
    REJECTED: "Rejected",
    ACCEPTED: "Accepted",
    ACKNOWLEDGED: "Acknowledged",
    WITHDRAWN: "Withdrawn",
    ACTIVE: "Active"
};