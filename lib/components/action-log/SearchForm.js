'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('../../constants');

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

var _ActionLogSearch = require('../../records/ActionLogSearch');

var _ActionLogSearch2 = _interopRequireDefault(_ActionLogSearch);

var _UsersOptionsState = require('../../records/UsersOptionsState');

var _UsersOptionsState2 = _interopRequireDefault(_UsersOptionsState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function (_React$PureComponent) {
    (0, _inherits3.default)(SearchForm, _React$PureComponent);

    function SearchForm() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SearchForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this.props.onSubmit(values);
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    SearchForm.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            form = _props.form,
            loading = _props.loading,
            disabled = _props.disabled,
            usersOptionsState = _props.usersOptionsState,
            onUserSelectType = _props.onUserSelectType;


        return _react2.default.createElement(
            _antd.Form,
            { layout: 'inline', onSubmit: this.onSubmit },
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                form.getFieldDecorator("userId", {
                    rules: []
                })(_react2.default.createElement(
                    _antd.Select,
                    {
                        style: { minWidth: 200 },
                        allowClear: true,
                        showSearch: true,
                        placeholder: dictionary.getByKey("ACTION_LOG_SEARCH_FORM_USER_FIELD_PLACEHOLDER"),
                        defaultActiveFirstOption: false,
                        showArrow: false,
                        filterOption: false,
                        onSearch: onUserSelectType,
                        notFoundContent: null
                    },
                    usersOptionsState.users.map(function (user) {
                        return _react2.default.createElement(
                            _antd.Select.Option,
                            { value: user.id, key: user.id },
                            user.first_name,
                            ' ',
                            user.last_name
                        );
                    })
                ))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                form.getFieldDecorator("action", {
                    rules: []
                })(_react2.default.createElement(
                    _antd.Select,
                    {
                        style: { minWidth: 200 },
                        allowClear: true,
                        showSearch: true,
                        placeholder: dictionary.getByKey("ACTION_LOG_SEARCH_FORM_ACTION_TYPE_FIELD_PLACEHOLDER"),
                        defaultActiveFirstOption: false,
                        showArrow: false,
                        filterOption: false,
                        notFoundContent: null
                    },
                    _lodash2.default.valuesIn(_constants.ResourceAction).map(function (actionType) {
                        return _react2.default.createElement(
                            _antd.Select.Option,
                            { value: actionType, key: actionType },
                            dictionary.getByKey('ACTION_LOG_ACTION_TYPE_' + actionType)
                        );
                    })
                ))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                form.getFieldDecorator("resourceType", {
                    rules: []
                })(_react2.default.createElement(
                    _antd.Select,
                    {
                        style: { minWidth: 200 },
                        allowClear: true,
                        showSearch: true,
                        placeholder: dictionary.getByKey("ACTION_LOG_SEARCH_FORM_RESOURCE_TYPE_FIELD_PLACEHOLDER"),
                        defaultActiveFirstOption: false,
                        showArrow: false,
                        filterOption: false,
                        notFoundContent: null
                    },
                    _lodash2.default.valuesIn(_constants.ResourceType).map(function (resourceType) {
                        return _react2.default.createElement(
                            _antd.Select.Option,
                            { value: resourceType, key: resourceType },
                            dictionary.getByKey('ACTION_LOG_RESOURCE_TYPE_' + resourceType)
                        );
                    })
                ))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                form.getFieldDecorator("range", {
                    rules: []
                })(_react2.default.createElement(_antd.DatePicker.RangePicker, { allowClear: false, disabled: disabled }))
            ),
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary',
                        loading: loading,
                        disabled: disabled,
                        htmlType: 'submit',
                        icon: 'search' },
                    dictionary.getByKey("ACTION_LOG_SEARCH_FORM_SUBMIT")
                )
            )
        );
    };

    return SearchForm;
}(_react2.default.PureComponent);

SearchForm.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    onSubmit: _propTypes2.default.func.isRequired,
    usersOptionsState: _propTypes2.default.instanceOf(_UsersOptionsState2.default).isRequired,
    onUserSelectType: _propTypes2.default.func.isRequired,
    search: _propTypes2.default.instanceOf(_ActionLogSearch2.default).isRequired,
    loading: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool
};
SearchForm.defaultProps = {
    loading: false,
    disabled: false
};
exports.default = _antd.Form.create({
    mapPropsToFields: function mapPropsToFields(_ref) {
        var search = _ref.search;

        console.log(search);
        var fromDate = search.fromDate,
            toDate = search.toDate,
            userId = search.userId,
            action = search.action,
            resourceType = search.resourceType;
        // const values = {};
        //
        // if (fromDate || toDate) {
        //     values.range = AntForm.createFormField({
        //         value: [fromDate, toDate]
        //     });
        // }
        //
        // if (userId) {
        //     values.range = AntForm.createFormField({
        //         value: [fromDate, toDate]
        //     });
        // }

        return {
            range: _antd.Form.createFormField({
                value: [fromDate, toDate]
            }),
            userId: _antd.Form.createFormField({
                value: userId || undefined
            }),
            action: _antd.Form.createFormField({
                value: action || undefined
            }),
            resourceType: _antd.Form.createFormField({
                value: resourceType || undefined
            })
        };
    }
})(SearchForm);
module.exports = exports.default;