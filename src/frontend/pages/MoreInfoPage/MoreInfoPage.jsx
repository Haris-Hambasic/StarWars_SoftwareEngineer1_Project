const MoreInfoPage = () => {
    return (
        <div className="more-info-page-outer-container">
            <div className="more-info-page-inner-container">
                <h1 className="calling">Discover everything you need to know about Star Wars</h1>
                <div className="more-info-page-options">
                    <a href="/characters" className="more-info-page-btn-trivia">Characters</a>
                    <a href="/films" className="more-info-page-btn-more">Films</a>
                    <a href="/starships" className="more-info-page-btn-more">Starships</a>
                </div>
            </div>
        </div>
    );
};

export { MoreInfoPage };
