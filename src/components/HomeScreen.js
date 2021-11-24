import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizations from "./HomeOrganizations";
import HomeContactUs from "./HomeContactUs";

const HomeScreen = () => {
    return (
        <>

            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeOrganizations/>
            <HomeContactUs/>


        </>
    );
};

export default HomeScreen;