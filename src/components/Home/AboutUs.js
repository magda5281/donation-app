import React from 'react';
import signature from "../../assets/Signature.svg";
import Decoration from '../Decoration.js';

const AboutUs = () => {
    return (
        <section className="homeAboutUs" id="aboutUs">
            <div className="homeAboutUs__wrapper">
                <div className="homeAboutUs__img"/>
                <div className="homeAboutUs__content">
                    <h2> O nas </h2>
                    <Decoration/>
                    <p className="homeAboutUs__text">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <div className="homeAboutUs__signature">
                        <img src={signature} alt={"signature"}/>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default AboutUs;