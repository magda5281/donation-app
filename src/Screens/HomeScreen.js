import React from 'react';
import Header from "../components/Home/Header";
import ThreeColumns from "../components/Home/ThreeColumns";
import FourSteps from "../components/Home/FourSteps";
import AboutUs from "../components/Home/AboutUs";
import WhoWeHelp from "../components/Home/WhoWeHelp";
import ContactUs from "../components/Home/ContactUs";

const HomeScreen = ({loggedIn}) => {
    return (
        <div className= "homeScreen" >
            <Header loggedIn={loggedIn}/>
            <ThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <ContactUs/>
        </div>
    );
};

export default HomeScreen;