import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import turnIcon from "../assets/turn.png";
import { useState } from "react";

let hits = 0;
export default function Flashcards(props) {
    const [front, setSide] = useState(true);
    const [choice, setChoice] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);

    const deck = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __ ", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes " },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    function toggleQuestion() {
        if (choice === 0) setSide(false);
        else if (questionNumber < deck.length - 1) {
            setQuestionNumber(questionNumber + 1);
            setChoice(0);
        }
        else if (hits === deck.length) props.setScreen(2);
        else props.setScreen(3)
    }

    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" /></div>
            <div data-identifier="flashcard" className={
                choice === 0 ? "card" : choice === 1 ? "card justLearn" :
                    choice === 2 ? " card dontRemember" : choice === 3 ? "card almostForgot" :
                        choice === 4 ? "card zap" : ""}>
                <span className="currentPosition" data-identifier="counter">{questionNumber + 1}/8</span>
                {front ?
                    <>
                        <span className="title">{deck[questionNumber].question}</span>
                        <img src={turnIcon} alt="turnIcon" onClick={() => toggleQuestion()} data-identifier="arrow" />
                    </> :
                    <>
                        <span className="titleAnswer">{deck[questionNumber].question}</span>
                        <span className="answer">{deck[questionNumber].answer}</span>
                        <div className="buttonsFlashCard">
                            <button onClick={() => { setChoice(1); setSide(true); hits++ }}>Aprendi agora</button>
                            <button onClick={() => { setChoice(2); setSide(true) }}>Não lembrei</button>
                            <button onClick={() => { setChoice(3); setSide(true); hits++ }}>Lembrei com esforço</button>
                            <button onClick={() => { setChoice(4); setSide(true); hits++ }}>Zap!</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
