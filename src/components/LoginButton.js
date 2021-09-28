import React from 'react';
import {Link} from "react-router-dom";

const LoginButton = () => {
    return (
        <Link to="/sign-in" className="nav__button__login">Zaloguj</Link>
    );
};

export default LoginButton;