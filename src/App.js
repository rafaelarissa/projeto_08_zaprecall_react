import Flashcards from "./Components/Flashcards";
import Home from "./Components/Home";

import { useState } from "react";

export default function App() {
    const [start, setStart] = useState(false);

    return (
        <>
            {start ? <Flashcards /> : <Home setStart={setStart} />}
        </>
    )
}
