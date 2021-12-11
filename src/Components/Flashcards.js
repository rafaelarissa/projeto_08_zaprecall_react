import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import turnIcon from "../assets/turn.png";

export default function Flashcards() {

    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" /></div>
            <div className="card">
                <span className="currentPosition">1/8</span>
                <span className="title">O que é JSX?</span>
                <img src={turnIcon} alt="turnIcon" />
            </div>
        </div>
    );
}