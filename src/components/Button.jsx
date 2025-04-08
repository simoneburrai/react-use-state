import { useState } from "react";

function Button({ title, onToggle, id, active }) {
    const isActive = active === true ? "active" : ""
    const [isClicked, setIsClicked] = useState(false);
    const toggle = () => {
        setIsClicked(prev => {
            return !prev;
        })
        console.log("bottone cliccato")
        console.log(isClicked);
        onToggle(id);

    }
    return <button className={isActive} onClick={toggle}>{title}</button>
}

export default Button;
