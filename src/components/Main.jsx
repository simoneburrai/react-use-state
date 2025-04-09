import languages from "../data/languages";
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

const Main = () => {
    const [clickedLanguage, setClickedLanguage] = useState(null);
    const languageClicked = (obj) => {
        setClickedLanguage(clickedLanguage === obj ? null : obj);
    }
    return <main>
        <div className="button-container">
            {languages.map(language => <Button
                language={language}
                key={language.id}
                onToggle={languageClicked}
                isClicked={clickedLanguage &&
                    clickedLanguage.id === language.id}
            />)}
        </div>
        <Card language={clickedLanguage}>
        </Card>
    </main>
}

export default Main;