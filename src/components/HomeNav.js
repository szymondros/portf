import React, {useState} from 'react';
import Hamburger from "./Hamburger";
import HomeNavList from "./HomeNavList";
import "../scss/home/home-nav.scss";

const HomeNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(!showMenu);
        document.body.classList.toggle("blocked-scroll");
    }

    return (
        <div className="home__nav__wrapper">
            <Hamburger toggleClass={showMenu ? "nav__hamburger--rotate" : "nav__hamburger"}
                       showMenu={showMenuHandler}/>
            {showMenu ?
                <HomeNavList showMenu={showMenuHandler} />
                :
                <></>
            }
        </div>
    );
};

export default HomeNav;