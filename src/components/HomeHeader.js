import React from 'react';
import HomeHeaderButton from "./HomeHeaderButton";
import "../scss/home/home-header.scss";
import {isMobile} from "react-device-detect";

const HomeHeader = () => {
    return (
        <section id="header" className="home__header home__page__wrapper">
            <h1>Zacznij pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <hr/>
            <div className="header__buttons__wrapper">
                <HomeHeaderButton text="Oddaj rzeczy"/>
                <HomeHeaderButton text="Zorganizuj zbiórkę"/>
            </div>

            {
                isMobile ?
                    <></>
                    :
                    <img src="images/hero-image.png" alt="books"/>
            }
        </section>
    );
};

export default HomeHeader;