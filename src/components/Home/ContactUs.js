import React from 'react';
import Footer from "../Footer";

import decoration from "../../assets/Decoration.svg";


const ContactUs = () => {
    return (
        <section className="homeContactUs" id="contactUs">
            <div className="homeContactUs__wrapper">

                <div className="homeContactUs__background"/>
                <div className="homeContactUs__body">
                    <div className="homeContactUs__content">
                        <h2>
                            Skontaktuj sie z nami
                        </h2>
                        <div className="homeHeader__decoration">
                            <img src={decoration} alt={"decoration"}/>
                        </div>
                        <form action="" className="form">
                            <div className="form__info">
                                <div className="form__control">
                                    <label htmlFor="name">Wpisz swoje imie</label>
                                    <input type="text" name="name" id="name" placeholder= "Your name" required/>
                                </div>
                                <div className="form__control">
                                    <label htmlFor="email">Wpisz swój email</label>
                                    <input type="email" name="email" id="email" placeholder="abc@xyz.pl" required/>
                                </div>
                            </div>
                            <div className="form__control">
                                <label htmlFor="message">Wpisz wiadomosc</label>
                                <textarea rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                            </div>
                            <div className="form__submit">
                                <input type="submit" value="Send" className="btn  btn--small "/>
                            </div>

                        </form>
                    </div>
                </div>

            </div>   <Footer/>

        </section>
    );
};

export default ContactUs;