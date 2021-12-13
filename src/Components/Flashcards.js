import "../css/reset.css";
import "../css/style.css";

import logoMini from "../assets/logo-mini.png";
import turnIcon from "../assets/turn.png";
import { useState } from "react";

export default function Flashcards() {
    const [front, setSide] = useState(true);
    const [answer, setAnswer] = useState(0);
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
        if (answer === 0) setSide(false);
        else setQuestionNumber(questionNumber + 1);
    }

    return (
        <div className="container flashcards">
            <div className="logo-mini">
                <img src={logoMini} alt="logo mini" /></div>
            <div className={
                answer === 0 ? "card" : answer === 1 ? "card justLearn" :
                    answer === 2 ? " card dontRemember" : answer === 3 ? "card almostForgot" :
                        answer === 4 ? "card zap" : ""}>
                <span className="currentPosition">{questionNumber + 1}/8</span>
                {front ?
                    <>
                        <span className="title">{deck[questionNumber].question}</span>
                        <img src={turnIcon} alt="turnIcon" onClick={() => toggleQuestion()} />
                    </> :
                    <>
                        <span className="titleAnswer">{deck[questionNumber].question}</span>
                        <span className="answer">{deck[questionNumber].answer}</span>
                        <div className="buttonsFlashCard">
                            <button onClick={() => { setAnswer(1); setSide(true) }}>Aprendi agora</button>
                            <button onClick={() => { setAnswer(2); setSide(true) }}>Não lembrei</button>
                            <button onClick={() => { setAnswer(3); setSide(true) }}>Lembrei com esforço</button>
                            <button onClick={() => { setAnswer(4); setSide(true) }}>Zap!</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
