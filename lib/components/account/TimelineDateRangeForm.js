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

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _Dictionary = require('../../records/Dictionary');

var _Dictionary2 = _interopRequireDefault(_Dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimelineDateRangeForm = function (_React$PureComponent) {
    (0, _inherits3.default)(TimelineDateRangeForm, _React$PureComponent);

    function TimelineDateRangeForm() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TimelineDateRangeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    _this.props.onSubmit({
                        range: values.range
                    });
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    TimelineDateRangeForm.prototype.render = function render() {
        var _props = this.props,
            dictionary = _props.dictionary,
            form = _props.form,
            loading = _props.loading,
            disabled = _props.disabled;


        return _react2.default.createElement(
            _antd.Form,
            { layout: 'inline', onSubmit: this.onSubmit },
            _react2.default.createElement(
                _antd.Form.Item,
                null,
                form.getFieldDecorator("range")(_react2.default.createElement(_antd.DatePicker.RangePicker, { disabled: disabled }))
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
                    dictionary.getByKey("ACCOUNT_TIMELINE_FORM_SUBMIT")
                )
            )
        );
    };

    return TimelineDateRangeForm;
}(_react2.default.PureComponent);

TimelineDateRangeForm.propTypes = {
    dictionary: _propTypes2.default.instanceOf(_Dictionary2.default).isRequired,
    onSubmit: _propTypes2.default.func.isRequired,
    loading: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    fromDate: _propTypes2.default.instanceOf(_momentTimezone2.default),
    toDate: _propTypes2.default.instanceOf(_momentTimezone2.default)
};
TimelineDateRangeForm.defaultProps = {
    loading: false,
    disabled: false,
    fromDate: null,
    toDate: null
};
exports.default = _antd.Form.create({
    mapPropsToFields: function mapPropsToFields(_ref) {
        var fromDate = _ref.fromDate,
            toDate = _ref.toDate;

        return {
            range: _antd.Form.createFormField({
                value: [fromDate, toDate]
            })
        };
    }
})(TimelineDateRangeForm);
module.exports = exports.default;