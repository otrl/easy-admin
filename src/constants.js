import keyMirror from 'keymirror';

export const Urls = {
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
    ACTION_LOG: "/action-log",
};

export const UrlsParentage = {
    "/roles-create": ["/roles"],
    "/roles/:id": ["/roles"],
    "/users-create": ["/users"],
    "/users/:id": ["/users"],
};

export const AccessTokenCookiePath = "access-token";
export const RefreshTokenCookiePath = "refresh-token";

export const SessionCookiePath = "uuid";

export const SessionDuration = 60 * 20; //In seconds

export const ConfigActions = keyMirror({
    SETUP: null,
});

export const UiActionTypes = keyMirror({
    SET_PATH_MATCH: null,
    TOGGLE_NAV: null,
    CLOSE_NAV: null,
    OPEN_NAV: null,
    LOADING_START: null,
    LOADING_END: null,
    LOADING_CLEAR_ALL: null
});

export const SessionActionTypes = keyMirror({
    SESSION_SET_EXPIRY: null
});

export const AuthActionTypes = keyMirror({
    AUTH_LOGIN_ATTEMPT: null,
    AUTH_LOGIN_SUCCESS: null,
    AUTH_LOGOUT: null,
    AUTH_USER_ACTION: null,
    AUTH_USER_UPDATED: null
});

export const RolesActionTypes = keyMirror({
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
    ROLE_UPDATE_FAIL: null,
});

export const PasswordResetActionTypes = keyMirror({
    PASSWORD_RESET_REQUEST_START: null,
    PASSWORD_RESET_REQUEST_SUCCESS: null,
    PASSWORD_RESET_REQUEST_FAIL: null,

    PASSWORD_RESET_START: null,
    PASSWORD_RESET_SUCCESS: null,
    PASSWORD_RESET_FAIL: null,
});

export const CardholdersActionTypes = keyMirror({
    CARDHOLDERS_GET_START: null,
    CARDHOLDERS_GET_SUCCESS: null,
    CARDHOLDERS_GET_FAIL: null,

    CARDHOLDER_GET_START: null,
    CARDHOLDER_GET_SUCCESS: null,
    CARDHOLDER_GET_FAIL: null,
});

export const RolesOptionsActionTypes = keyMirror({
    ROLES_OPTIONS_GET_START: null,
    ROLES_OPTIONS_GET_SUCCESS: null,
    ROLES_OPTIONS_GET_FAIL: null,
});

export const UsersOptionsActionTypes = keyMirror({
    USERS_OPTIONS_GET_START: null,
    USERS_OPTIONS_GET_SUCCESS: null,
    USERS_OPTIONS_GET_FAIL: null,
});

export const UsersActionTypes = keyMirror({
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
    USER_UPDATE_FAIL: null,
});

export const AccountActionTypes = keyMirror({
    ACCOUNT_GET_START: null,
    ACCOUNT_GET_SUCCESS: null,
    ACCOUNT_GET_FAIL: null,

    ACCOUNT_UPDATE_START: null,
    ACCOUNT_UPDATE_SUCCESS: null,
    ACCOUNT_UPDATE_FAIL: null,
});

export const AccountActionLogActionTypes = keyMirror({
    ACCOUNT_ACTION_LOG_GET_START: null,
    ACCOUNT_ACTION_LOG_GET_SUCCESS: null,
    ACCOUNT_ACTION_LOG_GET_FAIL: null,
});

export const ActionLogActionTypes = keyMirror({
    ACTION_LOG_GET_START: null,
    ACTION_LOG_GET_SUCCESS: null,
    ACTION_LOG_GET_FAIL: null,
});

export const ForceLogoutActionTypes = keyMirror({
    FORCE_LOGOUT_START: null,
    FORCE_LOGOUT_SUCCESS: null,
    FORCE_LOGOUT_FAIL: null,
});

export const CustomersActionTypes = keyMirror({
    CUSTOMERS_GET_START: null,
    CUSTOMERS_GET_SUCCESS: null,
    CUSTOMERS_GET_FAIL: null,
});

export const SmartcardActionTypes = keyMirror({
    SMARTCARD_GET_START: null,
    SMARTCARD_GET_SUCCESS: null,
    SMARTCARD_GET_FAIL: null,
});

export const TicketHistoryActionTypes = keyMirror({
    TICKET_HISTORY_GET_START: null,
    TICKET_HISTORY_GET_SUCCESS: null,
    TICKET_HISTORY_GET_FAIL: null,
});

export const JourneyHistoryActionTypes = keyMirror({
    JOURNEY_HISTORY_GET_START: null,
    JOURNEY_HISTORY_GET_SUCCESS: null,
    JOURNEY_HISTORY_GET_FAIL: null,
});

export const Permissions = {
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
    SMARTCARD_VIEW: "smartcard-view",
};

export const BulkActions = {
    DELETE: "delete",
};

export const ResourceType = {
    USER: 1,
    ROLE: 2,
};

export const ResourceAction = {
    CREATE: 1,
    UPDATE: 2,
    DELETE: 3,
    BATCH_DELETE: 4,
    LOGIN: 5,
    ACCOUNT_UPDATE: 6,
    PASSWORD_RESET_REQUEST: 7,
    PASSWORD_RESET: 8,
    FORCE_LOGOUT: 9,
};

export const SmartcardStatus = {
    REQUESTED: "Requested",
    FULFILLING: "Fulfilling",
    INACTIVE: "Inactive",
    REJECTED: "Rejected",
    ACCEPTED: "Accepted",
    ACKNOWLEDGED: "Acknowledged",
    WITHDRAWN: "Withdrawn",
    ACTIVE: "Active",
};
