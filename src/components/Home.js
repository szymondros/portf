import React from 'react';
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
            <header>
                <HomeSignNav />
                <HomeNav />
            </header>
            <body>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeFourColumns />
            <HomeAbout />
            <HomeWhoWeHelp />
            <HomeContactUs />
            </body>
        </>
    );
};

export default Home;