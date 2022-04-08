import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Link as Scroller } from 'react-scroll';
import {auth} from "../../firebase";

const Nav = ({loggedIn}) => {

    const [isActive, setActive] = useState(false);

    const toggleOpenNav = () => {
    setActive(!isActive)
    }
    
    return (
        <section className="homeNav donationScreen__Nav">

            {loggedIn ? <div className="homeNav__upper">
                <span>Czesc {loggedIn}</span>
                <Link to="/donate">
                    <button className="homeNav__upper__log">
                        Oddaj rzeczy
                    </button>
                </Link>
                <Link to="/loggedOut">
                    <button onClick={()=>auth.signOut()} className="homeNav__upper__log">
                        Wyloguj
                    </button>
                </Link>
            </div> :
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
            }
            <nav className='homeNav__lower'>
                <button
                    className={`homeNav__toggle ${isActive && 'homeNav__open'}` }
                    onClick={toggleOpenNav}
                >
                    <span className='homeNav__bar'></span>
                    <span className='homeNav__bar'></span>
                    <span className='homeNav__bar'></span>
        </button>

                <ul className={`homeNav__list ${isActive && "homeNav__open" }`}>
                    <li className="homeNav__tabs"><Link to={"/"}>
                        Start
                    </Link></li>
                    <li className="homeNav__tabs"><Scroller activeClass="active" to="fourSteps" spy={true} smooth={true}>O co chodzi?</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="aboutUs" spy={true} smooth={true}>O nas</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="organizations" spy={true} smooth={true}>Fundacja i organizacje</Scroller></li>
                    <li className="homeNav__tabs"><Scroller  activeClass="active" to="contactUs" spy={true} smooth={true}>Kontakt</Scroller></li>
                </ul>
            </nav>
        </section>
    );
};

export default Nav;