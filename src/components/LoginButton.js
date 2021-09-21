import React from 'react';
import {Link} from "react-router-dom";

const LoginButton = () => {
    return (
        <Link to="/login" className="nav__button__login">Zaloguj</Link>
    );
};

export default LoginButton;