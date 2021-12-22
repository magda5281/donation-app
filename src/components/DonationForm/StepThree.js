import React from 'react';
import DonationFormMessage from "./DonationFormMessage";

const StepThree = () => {
    return (
        <section className="donationForm__step">
            <DonationFormMessage>
                Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
            </DonationFormMessage>
            <div className="donationForm__container">
                <p>Krok 3/4</p>
                <h2>Lokalizacja:</h2>
            </div>
        </section>
    );
};

export default StepThree;