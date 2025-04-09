const Card = ({ language }) => {
    let header = undefined;
    let content = "Nessun Bottone Attivo";
    if (language) {
        header = <h2>{language.title}</h2>;
        content = language.description;
    }

    return <div className="card">
        {header}
        {content}
    </div>

}

export default Card;