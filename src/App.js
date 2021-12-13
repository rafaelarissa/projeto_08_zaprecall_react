import Flashcards from "./Components/Flashcards";
import Home from "./Components/Home";

import { useState } from "react";
import Success from "./Components/Success";
import Failure from "./Components/Failure";

export default function App() {
    const [screen, setScreen] = useState(0);

    return (
        <>
            {screen === 0 ? <Home setScreen={setScreen} /> : screen === 1 ? <Flashcards setScreen={setScreen} /> :
                screen === 2 ? <Success setScreen={setScreen} /> : screen === 3 ? <Failure setScreen={setScreen} /> : ""}
        </>
    )
}
