import { useState } from "react";

function Button({ title, onToggle, id, active }) {
    const isActive = active === true ? "active" : ""
    const toggle = () => {
        onToggle(id);

    }
    return <button className={isActive} onClick={toggle}>{title}</button>
}

export default Button;
