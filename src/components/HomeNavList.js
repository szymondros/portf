import React from 'react';
import {Link} from "react-scroll";

const HomeNavList = ({showMenu}) => {
    return (
        <div className="nav__list__wrapper">
            <ul className="nav__list">
                <li>
                    <Link to="start" spy={true} smooth={true} duration={500} onClick={showMenu}>
                        Start
                    </Link>
                </li>
                <li>
                    <Link to="three-columns" spy={true} smooth={true} duration={500} onClick={showMenu}>
                        o co chodzi?
                    </Link>
                </li>
                <li>
                    <Link to="about-us" spy={true} smooth={true} duration={500} onClick={showMenu}>
                        O nas
                    </Link>
                </li>
                <li>
                    <Link to="who-we-help" spy={true} smooth={true} duration={500} onClick={showMenu}>
                        Fundacje i organizacje
                    </Link>
                </li>
                <li>
                    <Link to="contact-form" spy={true} smooth={true} duration={500} onClick={showMenu}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HomeNavList;