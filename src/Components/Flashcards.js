import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import turnIcon from "../assets/turn.png";
import { useState } from "react";

export default function Flashcards() {
    const [front, setSide] = useState(true);

    function changeSide() {
        setSide(false);
    }

    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" /></div>
            <div className="card">
                <span className="currentPosition">1/8</span>
                {front ?
                    <>
                        <span className="title">O que é JSX?</span>
                        <img src={turnIcon} alt="turnIcon" onClick={() => changeSide()} />
                    </> :
                    <>
                        <span className="answer">Uma extensão de linguagem do JavaScript</span>
                        <div className="buttonsFlashCard">
                            <button>Aprendi agora</button>
                            <button>Não lembrei</button>
                            <button>Lembrei com esforço</button>
                            <button>Zap!</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
