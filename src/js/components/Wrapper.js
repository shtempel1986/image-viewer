"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Picture = require("./Picture");

var _Picture2 = _interopRequireDefault(_Picture);

require("babel-polyfill");

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
        key: "getPicture",
        value: regeneratorRuntime.mark(function getPicture() {
            var i;
            return regeneratorRuntime.wrap(function getPicture$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!this.state.pictures.length) {
                                _context.next = 10;
                                break;
                            }

                            i = 0;

                        case 2:
                            if (!(i < this.state.pictures.length)) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 5;
                            return this.state.pictures[i];

                        case 5:
                            i++;
                            _context.next = 2;
                            break;

                        case 8:
                            _context.next = 11;
                            break;

                        case 10:
                            return _context.abrupt("return");

                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, getPicture, this);
        })
    }, {
        key: "_addPicture",
        value: function _addPicture(e, ev) {
            var _this2 = this;

            e.stopPropagation();
            e.preventDefault();
            if (ev.type === "react-drop") {
                var files = e.dataTransfer.files;
                if (files) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _file = _step2.value;

                            if (_file.type.match(/^image/)) {
                                (function () {
                                    var fr = new FileReader(),
                                        pictures = _this2.state.pictures;
                                    fr.readAsDataURL(_file);
                                    fr.onload = function () {
                                        pictures.push({ src: fr.result });
                                        _this2.setState({ pictures: pictures });
                                    };
                                })();
                            }
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
        }
    }, {
        key: "render",
        value: function render() {
            var rows = [],
                length = this.state.pictures.length,
                rowsQuantity = Math.ceil(length / 4),
                rest = length % rowsQuantity,
                pictureIt = this.getPicture();
            for (var i = 0; i < rowsQuantity; i++) {
                var row = [];
                for (var j = 0; j < Math.floor(length / rowsQuantity) + (rest > 0); j++) {
                    row.push(React.createElement(_Picture2.default, _extends({}, pictureIt.next().value, { key: j })));
                }
                rows.push(React.createElement(
                    "div",
                    { className: "row", key: i },
                    row
                ));
                rest--;
            }

            return React.createElement(
                "div",
                { className: "wrapper",
                    onDragOver: this._addPicture.bind(this),
                    onDrop: this._addPicture.bind(this) },
                rows
            );
        }
    }]);

    return Wrapper;
}(React.Component);

exports.default = Wrapper;