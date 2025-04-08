import { useState } from "react";

function Button({ title }) {
    const [isClicked, setIsClicked] = useState(false);
    const toggle = () => {
        setIsClicked(prev => !prev)
        console.log("bottone cliccato")
        console.log(isClicked);
    }
    return <button onClick={toggle}>{title}</button>
}

export default Button;