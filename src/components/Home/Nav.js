import React from 'react';
import {Link} from 'react-router-dom';
import {Link as Scroller}  from 'react-scroll'

const Nav = () => {
    return (
        <section className="homeNav">
            <div className="homeNav__upper">
                <Link to="/login">
                    <button className="homeNav__upper__log">
                    Zaloguj
                    </button>
                </Link>
                <Link to="/register">
                    <button className="homeNav__upper__log">
                        Zaloz Konto
                    </button>
                </Link>
            </div>
            <div className="homeNav__lower">
                <ul>
                        <li className="homeNav__tabs"><Scroller  activeClass="active"to="header" spy={true} smooth={true}>Start</Scroller></li>

                    <li className="homeNav__tabs"><Scroller activeClass="active" to="fourSteps" spy={true} smooth={true}>O co chodzi?</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="organizations" spy={true} smooth={true}>Fundacja i organizacje</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="contactUs" spy={true} smooth={true}>Kontakt</Scroller></li>
                </ul>
            </div>
        </section>
    );
};

export default Nav;