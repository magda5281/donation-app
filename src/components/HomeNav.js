import React from 'react';
import {Link} from 'react-router-dom';

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
                    <li className="homeNav__tabs">Start</li>
                    <li className="homeNav__tabs">O co chodzi?</li>
                    <li className="homeNav__tabs">O nas</li>
                    <li className="homeNav__tabs">Fundacja i organizacje</li>
                    <li className="homeNav__tabs">Kontakt</li>
                </ul>
            </div>
        </section>
    );
};

export default HomeNav;