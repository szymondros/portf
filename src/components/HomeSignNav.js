import React from 'react';
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import "../scss/home/home-sign-nav.scss"


const HomeSignNav = () => {
    return (
        <div id="start" className="home__nav__buttons">
            <LoginButton />
            <SignUpButton />
        </div>
    );
};

export default HomeSignNav;