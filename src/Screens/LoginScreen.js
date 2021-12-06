import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from 'react-router-dom';


const LoginScreen = () => {
    return (
        <section className="login">
            <Nav/>
            <div className="login__body">
                <h2>Zaloguj sie</h2>
                <Decoration marginTop="25px" marginBottom="60px"/>

                <form action="">
                    <div className="login__wrapper">
                        <div className="form__control form__control--login">
                            <label htmlFor="email">Email</label>
                            <input type="email"/>
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Haslo </label>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className="login__buttons">
                        <Link to="/register">
                            <button className="btn btn--login  ">Zaloz konto</button>
                        </Link>
                        <button className="btn btn--login   ">Zaloguj sie</button>

                </div>
                </form>
            </div>
        </section>
);
};

export default LoginScreen;