import React from 'react';
import Footer from "../Footer";


import decoration from "../../assets/Decoration.svg";
import Form from "./Form";

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
                        <div className="homeContactUs__decoration">
                            <img src={decoration} alt={"decoration"}/>
                        </div>
                        <Form/>
                    </div>
                </div>

            </div>
            <Footer/>
        </section>
    );
};

export default ContactUs;