(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picture = function (_React$Component) {
    _inherits(Picture, _React$Component);

    function Picture() {
        _classCallCheck(this, Picture);

        return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
    }

    _createClass(Picture, [{
        key: "_imgRender",
        value: function _imgRender(e) {
            var img = e.target;
            img.style.marginTop = -img.height / 2 + "px";
        }
    }, {
        key: "_imgZoom",
        value: function _imgZoom(e) {
            var img = e.currentTarget.children[0];
            if (e.deltaY < 0) {
                var width = img.width;
                img.style.width = width * 1.1 + "px";
            }
            if (e.deltaY > 0) {
                var _width = img.width;
                img.style.width = _width / 1.1 + "px";
            }
            img.style.marginTop = -img.height / 2 + "px";
            img.style.marginLeft = -img.width / 2 + "px";
        }
    }, {
        key: "_movePicture",
        value: function _movePicture(e) {
            var x = e.pageX,
                y = e.pageY,
                img = e.target,
                handler = void 0;
            e.preventDefault();
            document.addEventListener("mousemove", handler = function handler(ev) {
                var dX = ev.pageX - x,
                    dY = ev.pageY - y;
                img.style.left = parseInt(getComputedStyle(img).left) + dX + "px";
                img.style.top = parseInt(getComputedStyle(img).top) + dY + "px";
                x = ev.pageX;
                y = ev.pageY;
            });
            document.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", handler);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "picture", onWheel: this._imgZoom },
                React.createElement("img", _extends({}, this.props, {
                    onLoad: this._imgRender,
                    onMouseDown: this._movePicture.bind(this) }))
            );
        }
    }]);

    return Picture;
}(React.Component);

Picture.PropTypes = {
    src: PropTypes.string
};

exports.default = Picture;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Picture = require("./Picture");

var _Picture2 = _interopRequireDefault(_Picture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_React$Component) {
    _inherits(Wrapper, _React$Component);

    function Wrapper() {
        _classCallCheck(this, Wrapper);

        var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this));

        _this.state = {
            pictures: []
        };
        return _this;
    }

    _createClass(Wrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.imgRender();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.imgRender();
        }
    }, {
        key: "imgRender",
        value: function imgRender() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = document.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var img = _step.value;

                    img.style.marginTop = -img.height / 2 + "px";
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "_addPicture",
        value: function _addPicture(e, ev) {
            var _this2 = this;

            e.stopPropagation();
            e.preventDefault();
            // ev.cancelBubble = "true";
            if (ev.type === "react-drop") {
                var files = e.dataTransfer.files;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    var _loop = function _loop() {
                        var file = _step2.value;

                        var fr = new FileReader(),
                            pictures = _this2.state.pictures;
                        fr.readAsDataURL(file);
                        fr.onload = function () {
                            pictures.push({ src: fr.result });
                            _this2.setState({ pictures: pictures });
                        };
                    };

                    for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        _loop();
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "wrapper",
                    onDragOver: this._addPicture.bind(this),
                    onDrop: this._addPicture.bind(this) },
                this.state.pictures.map(function (item, idx) {
                    return React.createElement(_Picture2.default, _extends({}, item, { key: idx }));
                })
            );
        }
    }]);

    return Wrapper;
}(React.Component);

exports.default = Wrapper;
},{"./Picture":1}],3:[function(require,module,exports){
"use strict";

var _Wrapper = require("./components/Wrapper");

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_Wrapper2.default, null), document.getElementById("app"));

window.onresize = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = document.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var img = _step.value;

            img.style.marginTop = -img.height / 2 + "px";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
},{"./components/Wrapper":2}]},{},[3])