import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";

const OddajRzeczyScreen = ({loggedIn}) => {
    return (
        <section className="homeHeader oddajRzeczyScreen" id="header">
            <div className="homeHeader__wrapper oddajRzeczyScreen__wrapper">
                <div className="homeHeader__background oddajRzeczyScreen__background"/>
                <div className="homeHeader__body">
                    <Nav loggedIn={loggedIn}/>
                    <div className="homeHeader__content">
                        <h2>
                            Oddaj rzeczy, których już nie chcesz <br/>
                            POTRZEBUJACYM
                        </h2>
                        <Decoration marginTop="25px" marginBottom="20px"/>
                        <p>Wystarcza cztery proste kroki:</p>
                        <div className="oddajRzeczyScreen__steps">
                            <div className="oddajRzeczyScreen__step">
                                <div className="oddajRzeczyScreen__text">
                                    <div>1</div>
                                    <div>Wybierz <br/>rzeczy</div>
                                </div>
                            </div>
                            <div className="oddajRzeczyScreen__step">
                                <div className="oddajRzeczyScreen__text">
                                    <div>2</div>
                                    <div>Spakuj<br/>worki</div>
                                </div>
                            </div>
                            <div className="oddajRzeczyScreen__step">
                                <div className="oddajRzeczyScreen__text">
                                    <div>3</div>
                                    <div>Wybierz <br/>fundacje</div>
                                </div>
                            </div>
                            <div className="oddajRzeczyScreen__step">
                                <div className="oddajRzeczyScreen__text">
                                    <div>4</div>
                                    <div>Zamow<br/>kuriera</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OddajRzeczyScreen;