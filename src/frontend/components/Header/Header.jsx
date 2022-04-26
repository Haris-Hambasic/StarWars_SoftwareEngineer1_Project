import "./styles/Header.css";

import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

const Header = () => {
    return (
        <div className="header-outer-container">
            <div className="header-inner-container">
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export { Header };
