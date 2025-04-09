import languages from "../data/languages";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
    const [active, setActive] = useState(false);
    const [clickedLanguage, setClickedLanguage] = useState(null);
    const languageClicked = (id) => {
        setClickedLanguage(clickedLanguage === id ? null : id);
        setActive(active => {
            active = false;
            return active
        });
    }
    return <main>
        <div className="button-container">
            {languages.map(language => <Button
                key={language.id}
                title={language.title}
                active={clickedLanguage === language.id}
                onToggle={languageClicked}
                id={language.id} />)}
        </div>
        <Card language={languages.find(language => language.id === clickedLanguage)}>
        </Card>
    </main>
}

export default Main;