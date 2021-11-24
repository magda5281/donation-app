import React from 'react';
import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeFourSteps from "../components/HomeFourSteps";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeOrganizations from "../components/HomeOrganizations";
import HomeContactUs from "../components/HomeContactUs";

const HomeScreen = () => {
    return (
        <div className= "homeScreen" >

            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeOrganizations/>
            <HomeContactUs/>


        </div>
    );
};

export default HomeScreen;