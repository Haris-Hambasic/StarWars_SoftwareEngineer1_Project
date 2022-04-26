import { Link } from "react-router-dom";
import "./styles/Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation-outer-container">
            <div className="navigation-inner-container">
                <nav className="navigation-links">
                    {/* <Link to="/more" className="navigation-link">More Info</Link>
                    <Link to="/sign-up" className="navigation-link">Sign Up</Link>
                    <Link to="/sign-in" className="navigation-link">Sign In</Link> */}
                    <li to="/more" className="navigation-link">More Info</li>
                    <li to="/sign-up" className="navigation-link">Sign Up</li>
                    <li to="/sign-in" className="navigation-link">Sign In</li>
                </nav>
            </div>
        </div>
    );
};

export { Navigation };