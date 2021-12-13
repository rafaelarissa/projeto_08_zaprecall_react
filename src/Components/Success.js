import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import party from "../assets/party.png";

export default function Success() {
    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" />
            </div>

            <h1>PARABÉNS <img src={party} alt="party emote" /></h1>
            <h2>Você não esqueceu de nenhum flashcard!</h2>
        </div>
    )
}