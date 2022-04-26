import "./styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page-outer-container">
            <div className="home-page-inner-container">
                <h1 className="calling">Are you my father?</h1>
                <p className="calling-statement">Discover any and all Stars Wars facts and information to beat any of your friends in a game of Star Wars trivia.</p>
                <div className="home-page-btn-container">
                    <a href="/more-info" className="home-page-btn-trivia">Trivia</a>
                    <a href="/more" className="home-page-btn-more">More</a>
                </div>
            </div>
        </div>
    );
};

export { HomePage };
