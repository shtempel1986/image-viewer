class Picture extends React.Component {

    _imgRender(e) {
        let img = e.target;
        img.style.marginTop = `${-img.height / 2}px`;
    }

    _imgZoom(e) {
        let img = e.currentTarget.children[0];
        if (e.deltaY < 0) {
            let width = img.width;
            img.style.width = `${width * 1.1}px`
        }
        if (e.deltaY > 0) {
            let width = img.width;
            img.style.width = `${width / 1.1}px`
        }
        img.style.marginTop = `${-img.height / 2}px`;
        img.style.marginLeft = `${-img.width / 2}px`;
    }

    _movePicture(e) {
        let x = e.pageX, y = e.pageY, img = e.target, handler;
        e.preventDefault();
        document.addEventListener("mousemove", handler = (ev) => {
            let dX = ev.pageX - x, dY = ev.pageY - y;
            img.style.left = `${parseInt(getComputedStyle(img).left) + dX}px`;
            img.style.top = `${parseInt(getComputedStyle(img).top) + dY}px`;
            x = ev.pageX;
            y = ev.pageY;
        });
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handler);
        })
    }

    render() {
        return (
            <div className="picture" onWheel={this._imgZoom}>
                <img
                    {...this.props}
                    onLoad={this._imgRender}
                    onMouseDown={this._movePicture.bind(this)}/>
            </div>
        );
    }
}

Picture.PropTypes = {
    src: PropTypes.string
};

export default Picture;

