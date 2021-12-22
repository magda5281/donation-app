import React from 'react';
import DonationFormMessage from "./DonationFormMessage";

const StepTwo = () => {
    return (
        <section className="donationForm__step">
            <DonationFormMessage>
                Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                znajdziesz TUTAJ.
            </DonationFormMessage>
            <div className="donationForm__container">
                <p>Krok 2/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            </div>
        </section>

    );
};

export default StepTwo;