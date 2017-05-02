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
            var img = e.currentTarget.children[0],
                container = e.currentTarget;
            if (e.deltaY < 0) {
                var width = img.width;
                img.style.width = width * 1.1 + "px";
            }
            if (e.deltaY > 0) {
                var _width = img.width;
                img.style.width = _width / 1.1 + "px";
            }
            img.style.marginTop = -(e.pageY - img.offsetTop - container.offsetTop) * (e.deltaY < 0 ? 1.1 : 1 / 1.1) + "px";
            img.style.marginLeft = -(e.pageX - img.offsetLeft - container.offsetLeft) * (e.deltaY < 0 ? 1.1 : 1 / 1.1) + "px";
            img.style.left = e.pageX - container.offsetLeft + "px";
            img.style.top = e.pageY - container.offsetTop + "px";
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