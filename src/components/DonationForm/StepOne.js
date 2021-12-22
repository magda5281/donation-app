import React, {useState} from 'react';
import DonationFormMessage from "./DonationFormMessage";

const StepOne = ({items, setItems, error}) => {

    const checkboxTxts = {
        goodQualityClothes: "ubrania w dobrym stanie",
        wornClothes: "ubrania do wyrzucenia",
        toys: "zabawki",
        books: "książki",
        others: "inne",
    };

    const handleCheckboxChange = (e) => {
        setItems((items) => ({...items, [e.target.name]: !items[e.target.name]}));
    };
    const displayCheckboxes = Object.keys(items).map((item) => (
        <div key={item} className="donationForm__checkboxField">
            <label htmlFor={item}>
                <input
                    type="checkbox"
                    checked={items[item]}
                    onChange={handleCheckboxChange}
                    name={item}
                />
                <span></span>
                {checkboxTxts[item]}</label>
        </div>

    ));

    return <section className="donationForm__step">
        <DonationFormMessage>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
            przekazać.
        </DonationFormMessage>
        <div className="donationForm__container">
            <p>Krok 1/4</p>
            <span className="error error--donationForm">{error}</span>
            <h2>Zaznacz co chcesz oddać:</h2>
            {displayCheckboxes}


            {/*<div className="donationForm__checkboxField">*/}
            {/*    <label htmlFor="ubrania, które nadają się do ponownego użycia">*/}

            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            checked={isChecked}*/}
            {/*            onChange={handleChange}*/}
            {/*            name="clothes"*/}
            {/*        />*/}
            {/*        <span></span>*/}
            {/*        ubrania, które nadają się do ponownego użycia</label>*/}
            {/*</div>*/}

            {/*<div className="donationForm__checkboxField">*/}
            {/*    <label htmlFor="ubrania do wyrzucenia">*/}

            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            checked={isChecked}*/}
            {/*            onChange={handleChange}*/}
            {/*            name="ubrania do wyrzucenia"*/}
            {/*        />*/}
            {/*        <span></span>*/}
            {/*        ubrania do wyrzucenia</label>*/}
            {/*</div>*/}
            {/*<div className="donationForm__checkboxField">*/}
            {/*    <label htmlFor="zabawki">*/}

            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            checked={isChecked}*/}
            {/*            onChange={handleChange}*/}
            {/*            name="zabawki"*/}
            {/*        />*/}
            {/*        <span></span>*/}
            {/*        zabawki</label>*/}
            {/*</div>*/}
            {/*<div className="donationForm__checkboxField">*/}
            {/*    <label htmlFor="ksiazki">*/}

            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            checked={isChecked}*/}
            {/*            onChange={handleChange}*/}
            {/*            name="ksiazki"*/}
            {/*        />*/}
            {/*        <span></span>*/}
            {/*        inne</label>*/}
            {/*</div>*/}
            {/*<div className="donationForm__checkboxField">*/}
            {/*    <label htmlFor="inne">*/}

            {/*        <input*/}
            {/*            type="checkbox"*/}
            {/*            checked={isChecked}*/}
            {/*            onChange={handleChange}*/}
            {/*            name="inne"*/}
            {/*        />*/}
            {/*        <span></span>*/}
            {/*        inne</label>*/}
            {/*</div>*/}
        </div>
    </section>
}

export default StepOne;


