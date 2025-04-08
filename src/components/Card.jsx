const Card = ({ languages, languagesValue }) => {
    console.log(languages);
    let header = undefined;
    let content = "Nessun Bottone Attivo";
    if (languagesValue != null) {
        const currentLanguage = languages.find(language => language.id === languagesValue)

        if (currentLanguage) {
            header = <h2>{currentLanguage.title}</h2>;
            content = currentLanguage.description;
        }
    }
    return <div className="card">
        {header}
        {content}
    </div>

}

export default Card;