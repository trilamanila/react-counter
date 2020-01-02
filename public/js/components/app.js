webpackJsonp([0],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(88);

var _Header2 = _interopRequireDefault(_Header);

var _AllBills = __webpack_require__(86);

var _AllBills2 = _interopRequireDefault(_AllBills);

var _FloatingMenu = __webpack_require__(87);

var _FloatingMenu2 = _interopRequireDefault(_FloatingMenu);

var _AddBill = __webpack_require__(85);

var _AddBill2 = _interopRequireDefault(_AddBill);

var _immutabilityHelper = __webpack_require__(104);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BillsApp = function (_Component) {
    _inherits(BillsApp, _Component);

    function BillsApp() {
        _classCallCheck(this, BillsApp);

        var _this = _possibleConstructorReturn(this, (BillsApp.__proto__ || Object.getPrototypeOf(BillsApp)).call(this));

        _this.clickedAddBillBtn = function () {
            _this.setState({
                addBillOpen: !_this.state.addBillOpen
            });
        };

        _this.saveBill = function (bill) {
            var newBills = (0, _immutabilityHelper2.default)(_this.state.allBills, {
                $push: [bill]
            });
            _this.setState({
                allBills: newBills,
                addBillOpen: !_this.state.addBillOpen
            }, function () {
                console.log(_this.state);
            });
        };

        _this.state = {
            addBillOpen: false,
            allBills: []
        };
        return _this;
    }

    _createClass(BillsApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'BillsApp' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(_AllBills2.default, { allBills: this.state.allBills }),
                _react2.default.createElement(_AddBill2.default, {
                    addBillOpen: this.state.addBillOpen,
                    saveBill: this.saveBill
                }),
                _react2.default.createElement('div', { className: 'content-background' }),
                _react2.default.createElement(_FloatingMenu2.default, { clickedAddBillBtn: this.clickedAddBillBtn })
            );
        }
    }]);

    return BillsApp;
}(_react.Component);

exports.default = BillsApp;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(83);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BillsApp = __webpack_require__(82);

var _BillsApp2 = _interopRequireDefault(_BillsApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Counter from './components/Counter/Counter.js'
// import Immutable from './components/Immutable/Immutable.js'


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_BillsApp2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBills = function (_Component) {
    _inherits(AllBills, _Component);

    function AllBills() {
        _classCallCheck(this, AllBills);

        var _this = _possibleConstructorReturn(this, (AllBills.__proto__ || Object.getPrototypeOf(AllBills)).call(this));

        _this.inputChange = function () {
            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            _this.setState(_defineProperty({}, name, value));
        };

        _this.handleSubmit = function () {
            event.preventDefault();
            _this.setState({
                business_name: '',
                price: 0
            });
            _this.props.saveBill(_this.state);
            console.log(_this.state);
        };

        _this.state = {
            business_name: '',
            price: 0
        };
        return _this;
    }

    _createClass(AllBills, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                {
                    id: 'AddBill',
                    className: '' + (this.props.addBillOpen == true ? 'active' : '')
                },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Add Bill'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'business_name' },
                                'Business Name'
                            ),
                            _react2.default.createElement('input', {
                                type: 'text',
                                id: 'business_name', name: 'business_name',
                                onChange: this.inputChange,
                                value: this.state.business_name
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'price' },
                                'Price'
                            ),
                            _react2.default.createElement('input', {
                                type: 'text',
                                id: 'price',
                                name: 'price',
                                onChange: this.inputChange,
                                value: this.state.price
                            })
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'submit' },
                            'Save'
                        )
                    )
                )
            );
        }
    }]);

    return AllBills;
}(_react.Component);

exports.default = AllBills;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBills = function (_Component) {
    _inherits(AllBills, _Component);

    function AllBills() {
        _classCallCheck(this, AllBills);

        var _this = _possibleConstructorReturn(this, (AllBills.__proto__ || Object.getPrototypeOf(AllBills)).call(this));

        _this.showAllBills = function () {
            var bills = _this.props.allBills;
            if (bills.length > 0) {
                return bills.map(function (bill, index) {
                    return _react2.default.createElement(
                        "li",
                        { className: "bill", key: index },
                        _react2.default.createElement(
                            "div",
                            { className: "company" },
                            _react2.default.createElement(
                                "div",
                                { className: "logo" },
                                _react2.default.createElement("img", { src: "https://cdn3.iconfinder.com/data/icons/industrial-and-construction-1-3/68/44-512.png" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "title" },
                                bill.business_name
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "price" },
                            "-$",
                            bill.price
                        )
                    );
                });
            } else {
                return _react2.default.createElement(
                    "li",
                    { className: "bill" },
                    _react2.default.createElement(
                        "div",
                        { className: "no-bills" },
                        "No Bills Please Add A Bill"
                    )
                );
            }
        };

        _this.billsTotalAmount = function () {
            var bills = _this.props.allBills;
            var total = 0;

            for (var i = 0; i < bills.length; i++) {
                total += parseInt(bills[i].price);
            }
            if (bills.length > 0) {
                return total;
            } else {
                return 0;
            }
        };

        _this.state = {};
        return _this;
    }

    _createClass(AllBills, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "AllBills" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "total-bills" },
                        _react2.default.createElement(
                            "div",
                            { className: "text" },
                            "Total Amount:"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "number" },
                            "$",
                            this.billsTotalAmount()
                        )
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "bills-list" },
                        this.showAllBills()
                    )
                )
            );
        }
    }]);

    return AllBills;
}(_react.Component);

exports.default = AllBills;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingMenu = function (_Component) {
    _inherits(FloatingMenu, _Component);

    function FloatingMenu() {
        _classCallCheck(this, FloatingMenu);

        var _this = _possibleConstructorReturn(this, (FloatingMenu.__proto__ || Object.getPrototypeOf(FloatingMenu)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(FloatingMenu, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { id: "FloatingMenu" },
                _react2.default.createElement(
                    "div",
                    { className: "link" },
                    _react2.default.createElement(
                        "div",
                        { className: "icon" },
                        _react2.default.createElement("i", { className: "fa fa-credit-card", "aria-hidden": "true" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "text" },
                        "Spend"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "link" },
                    _react2.default.createElement(
                        "div",
                        { className: "icon" },
                        _react2.default.createElement("i", { className: "fa fa-university", "aria-hidden": "true" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "text" },
                        "Save"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "link" },
                    _react2.default.createElement(
                        "div",
                        { className: "icon" },
                        _react2.default.createElement("i", { className: "fa fa-exchange", "aria-hidden": "true" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "text" },
                        "Transfer"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "link" },
                    _react2.default.createElement(
                        "div",
                        { className: "icon" },
                        _react2.default.createElement("i", { className: "fa fa-cog", "aria-hidden": "true" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "text" },
                        "Settings"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "link" },
                    _react2.default.createElement(
                        "div",
                        { className: "add-button", onClick: this.props.clickedAddBillBtn },
                        _react2.default.createElement(
                            "div",
                            { className: "icon" },
                            _react2.default.createElement("i", { className: "fa fa-plus", "aria-hidden": "true" })
                        )
                    )
                )
            );
        }
    }]);

    return FloatingMenu;
}(_react.Component);

exports.default = FloatingMenu;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    'Bills App'
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[84]);