import { useState } from "react";

function Button({ onToggle, language, className }) {
    const toggle = () => {
        onToggle(language);

    }
    return <button
        className={className}
        onClick={toggle}
    >{language.title}</button>
}

export default Button;
