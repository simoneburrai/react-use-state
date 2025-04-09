import { useState } from "react";

function Button({ onToggle, language, active }) {
    const isActive = active === true ? "active" : ""
    const toggle = () => {
        onToggle(language);

    }
    return <button className={isActive} onClick={toggle}>{language.title}</button>
}

export default Button;
