import React from 'react';

import DonationFormMessage from "./DonationFormMessage";
import Select from "./Select";

const StepTwo = () => {

    const options = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    return (
        <section className="donationForm__step">
            <DonationFormMessage>
                Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                znajdziesz TUTAJ.
            </DonationFormMessage>
            <div className="donationForm__container">
                <p>Krok 2/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                <div className="form-group">
                    <label className="select">
                        <span>Liczba 60l worków:</span>
                        {/*<Select*/}
                        {/*    className="select-input"*/}
                        {/*    // placeholder={bags ? bags : "- wybierz -"}*/}
                        {/*    options={options}*/}
                        {/*    defaultValue="bags"*/}
                        {/*    // value={bags ? options[bags - 1] : false}*/}
                        {/*    // onSelectChange={(e) => setBags(e.value)}*/}
                        {/*/>*/}
                    </label>
                </div>
            </div>
        </section>

    );
};

export default StepTwo;