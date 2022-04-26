const SignUpPage = () => {
    return (
        <div className="sign-up-page-outer-container">
            <div className="sign-up-page-inner-container">
                <form className="sign-up-form">
                    <label>First Name:</label>
                    <input type={"text"} placeholder="First Name" />
                    <br />
                    <label>Last Name:</label>
                    <input type={"text"} placeholder="Last Name" />
                    <br />
                    <label>Email Address:</label>
                    <input type={"text"} placeholder="Email" />
                    <br />
                    <label>Password:</label>
                    <input type={"text"} placeholder="Password" />
                    <br />
                    <button type="submit" className="sign-up-form-submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export { SignUpPage };
