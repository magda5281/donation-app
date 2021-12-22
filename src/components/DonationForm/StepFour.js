import React from 'react';
import DonationFormMessage from "./DonationFormMessage";

const StepFour = () => {
    return (
        <section className="donationForm__step">
            <DonationFormMessage>
                Podaj adres oraz termin odbioru rzeczy.
            </DonationFormMessage>
            <div className="donationForm__container">
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            </div>
        </section>
    );
};

export default StepFour;