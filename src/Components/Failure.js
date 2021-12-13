import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import sad from "../assets/sad.png";

export default function Failure() {
    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" />
            </div>
            <div className="failure">
                <h1>Putz.. <img src={sad} alt="sad emote" /></h1>
                <h2>Você esqueceu alguns flashcards.</h2>
                <h2>Não desanime! Na próxima você consegue!</h2>
            </div>
        </div>
    )
}