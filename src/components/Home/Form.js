import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] =useState(false);
    const [email, setEmail]=useState("");
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage]=useState("");
    const [messageError, setMessageError]=useState(false);
    const [isSubmitted, setIsSubmitted]= useState(false);
    const [apiErrorMsg, setApiErrorMsg]=useState([]);

    const validate = (e)=>{
        setEmail(e.target.value);
        const regex = /^\S+@\S+\.\S+$/
        if ( regex.test(email) === false){
            setEmailError(true);
        } else {
            setEmail(e.target.value);
            setEmailError(false);
        }
    };

    const validateName=(e)=>{
        setName(e.target.value)
        let wordCount= 0;
        wordCount = e.target.value.split(" ").length;
        if ( wordCount > 1 || (!name) || (e.target.value.match("^[a-zA-Z ]*$") === null)){
            setNameError(true);
        } else {
            setName(e.target.value);
            setNameError(false);
        }
    }

    const validateMessage =(e)=>{
        setMessage(e.target.value);
        let characterCount= 0;
        characterCount = e.target.value.split("").length;
        if ( characterCount <=120 || (!message)){
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (nameError || emailError || messageError) {
            return;
        }
        //sending info
        const messageInfo = {
            name,
            email,
            message,
            status:"success"
        }
        return sendMessageInfo(messageInfo);
    }

    const sendMessageInfo =(messageInfo)=>{
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
            headers: {
                // "Authorization":
                "Content-Type": "application/json",
            },
            method: "POST",
            body:JSON.stringify(messageInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    console.log("success")
                    setIsSubmitted(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setEmailError(false);
                    setNameError(false);
                    setMessageError(false);
                } else {
                    console.log("error");
                    let apiErrorMsg=[];
                    apiErrorMsg.push(data.errors)
                    setApiErrorMsg(apiErrorMsg);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>

        <form
            className="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            >
            {isSubmitted && <div className="form__submitted">Wiadomosc zostala wyslana!<br/>Wkrotce sie skontaktujemy.</div>}
            {apiErrorMsg.length>0 && apiErrorMsg.map((err,index)=>{
               console.log(err.msg)}
            )}
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
                        onChange={validateName}
                        required
                    />
                    {nameError && <span className="form__error" id="nameError">Name must be one word </span>}
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
                        onChange={(e)=> {validate(e)}}
                        required/>
                    {emailError && <span className="form__error" id="emailError">Please write valid email address</span>}
                </div>
            </div>
            <div className="form__control">
                <label htmlFor="message">Wpisz wiadomosc</label>
                <textarea rows="5"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                          value={message}
                          minLength="120"
                          required
                          onChange={(e)=> {validateMessage(e)}}/>
                            {messageError && <span className="form__error" id="messageError">Message must be min 120 characters</span>}
            </div>
            <div className="form__submit">
                <input type="submit" value="Send" className="btn  btn--small "/>

            </div>
        </form>
    </>
    );
};

export default Form;