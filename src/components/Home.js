import React from 'react';
import styled from "styled-components";
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
            <PageWrapper>
                <header>
                    <HomeSignNav/>
                    <HomeNav/>
                </header>
                <HomeHeader/>
            </PageWrapper>
            <HomeThreeColumns/>
            <PageWrapper>
                <HomeFourColumns/>
                <HomeAbout/>
                <HomeWhoWeHelp/>
                <HomeContactUs/>
            </PageWrapper>
        </>
    );
};

const PageWrapper = styled.div`
  padding: 0 20px;
`;

export default Home;