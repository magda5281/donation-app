import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from "react-router-dom";

const RegisterScreen = () => {
    return (
        <section className="login">
            <Nav/>
            <div className="login__body">
                <h2>Zaloz konto</h2>
                <Decoration marginTop="25px" marginBottom="60px"/>

                <form >
                    <div className="login__wrapper">
                        <div className="form__control form__control--login">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                value="email"
                                name="email"
                               />

                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Haslo </label>
                            <input type="password"
                                   name="password"
                                   value="password"
                                 />
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Powtorz haslo </label>
                            <input type="password"
                                   name="password"
                                   value="password"/>
                        </div>
                    </div>
                    <div className="login__buttons">
                        <Link to="/login">
                            <button className="btn btn--login  ">Zaloguj sie</button>
                        </Link>
                        <button className="btn  btn--login ">Zaloz konto</button>

                    </div>
                </form>
            </div>
        </section>
    );
};


export default RegisterScreen;