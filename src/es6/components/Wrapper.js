import Picture from "./Picture"

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

    _addPicture(e, ev) {
        e.stopPropagation();
        e.preventDefault();
        // ev.cancelBubble = "true";
        if (ev.type === "react-drop") {
            let files = e.dataTransfer.files;
            for (let file of files) {
                let fr = new FileReader(), pictures = this.state.pictures;
                fr.readAsDataURL(file);
                fr.onload = () => {
                    pictures.push({src: fr.result});
                    this.setState({pictures});
                };
            }
        }
    }

    render() {
        return (
            <div className="wrapper"
                 onDragOver={this._addPicture.bind(this)}
                 onDrop={this._addPicture.bind(this)}>
                {this.state.pictures.map((item, idx) => <Picture {...item} key={idx}/>)}
            </div>
        );
    }
}

export default Wrapper;

