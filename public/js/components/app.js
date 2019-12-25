webpackJsonp([0],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(86);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
    _inherits(Counter, _Component);

    function Counter() {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this.clickedAdd = function () {
            _this.setState({
                currentNumber: _this.state.currentNumber + 1
            }, function () {
                console.log(_this.state);
            });
        };

        _this.clickedMinus = function () {
            _this.setState({
                currentNumber: _this.state.currentNumber - 1
            });
        };

        _this.counterRun = function () {
            setInterval(function () {
                _this.setState({
                    currentNumber: _this.state.currentNumber + 1
                });
            }, 1000);
        };

        _this.state = { status: 'manual',
            currentNumber: 0 };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('component will mount started');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.status == 'auto') {
                this.setState({
                    status: this.props.status
                }, function () {
                    _this2.counterRun();
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var styleCounterComp = {
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto'
            };

            var styleNumber = {
                border: '3px solid black',
                padding: '20px',
                fontSize: '2rem',
                fontWeight: '900',
                textAlign: 'center'
            };

            var styleButtons = {
                display: this.props.status == 'auto' ? 'none' : 'flex'
            };

            return _react2.default.createElement(
                'div',
                { className: 'counter-comp', style: styleCounterComp },
                _react2.default.createElement(
                    'div',
                    { className: 'Number', style: styleNumber },
                    this.state.currentNumber
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'buttons', style: styleButtons },
                    _react2.default.createElement(
                        _Button2.default,
                        {
                            action: 'minus',
                            fontColor: 'white',
                            hoverColor: 'red',
                            backgroundColor: 'black',
                            trigger: this.clickedMinus
                        },
                        '-'
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        {
                            action: 'plus',
                            fontColor: 'black',
                            hoverColor: 'purple',
                            backgroundColor: 'white',
                            trigger: this.clickedAdd
                        },
                        '+'
                    )
                )
            );
        }
    }]);

    return Counter;
}(_react.Component);

exports.default = Counter;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = __webpack_require__(102);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Immutable = function (_Component) {
    _inherits(Immutable, _Component);

    function Immutable() {
        _classCallCheck(this, Immutable);

        var _this = _possibleConstructorReturn(this, (Immutable.__proto__ || Object.getPrototypeOf(Immutable)).call(this));

        _this.clickedBtn = function () {
            console.log(_this.state);

            var newState = (0, _immutabilityHelper2.default)(_this.state, {
                background: { $set: 'red' },
                teachers: {
                    $set: ['Billy', 'Jordan']
                },
                user: {
                    grades: {
                        math: {
                            $set: 'C+'
                        }
                    }
                }
            });

            _this.setState(newState, function () {
                console.log(_this.state);
            });
            console.log('Clicked BTN');
        };

        _this.changeToActive = function () {
            if (_this.state.teachers[0] == 'Billy') {
                return 'active';
            } else {
                return '';
            }
        };

        _this.state = {
            background: 'black',
            names: ['Cindy', 'Billy', 'Lisa', 'John'],
            both: [],
            teachers: ['Cam', 'Brad', 'Jennifer'],
            user: {
                name: 'JC',
                age: 25,
                location: 'DE',
                grades: {
                    math: 'B',
                    english: 'A',
                    science: 'B',
                    history: 'A'
                }
            }
        };
        return _this;
    }

    _createClass(Immutable, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'Immutable-comp' },
                _react2.default.createElement('div', { className: 'box ' + this.changeToActive() }),
                _react2.default.createElement(
                    'div',
                    { className: 'button', onClick: this.clickedBtn },
                    ' Press Me'
                )
            );
        }
    }]);

    return Immutable;
}(_react.Component);

exports.default = Immutable;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Counter = __webpack_require__(82);

var _Counter2 = _interopRequireDefault(_Counter);

var _Immutable = __webpack_require__(83);

var _Immutable2 = _interopRequireDefault(_Immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                _react2.default.createElement(_Immutable2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this.toggleHover = function () {
            _this.setState({
                hover: !_this.state.hover
            });
        };

        _this.state = {
            hover: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var styleButton = {
                color: this.props.fontColor,
                width: '50%',
                border: '3px solid black',
                padding: '20px',
                fontSize: '2rem',
                fontWeight: '900',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all .6s ease-in-out',
                background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'button ' + this.props.action + '\n            ',
                    style: styleButton,
                    onMouseEnter: this.toggleHover,
                    onMouseLeave: this.toggleHover,
                    onClick: this.props.trigger
                },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react.Component);

exports.default = Button;

/***/ })

},[85]);