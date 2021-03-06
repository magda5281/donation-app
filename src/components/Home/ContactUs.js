import React from 'react';

import Footer from "../Footer";

import Form from "./Form";
import Decoration from "../Decoration";

const ContactUs = () => {
    return (
        <section className="homeContactUs" id="contactUs">
            <div className="homeContactUs__wrapper">

                <div className="homeContactUs__background"/>
                <div className="homeContactUs__body">
                        <h2>
                            Skontaktuj sie z nami
                        </h2>
                        <Decoration />
                        <Form/>
                </div>

            </div>

            <Footer/>
        </section>
    );
};

export default ContactUs;