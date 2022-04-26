const SignInPage = () => {
    return (
        <div className="sign-inpage-outer-container">
            <div className="sign-inpage-inner-container">
                <form className="sign-in-form">
                    <label>Email Address:</label>
                    <input type={"text"} placeholder="Email" />
                    <br />
                    <label>Password:</label>
                    <input type={"text"} placeholder="Password" />
                    <br />
                    <button type="submit" className="sign-in-form-submit-btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export { SignInPage };
