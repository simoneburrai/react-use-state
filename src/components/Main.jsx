import languages from "../data/languages";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
    const [active, setActive] = useState(false);
    const [clickedLanguage, setClickedLanguage] = useState(null);
    const languageClicked = (obj) => {
        setClickedLanguage(clickedLanguage === obj ? null : obj);
        setActive(active => {
            active = false;
            return active
        });
    }
    return <main>
        <div className="button-container">
            {languages.map(language => <Button
                language={language}
                key={language.id}
                active={clickedLanguage === language}
                onToggle={languageClicked}
            />)}
        </div>
        <Card language={clickedLanguage}>
        </Card>
    </main>
}

export default Main;