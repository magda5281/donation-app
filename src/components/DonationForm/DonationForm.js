import React, {useState} from 'react';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const DonationForm = () => {
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");

    const [items, setItems] = useState({
        goodQualityClothes: false,
        wornClothes: false,
        toys: false,
        books: false,
        others: false,
    });

    //     quantity: 0,
    //     location: "",
    //     forWho: {},
    //     organization: "",
    //     pickUpAddress: {
    //         street: "",
    //         city: "",
    //         postCode: "",
    //         phone: "",
    //     },
    //     pickUpDate: {
    //         date: {},
    //         time: {},
    //         message: ""
    //     }
    // });




    // const handleNextClick = (e, error) => {
    //     // if (step === 6) {
    //     //     return
    //     // }
    //     e.preventDefault()
    //     setStep(step => step + 1);
    // }
    const handleNextStep = (e) => {
        e.preventDefault()
                if(!Object.values(items).includes(true)){
                    setError(["Wybierz przynajmniej jedną rzecz do oddania."])
                } else {
                setStep((step) => step + 1);
            }
    };


    const goPreviousStep = (e) => {
        e.preventDefault()
        setStep(step => step - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(6);
    }


    return (
        <section className="donationForm">

            <form onSubmit={handleSubmit} className={`donationForm__body ${(step === 5 || step === 6) ?
                "donationForm--backgroundPosition" : null}`}
            >
                {step === 1 && <StepOne items={items} setItems={setItems} error={error}/>}
                {step === 2 && <StepTwo/>}
                {step === 3 && <StepThree/>}
                {step === 4 && <StepFour/>}
                {step === 5 && <StepFive/>}
                {step === 6 && <StepSix/>}


                <div className="donationForm__buttons">
                    {step === 5 && <button type="submit" className="btn btn--left"> Potwierdzam</button>}
                    {step !== 6 && step !== 1 &&
                    <button className="btn btn--left" onClick={goPreviousStep}>Wstecz</button>}
                    {step !== 6 && step !== 5 && <button className="btn" onClick={handleNextStep}> Dalej</button>}
                </div>
            </form>


        </section>

    );
};

export default DonationForm;