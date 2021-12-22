import React from "react";
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import DonationForm from "../components/DonationForm/DonationForm";
import ContactUs from "../components/Home/ContactUs";

const DonationScreen = ({loggedIn}) => {

    return (
        <section className="homeHeader donationScreen" id="header">
            <div className="homeHeader__wrapper donationScreen__wrapper">
                <div className="homeHeader__background donationScreen__background"/>
                <div className="homeHeader__body donationScreen__body">
                    <Nav loggedIn={loggedIn}/>
                    <div className="homeHeader__content">
                        <h2>
                            Oddaj rzeczy, których już nie chcesz <br/>
                            POTRZEBUJACYM
                        </h2>
                        <Decoration marginTop="25px" marginBottom="20px"/>
                        <p>Wystarcza cztery proste kroki:</p>
                        <div className="donationScreen__steps">
                            <div className="donationScreen__step">
                                <div className="donationScreen__text">
                                    <div>1</div>
                                    <div>Wybierz <br/>rzeczy</div>
                                </div>
                            </div>
                            <div className="donationScreen__step">
                                <div className="donationScreen__text">
                                    <div>2</div>
                                    <div>Spakuj<br/>worki</div>
                                </div>
                            </div>
                            <div className="donationScreen__step">
                                <div className="donationScreen__text">
                                    <div>3</div>
                                    <div>Wybierz <br/>fundacje</div>
                                </div>
                            </div>
                            <div className="donationScreen__step">
                                <div className="donationScreen__text">
                                    <div>4</div>
                                    <div>Zamow<br/>kuriera</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DonationForm/>
            <ContactUs/>
        </section>
    );
};

export default DonationScreen;