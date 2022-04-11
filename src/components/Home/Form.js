import React, { useState } from 'react';
import { sendData } from '../../functions/api';
import {
  validateStringOneWord,
  validateEmail,
  validateStringMinLength
} from "../../functions/validation";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  //validating fields on input 
  const handleInput = (e) => {

    if (e.target.name === 'name') {

      const nameError = validateStringOneWord(e.target.value, 'name', 'Name is required', 'Name must be one word');
      setErrors({ ...errors, name: nameError })
      setName(e.target.value)
    }
    if (e.target.name === 'email') {

      const emailError = validateEmail(e.target.value)
      setErrors({ ...errors, email: emailError })
      setEmail(e.target.value)
    }
    if (e.target.name === 'message') {
      const messageError = validateStringMinLength(e.target.value,
        12,
        "Message",
        "Message is required");
      setErrors({ ...errors, message: messageError })
      setMessage(e.target.value)
    }
  }

  //validating handling submit when there is no inputs 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrors({ submitError: "All fields are required" })
    } else {
      setErrors({});
      const messageInfo = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }
      sendData(`${process.env.REACT_APP_API_URL}`, messageInfo)
        .then(data => {
          if (data.status === "success") {
            setErrors({
              responseSuccess: "Your message was send. We will be in touch soon."
            });
            setTimeout(() => {
              setErrors({})
            }, 5000);
            setName("");
            setEmail("");
            setMessage("");

          } else if (data.status === 'error') {
            setErrors({ ...errors, responseError: data.errors })
          }
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={ handleSubmit }
    >

      <div className={ `form__submitted ${errors.responseSuccess && "visible"}` }>{ errors.responseSuccess }
      </div>
      <div className={ ` error error--contactForm ${errors.submitError && 'visible'}` }>{ errors.submitError } </div>

      <div className="form__info">
        <div className="form__control">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Mark"
            autoComplete="off"
            value={ name }
            onChange={ handleInput }
            // onBlur={ validateInput }
            style={ { borderBottomColor: errors.name && "red" } }
          />
          <span className={ `error ${errors.name && "visible"}` }>{ errors.name }</span>

        </div>
        <div className="form__control">
          <label htmlFor="email">Wpisz swój email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@xyz.pl"
            autoComplete="off"
            value={ email }
            onChange={ handleInput }
            // onBlur={ validateInput }
            style={ { borderBottomColor: errors.email && "red" } }
          />
          <span className={ `error ${errors.email && "visible"}` }>Provide valid email address</span>
        </div>
      </div>
      <div className="form__control">
        <label htmlFor="message">Wpisz wiadomosc</label>
        <textarea rows="4"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  ."
          minLength="12"
          name='message'
          value={ message }
          onChange={ handleInput }
          // onBlur={ validateInput }
          style={ { borderBottomColor: errors.message && "red" } }
        />
        <span className={ `error ${errors.message && "visible"}` }>Message must be min 120 characters</span>

      </div>
      <div className="form__submit">
        <input type="submit" value="Send" className="btn  btn--small " />
      </div>
    </form>
  );
};

export default Form;