import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from 'react-router-dom';
import {useState} from "react";

const LoginScreen = () => {

    const [user, setUser] = useState({email: "", password: ""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [valid, setIsValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(e);
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (!regex.test(user.email) || (!user.email)) {
            setEmailError(true);
            setUser({...user, email: ""})
            console.log("invalid email")
            return false
        } else {
            setEmailError(false);
        }
        if (user.password.length < 6 || (!user.password)) {
            setPasswordError(true);
            setUser({...user, [e.target.name]: ""})
            console.log("invalid password")
            return false
        } else {
            setIsValid(true);
            setEmailError(false);
            setPasswordError(false);
            console.log("submitted")
            // submitData(user);
            // setUser({email:"", password:""})
        }
    }
    return (
        <section className="login">
            <Nav/>
            <div className="login__body">
                <h2>Zaloguj sie</h2>
                <Decoration marginTop="25px" marginBottom="60px"/>

                <form onSubmit={handleSubmit}>
                    <div className="login__wrapper">
                        <div className="form__control form__control--login">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                value={user.email}
                                name="email"
                                onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                style={{borderBottom: emailError && "2px solid red"}}/>
                            {(emailError) && (<div className="error">Podany email jest nieprawidlowy</div>)}
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Haslo </label>
                            <input type="password"
                                   name="password"
                                   value={user.password}
                                   onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                   style={{borderBottom: passwordError && "2px solid red"}}/>
                            {(passwordError) && (<div className="error">Podane haslo jest za krotkie</div>)}
                        </div>
                    </div>
                    <div className="login__buttons">
                        <Link to="/register">
                            <button className="btn btn--login  ">Zaloz konto</button>
                        </Link>
                        <button className="btn btn--login  ">Zaloguj sie</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginScreen;