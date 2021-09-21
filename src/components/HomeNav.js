import React, {useState} from 'react';
import Hamburger from "./Hamburger";
import HomeNavList from "./HomeNavList";
import "../scss/home/home-nav.scss";

const HomeNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="home__nav__wrapper">
            <Hamburger showMenu={showMenuHandler}/>
            {showMenu ?
                <HomeNavList />
                :
                <></>
            }
        </div>
    );
};

export default HomeNav;