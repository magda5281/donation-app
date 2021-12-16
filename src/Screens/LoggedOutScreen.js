import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from "react-router-dom";

const LoggedOutScreen = () => {
    return (
        <section className="login">
            <Nav/>
            <div className="login__body">
                <h2>Wylogowanie nastapilo <br/> pomyslnie!</h2>
                <Decoration marginTop="25px" marginBottom="60px"/>
                <div className="login__buttons">
                    <Link to="/">
                        <button className="btn  btn--small ">Strona glowna</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LoggedOutScreen;