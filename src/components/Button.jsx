import { useState } from "react";

function Button({ onToggle, language, isClicked }) {
    const toggle = () => {
        onToggle(language);

    }
    return <button
        className={isClicked ? "active" : ""}
        onClick={toggle}
    >{language.title}</button>
}

export default Button;
