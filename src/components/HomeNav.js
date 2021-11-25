import React from 'react';
import {Link} from 'react-scroll'

const HomeNav = () => {
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
                    <li className="homeNav__tabs"><Link  activeClass="active"to="header" spy={true} smooth={true}>Start</Link></li>
                    <li className="homeNav__tabs"><Link activeClass="active" to="fourSteps" spy={true} smooth={true}>O co chodzi?</Link></li>
                    <li className="homeNav__tabs"><Link  activeClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Link></li>
                    <li className="homeNav__tabs"><Link  activeClass="active" to="organizations" spy={true} smooth={true}>Fundacja i organizacje</Link></li>
                    <li className="homeNav__tabs"><Link  activeClass="active" to="contactUs" spy={true} smooth={true}>Kontakt</Link></li>
                </ul>
            </div>
        </section>
    );
};

export default HomeNav;