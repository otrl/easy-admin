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

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function (_React$Component) {
    (0, _inherits3.default)(Users, _React$Component);

    function Users() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Users);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
            selectedRowKeys: [],
            page: 1
        }, _this.onSelectChange = function (selectedRowKeys) {
            _this.setState({ selectedRowKeys: selectedRowKeys });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Users.prototype.render = function render() {
        var _this2 = this;

        var dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }];

        var columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: function render(text, record) {
                return _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: 'users/' + record.key },
                    text
                );
            }
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: '',
            width: 20,
            render: function render(text, record) {
                return _react2.default.createElement(
                    _antd.Popconfirm,
                    { title: 'Are you sure delete this task?', placement: 'topRight', onConfirm: confirm, onCancel: cancel, okText: 'Yes', cancelText: 'No' },
                    _react2.default.createElement(
                        _antd.Button,
                        { size: 'small', type: 'danger' },
                        _react2.default.createElement(_antd.Icon, { type: 'delete' })
                    )
                );
            }
        }];

        var selectedRowKeys = this.state.selectedRowKeys;

        var rowSelection = {
            selectedRowKeys: selectedRowKeys,
            onChange: this.onSelectChange
        };

        var onShowSizeChange = function onShowSizeChange(current, pageSize) {
            console.log(current, pageSize);
        };

        var onChange = function onChange(page) {
            _this2.setState({
                page: page
            });
        };

        var confirm = function confirm(e) {
            console.log(e);
        };

        var cancel = function cancel(e) {
            console.log(e);
        };

        var _footer = _react2.default.createElement(
            _antd.Row,
            null,
            _react2.default.createElement(
                _antd.Col,
                { xs: 24, sm: 24, md: 9 },
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary' },
                    _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o' }),
                    'Add new'
                ),
                '\xA0\xA0',
                _react2.default.createElement(
                    _antd.Popconfirm,
                    { title: 'Are you sure delete this task?', onConfirm: confirm, onCancel: cancel, okText: 'Yes', cancelText: 'No' },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'danger' },
                        _react2.default.createElement(_antd.Icon, { type: 'delete' }),
                        'Delete selected'
                    )
                )
            ),
            _react2.default.createElement(
                _antd.Col,
                { xs: 24, sm: 24, md: 1 },
                '\xA0'
            ),
            _react2.default.createElement(
                _antd.Col,
                { xs: 24, sm: 24, md: 14, style: { textAlign: 'right' } },
                _react2.default.createElement(_antd.Pagination, { showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    current: this.state.page,
                    onChange: onChange,
                    total: 500 })
            )
        );

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'User management'
            ),
            _react2.default.createElement(
                _antd.Breadcrumb,
                { style: { margin: '16px 0' } },
                _react2.default.createElement(
                    _antd.Breadcrumb.Item,
                    null,
                    'Users'
                )
            ),
            _react2.default.createElement(_antd.Table, { dataSource: dataSource, columns: columns, bordered: true, rowSelection: rowSelection, pagination: false, footer: function footer() {
                    return _footer;
                } }),
            _react2.default.createElement('br', null)
        );
    };

    return Users;
}(_react2.default.Component);

exports.default = Users;
module.exports = exports['default'];