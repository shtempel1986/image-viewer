import Wrapper from "./components/Wrapper"

ReactDOM.render(
    <Wrapper/>,
    document.getElementById("app")
);

window.onresize = ()=>{
    for (let img of document.images) {
        img.style.marginTop = `${-img.height / 2}px`;
    }
};
