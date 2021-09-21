import React from 'react';
import {Link} from "react-router-dom";

const SignUpButton = () => {
    return (
        <Link to="/sign-up" className="nav__button__signup">Załóż konto</Link>
    );
};

export default SignUpButton;