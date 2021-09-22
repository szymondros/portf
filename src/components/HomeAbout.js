import React from 'react';
import "../scss/home/home-about.scss";
import {isMobile} from "react-device-detect";
import HomeAboutSignature from "./HomeAboutSignature";

const HomeAbout = () => {
    return (
        <section id="about-us" className="home__about home__page__wrapper">
            <div className="about__description">
                <h1>O nas</h1>
                <hr />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                    nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <HomeAboutSignature />
            </div>
            {isMobile ?
                <></>
                :
                <img src="/images/People.png" alt="People" />
            }
        </section>
    );
};

export default HomeAbout;