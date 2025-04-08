import languages from "../data/languages";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
    return <main>
        <div className="button-container">
            {languages.map(language => <Button key={language.id} title={language.title} />)}
        </div>
        <Card />
    </main>
}

export default Main;