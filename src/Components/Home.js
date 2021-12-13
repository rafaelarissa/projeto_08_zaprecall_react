import "../css/reset.css";
import "../css/style.css";

import logo from "../assets/logo.png";
import startButton from "../assets/start-button.png";

export default function Home(props) {

    return (
        <div className="container home">
            <div className="logo">
                <img src={logo} alt="logo" /></div>
            <button className="start" onClick={() => props.setScreen(1)} data-identifier="start-zap-recall">
                <img src={startButton} alt="start button" />
            </button>
        </div>
    );
}