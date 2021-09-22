import React from 'react';
import "../scss/home/home.scss"
import HomeSignNav from "./HomeSignNav";
import HomeNav from "./HomeNav";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourColumns from "./HomeFourColumns";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContactUs from "./HomeContactUs";

const Home = () => {
    return (
        <>
            <HomeSignNav/>
            <HomeNav/>
            <HomeHeader/>
            <HomeThreeColumns/>
            <div className="home__page__wrapper">
                <HomeFourColumns/>
                <HomeAbout/>
                <HomeWhoWeHelp/>
                <HomeContactUs/>
            </div>
        </>
    );
};

export default Home;