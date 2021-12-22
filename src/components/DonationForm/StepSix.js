import React from 'react';
import Decoration from "../Decoration";

const StepSix = () => {
    return (
        <section className="donationForm__step">
            <div className="donationForm__container donationForm__container--stepSix">
                <div className="donationForm__stepSix">
                    <h4 className="donationForm__thankYouNote">Dziękujemy za przesłanie formularza.<br /> Na maila prześlemy wszelkie <br /> informacje o odbiorze.</h4>
                    <Decoration/>
                </div>

            </div>
        </section>
    );
};

export default StepSix;