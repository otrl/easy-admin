'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _immutable = require('immutable');

var _intlMessageformat = require('intl-messageformat');

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    REC_TYPE: 'Dictionary',
    messages: new _immutable.Map({
        YES: 'Yes',
        NO: 'No',
        HEADER_GREET_USER: 'Hi, {name}',
        LOGIN_PAGE_TITLE: 'Login',
        LOGIN_FRAME_TITLE: 'Please login',
        LOGIN_EMAIL_REQUIRED: 'Email is required!',
        LOGIN_EMAIL_INVALID_FORMAT: 'Not valid email format!',
        LOGIN_EMAIL_PLACEHOLDER: 'Email',
        LOGIN_PASSWORD_REQUIRED: 'Password is required!',
        LOGIN_PASSWORD_PLACEHOLDER: 'Password',
        LOGIN_BUTTON: 'Login',
        LOGIN_PASSWORD_RESET_LINK_TEXT: 'Forgot your password?',
        ROLES_LISTING_TITLE: 'Roles',
        ROLES_LISTING_BREADCRUMB: 'Roles',
        ROLES_LISTING_CREATE_BUTTON: 'Create role',
        ROLES_LISTING_DELETE_MULTIPLE_BUTTON: 'Delete selected',
        ROLES_LISTING_DELETE_BUTTON: 'Delete this role',
        ROLES_LISTING_EDIT_BUTTON: 'View/Edit role',
        ROLE_CREATE_TITLE: 'Create new role',
        ROLE_CREATE_BREADCRUMB: 'Create new role',
        ROLE_FORM_NAME_FIELD_LABEL: 'Role name',
        ROLE_FORM_NAME_FIELD_REQUIRED: 'Name is required!',
        ROLE_FORM_DESCRIPTION_FIELD_LABEL: 'Role description',
        ROLE_FORM_DESCRIPTION_FIELD_REQUIRED: 'Description is required!',
        ROLE_FORM_PERMISSIONS_FIELD_LABEL: 'Permissions',
        ROLE_FORM_PERMISSIONS_FIELD_REQUIRED: 'You must add at least one permission from the list!',
        ROLE_FORM_SUBMIT: 'Save role',
        ROLE_CREATE_API_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        ROLE_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to create this role. Please try again later.',
        ROLE_FORM_NAME_FIELD_INVALID_FORMAT: 'Minimum characters must be 2, and maximum 255!',
        ROLE_FORM_DESCRIPTION_FIELD_INVALID_FORMAT: 'Minimum characters must be 2, and maximum 255!',
        ROLE_CREATE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        ROLE_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION: 'New role was created',
        ROLES_LISTING_TABLE_NAME_COL: 'Name',
        ROLES_LISTING_TABLE_DESCRIPTION_COL: 'Description',
        ROLES_LISTING_DELETE_SINGLE_CONFIRMATION: 'Are you sure you want to delete this role?',
        ROLES_LISTING_DELETE_MULTIPLE_CONFIRMATION: 'Are you sure you want to delete the selected roles?',
        ROLES_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        ROLES_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_DESCRIPTION: 'The role was deleted successfully',
        ROLES_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        ROLES_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to delete this role. Please try again later.',
        ROLES_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        ROLES_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_DESCRIPTION: 'The roles were deleted successfully.',
        ROLES_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        ROLES_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to delete the selected roles. Please try again later.',
        ROLE_UPDATE_TITLE: 'Update role',
        ROLE_UPDATE_BREADCRUMB: 'Update role',
        ROLE_UPDATE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        ROLE_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION: 'Successfully updated role',
        ROLE_UPDATE_API_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        ROLE_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION: 'We  were not able to update this role. Please try again later.',
        USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        USERS_LISTING_DELETE_SINGLE_SUCCESS_NOTIFICATION_DESCRIPTION: 'User was successfully deleted',
        USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        USERS_LISTING_DELETE_SINGLE_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to delete this user. Please try again later.',
        USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        USERS_LISTING_DELETE_MULTIPLE_SUCCESS_NOTIFICATION_DESCRIPTION: 'The user(s) were deleted successfully',
        USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        USERS_LISTING_DELETE_MULTIPLE_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to delete the selected user(s). Please try again later.',
        USERS_LISTING_TABLE_EMAIL_COL: 'Email',
        USERS_LISTING_TABLE_NAME_COL: 'Name',
        USERS_LISTING_TABLE_ROLE_COL: 'Role',
        USERS_LISTING_EDIT_BUTTON: 'Edit user',
        USERS_LISTING_DELETE_SINGLE_CONFIRMATION: 'Are you sure you want to delete this user?',
        USERS_LISTING_DELETE_BUTTON: 'Delete user',
        USERS_LISTING_TITLE: 'Users',
        USERS_LISTING_BREADCRUMB: 'Users',
        USERS_LISTING_CREATE_BUTTON: 'Create user',
        USERS_LISTING_DELETE_MULTIPLE_CONFIRMATION: 'Are you sure you want to delete the selected user(s)?',
        USERS_LISTING_DELETE_MULTIPLE_BUTTON: 'Delete selected',
        USER_CREATE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        USER_CREATE_SUCCESS_NOTIFICATION_DESCRIPTION: 'User was successfully created.',
        USER_CREATE_API_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        USER_CREATE_API_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to create this user. Please try again later.',
        USER_CREATE_TITLE: 'Create user',
        USER_CREATE_BREADCRUMB: 'Create user',
        USER_UPDATE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        USER_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION: 'User was successfully updated.',
        USER_UPDATE_API_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        USER_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to update this user. Please try again later.',
        USER_UPDATE_TITLE: 'Update user',
        USER_UPDATE_BREADCRUMB: 'Update user',
        USER_FORM_EMAIL_FIELD_LABEL: 'Email',
        USER_FORM_EMAIL_FIELD_REQUIRED: 'Email is required!',
        USER_FORM_EMAIL_FIELD_INVALID_FORMAT: 'Not a valid email format!',
        USER_FORM_FIRST_NAME_FIELD_LABEL: 'First name',
        USER_FORM_FIRST_NAME_FIELD_REQUIRED: 'First name is required!',
        USER_FORM_FIRST_NAME_FIELD_INVALID_FORMAT: 'First name must be from 2 to 255 characters!',
        USER_FORM_LAST_NAME_FIELD_LABEL: 'Last name',
        USER_FORM_LAST_NAME_FIELD_REQUIRED: 'Last name is required!',
        USER_FORM_LAST_NAME_FIELD_INVALID_FORMAT: 'Last name must be from 2 to 255 characters!',
        USER_FORM_ROLE_FIELD_LABEL: 'Role',
        USER_FORM_ROLE_FIELD_REQUIRED: 'Please select a role!',
        USER_FORM_SUBMIT: 'Save user',
        NAVIGATION_USERS: 'System users',
        NAVIGATION_ROLES: 'User roles',
        NAVIGATION_ACCOUNT: 'My account',
        NAVIGATION_LOGOUT: 'Logout',
        NAVIGATION_ACTION_LOG: 'Action log',
        PASSWORD_RESET_REQUEST_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        PASSWORD_RESET_REQUEST_SUCCESS_NOTIFICATION_DESCRIPTION: 'An email has been dispatched to your address with details on how to reset your password.',
        PASSWORD_RESET_REQUEST_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        PASSWORD_RESET_REQUEST_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to initiate the password reset process. Please try again later.',
        PASSWORD_RESET_REQUEST_PAGE_TITLE: 'Request password reset',
        PASSWORD_RESET_REQUEST_FRAME_TITLE: 'Request password reset',
        PASSWORD_RESET_REQUEST_EMAIL_REQUIRED: 'You must fill in your email!',
        PASSWORD_RESET_REQUEST_EMAIL_INVALID_FORMAT: 'Not a valid email format!',
        PASSWORD_RESET_REQUEST_EMAIL_PLACEHOLDER: 'Email',
        PASSWORD_RESET_REQUEST_BUTTON: 'Request pasword reset',
        PASSWORD_RESET_REQUEST_BACK_LINK: 'Back to Login',
        PASSWORD_RESET_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        PASSWORD_RESET_SUCCESS_NOTIFICATION_DESCRIPTION: 'Your password has been reset successfully. Please try to login.',
        PASSWORD_RESET_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        PASSWORD_RESET_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to reset your password. It is possible that your password reset link has expired. Please try requesting a reset again.',
        PASSWORD_RESET_PAGE_TITLE: 'Reset password',
        PASSWORD_RESET_FRAME_TITLE: 'Reset password',
        PASSWORD_RESET_PASSWORD_REQUIRED: 'Password required',
        PASSWORD_RESET_PASSWORD_INVALID_FORMAT: 'Minimum 8 characters and maximum 100!',
        PASSWORD_RESET_PASSWORD_PLACEHOLDER: 'Password',
        PASSWORD_RESET_PASSWORD_CONFIRMATION_REQUIRED: 'Password confirmation required!',
        PASSWORD_RESET_PASSWORD_CONFIRMATION_MISMATCH: 'Passwords don\'t match!',
        PASSWORD_RESET_PASSWORD_CONFIRMATION_PLACEHOLDER: 'Password confirmation',
        PASSWORD_RESET_BUTTON: 'Reset password',
        PASSWORD_RESET_BACK_LINK: 'Back to login',
        ACCOUNT_FORM_EMAIL_FIELD_LABEL: 'Email',
        ACCOUNT_FORM_EMAIL_FIELD_REQUIRED: 'Email is required!',
        ACCOUNT_FORM_EMAIL_FIELD_INVALID_FORMAT: 'Invalid email format!',
        ACCOUNT_FORM_FIRST_NAME_FIELD_LABEL: 'First name',
        ACCOUNT_FORM_FIRST_NAME_FIELD_REQUIRED: 'First name is required!',
        ACCOUNT_FORM_FIRST_NAME_FIELD_INVALID_FORMAT: 'First name must be min 3 characters and max 255!',
        ACCOUNT_FORM_LAST_NAME_FIELD_LABEL: 'Last name',
        ACCOUNT_FORM_LAST_NAME_FIELD_REQUIRED: 'Last name is required!',
        ACCOUNT_FORM_LAST_NAME_FIELD_INVALID_FORMAT: 'Last name must be min 3 characters and max 255!',
        ACCOUNT_FORM_PASSWORD_FIELD_LABEL: 'New password',
        ACCOUNT_FORM_PASSWORD_INVALID_FORMAT: 'Minimum 8 characters and maximum 100!',
        ACCOUNT_FORM_PASSWORD_CONFIRMATION_FIELD_LABEL: 'Confirm password',
        ACCOUNT_FORM_PASSWORD_CONFIRMATION_MISMATCH: 'Passwords don\'t match!',
        ACCOUNT_FORM_SUBMIT: 'Save details',
        ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        ACCOUNT_UPDATE_SUCCESS_NOTIFICATION_DESCRIPTION: 'Account details updated successfully.',
        ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        ACCOUNT_UPDATE_API_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to save your account details. Please try again later.',
        ACCOUNT_TITLE: 'Account details',
        ACCOUNT_BREADCRUMB: 'Account details',
        ACCOUNT_LOGGED_ACTION_1_1: 'You created user "{id}" {date}',
        ACCOUNT_LOGGED_ACTION_2_1: 'You updated user with ID:{id} {date}',
        ACCOUNT_LOGGED_ACTION_3_1: 'You deleted user with ID:{id} {date}',
        ACCOUNT_LOGGED_ACTION_4_1: 'You deleted users with IDs:{id} {date}',
        ACCOUNT_LOGGED_ACTION_1_2: 'You created the role "{id}" {date}',
        ACCOUNT_LOGGED_ACTION_2_2: 'You updated role with ID:{id} {date}',
        ACCOUNT_LOGGED_ACTION_3_2: 'You deleted role with ID:{id} {date}',
        ACCOUNT_LOGGED_ACTION_4_2: 'You deleted roles with IDs:{id} {date}',
        ACCOUNT_LOGGED_ACTION_5: 'You logged in {date}',
        ACCOUNT_LOGGED_ACTION_6: 'You updated your account {date}',
        ACCOUNT_LOGGED_ACTION_7: 'You requested a password reset {date}',
        ACCOUNT_LOGGED_ACTION_8: 'You reset your password {date}',
        ACCOUNT_LOGGED_ACTION_9_1: 'You forcefully logged out users with IDs:{id} {date}',
        ACCOUNT_LOGGED_ACTION_10: 'You logged out {date}',

        LOGGED_ACTION_1_1: '{name} created user "{id}" {date}',
        LOGGED_ACTION_2_1: '{name} updated user with ID:{id} {date}',
        LOGGED_ACTION_3_1: '{name} deleted user with ID:{id} {date}',
        LOGGED_ACTION_4_1: '{name} deleted users with IDs:{id} {date}',
        LOGGED_ACTION_1_2: '{name} created the role "{id}" {date}',
        LOGGED_ACTION_2_2: '{name} updated role with ID:{id} {date}',
        LOGGED_ACTION_3_2: '{name} deleted role with ID:{id} {date}',
        LOGGED_ACTION_4_2: '{name} deleted roles with IDs:{id} {date}',
        LOGGED_ACTION_5: '{name} logged in {date}',
        LOGGED_ACTION_6: '{name} updated his account {date}',
        LOGGED_ACTION_7: '{name} requested a password reset {date}',
        LOGGED_ACTION_8: '{name} reset their password {date}',
        LOGGED_ACTION_9_1: '{name} forcefully logged out users with IDs:{id} {date}',
        LOGGED_ACTION_10: '{name} logged out {date}',
        ACCOUNT_TIMELINE_FORM_DATE_RANGE_FIELD_REQUIRED: 'You need to provide a date range!',
        ACCOUNT_TIMELINE_FORM_SUBMIT: 'Search',
        ACTION_LOG_TITLE: 'Action log',
        ACTION_LOG_BREADCRUMB: 'Action log',
        ACTION_LOG_ACTION_TYPE_1: 'Creates',
        ACTION_LOG_ACTION_TYPE_2: 'Updates',
        ACTION_LOG_ACTION_TYPE_3: 'Deletes',
        ACTION_LOG_ACTION_TYPE_4: 'Batch deletes',
        ACTION_LOG_ACTION_TYPE_5: 'Logins',
        ACTION_LOG_ACTION_TYPE_6: 'Account updates',
        ACTION_LOG_ACTION_TYPE_7: 'Password reset requests',
        ACTION_LOG_ACTION_TYPE_8: 'Password resets',
        ACTION_LOG_ACTION_TYPE_9: 'Force logouts',
        ACTION_LOG_ACTION_TYPE_10: 'Logouts',
        ACTION_LOG_SEARCH_FORM_USER_FIELD_PLACEHOLDER: 'Pick user',
        ACTION_LOG_SEARCH_FORM_ACTION_TYPE_FIELD_PLACEHOLDER: 'Pick action type',
        ACTION_LOG_SEARCH_FORM_SUBMIT: 'Search',
        ACTION_LOG_SEARCH_FORM_RESOURCE_TYPE_FIELD_PLACEHOLDER: 'Resource type',
        ACTION_LOG_RESOURCE_TYPE_1: 'Users',
        ACTION_LOG_RESOURCE_TYPE_2: 'Roles',
        USER_UPDATE_LOGOUT_BUTTON_LOGOUT: 'Log this user out',
        USER_UPDATE_LOGOUT_USER_CONFIRMATION_TITLE: 'Are you certain you want to log this user out?',
        USER_UPDATE_LOGOUT_BUTTON_LOGGED_IN: 'User is logged in',
        USER_LOGOUT_SUCCESS_NOTIFICATION_TITLE: 'Success!',
        USER_LOGOUT_SUCCESS_NOTIFICATION_DESCRIPTION: 'User was successfully logged out',
        USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_TITLE: 'There was a problem!',
        USER_UPDATE_LOGOUT_ERROR_NOTIFICATION_DESCRIPTION: 'We were not able to log this user out. Please try again later.',
        AUTH_ERROR_INVALID_CREDENTIALS: 'We couldn\'t find an account matching these credentials!',
        AUTH_ERROR_GENERIC: 'We couldn\'t log you in at this time. Please try again later!',
        FOOTER_TEXT: 'Powered by <a href="http://www.ontrackretail.co.uk" target="_blank">OnTrack retail</a>',
        BOO: 'Create'
    })
};

var Dictionary = function (_record) {
    (0, _inherits3.default)(Dictionary, _record);

    function Dictionary() {
        (0, _classCallCheck3.default)(this, Dictionary);
        return (0, _possibleConstructorReturn3.default)(this, _record.apply(this, arguments));
    }

    Dictionary.prototype.getByKey = function getByKey(key) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (this.messages.get(key)) {
            var msg = new _intlMessageformat2.default(this.messages.get(key));
            return msg.format(data);
        }

        return key;
    };

    Dictionary.prototype.overrideMessages = function overrideMessages(overrides) {
        return this.set('messages', this.messages.merge(overrides));
    };

    return Dictionary;
}((0, _immutable.Record)(defaults));

exports.default = Dictionary;
module.exports = exports.default;