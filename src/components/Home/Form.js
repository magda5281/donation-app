import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] =useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [submitted, setIsSubmitted] = useState(false);

    const handleSubmit =(e)=> {
        e.preventDefault();
        validateName(name)
        validateEmail(email)
        validateMessage(message)
        if (nameError || emailError || messageError) {
            return
        } else {
            const messageInfo = {
                name,
                email,
                message,
            }
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body:JSON.stringify(messageInfo)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        console.log(data.status);
                        setIsSubmitted(true);
                        setName("");
                        setEmail("");
                        setMessage("");
                        // setNameError(false);
                        // setEmailError(false);
                        // setMessageError(false);
                    } else {
                        setIsSubmitted(false);
                            console.log(data.status);
                    }
                })
                .catch(err => console.log(err));
        }
        }

    const validateName = (name)=> {
        if(!/[a-zA-Z]+$/.test(name) ||  /^\s+$/.test(name) ) {
            setNameError(true);
            setName("");
        } else {
            setNameError(false);
        }
    }
    const validateEmail = (email)=>{
        const regex = /^\S+@\S+\.\S+$/
        if (!regex.test(email) ){
            setEmailError(true);
            setEmail("");
        } else {
            setEmailError(false);
        }
    };
    const validateMessage = (message) => {
            let characterCount= 0;
            characterCount = message.split("").length;
            if ( characterCount <=120 || (!message)){
                setMessageError(true);
            } else {
                setMessageError(false);
            }
    }

    return (
        <form
            className="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            >
            {submitted && <div className="form__submitted">Wiadomosc zostala wyslana!<br/>Wkrotce sie skontaktujemy.</div>}
            <div className="form__info">
                <div className="form__control">
                    <label htmlFor="name">Wpisz swoje imie</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        autoComplete="off"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                        style={{borderBottom: nameError && "2px solid red"}}
                    />
                    {nameError && <span className="form__error">Name needs to be one word and letters only</span>}
                </div>

                <div className="form__control">
                    <label htmlFor="email">Wpisz swój email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abc@xyz.pl"
                        autoComplete="off"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        style={{borderBottom: emailError && "2px solid red"}}
                    />
                    {emailError && <span className="form__error">Provide valid email address</span>}
                </div>
            </div>
            <div className="form__control">
                <label htmlFor="message">Wpisz wiadomosc</label>
                <textarea rows="5"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          minLength="120"
                          value={message}
                          onChange={(e)=> setMessage(e.target.value)}
                          required
                          style={{borderBottom: messageError && "2px solid red"}}
                />
                {messageError && <span className="form__error">Message must be min 120 characters</span>}

            </div>
            <div className="form__submit">
                <input type="submit" value="Send" className="btn  btn--small "/>
            </div>
        </form>
    );
};

export default Form;