import { useState } from "react";

function Button({ title, onToggle, language, active }) {
    const isActive = active === true ? "active" : ""
    const toggle = () => {
        onToggle(language);

    }
    return <button className={isActive} onClick={toggle}>{title}</button>
}

export default Button;
