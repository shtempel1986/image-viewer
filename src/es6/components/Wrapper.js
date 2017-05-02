import Picture from "./Picture"
import "babel-polyfill";

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        this.imgRender();
    }

    componentDidUpdate() {
        this.imgRender();
    }

    imgRender() {
        for (let img of document.images) {
            img.style.marginTop = `${-img.height / 2}px`;
        }
    }

    *getPicture() {
        if (this.state.pictures.length)
            for (let i = 0; i < this.state.pictures.length; i++) {
                yield this.state.pictures[i];
            }
        else return;
    }

    _addPicture(e, ev) {
        e.stopPropagation();
        e.preventDefault();
        if (ev.type === "react-drop") {
            let files = e.dataTransfer.files;
            if (files)
                for (let file of files) {
                    if (file.type.match(/^image/)) {
                        let fr = new FileReader(), pictures = this.state.pictures;
                        fr.readAsDataURL(file);
                        fr.onload = () => {
                            pictures.push({src: fr.result});
                            this.setState({pictures});
                        };
                    }
                }
        }
    }

    render() {
        let rows= [], length = this.state.pictures.length,
            rowsQuantity = Math.ceil(length / 4),
            rest = length % rowsQuantity,
            pictureIt = this.getPicture();
        for (let i = 0; i < rowsQuantity; i++) {
            let row= [];
            for (let j = 0; j < Math.floor(length / rowsQuantity) + (rest > 0); j++) {
                row.push(<Picture {...pictureIt.next().value} key={j}/>);
            }
            rows.push(<div className="row" key={i}>{row}</div>);
            rest--;
        }

        return (
            <div className="wrapper"
                 onDragOver={this._addPicture.bind(this)}
                 onDrop={this._addPicture.bind(this)}>
                {rows}
            </div>
        );
    }
}

export default Wrapper;

