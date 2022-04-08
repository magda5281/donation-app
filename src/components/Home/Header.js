import React from 'react';
import Nav from "./Nav";
import {Link} from 'react-router-dom';
import Decoration from "../Decoration";


const Header = ({loggedIn}) => {

    return (
        <section className="homeHeader" id="header">
            <div className="homeHeader__wrapper">
                <div className="homeHeader__background"/>
                <div className="homeHeader__body">
                    <Nav loggedIn={loggedIn}/>
                    <div className="homeHeader__content">
                        <h1>
                            Zacznij pomagac!<br/>
                            Oddaj niechciane rzeczy w zaufane rece
                        </h1>
                        <Decoration />
                        <div className="homeHeader__buttons">
                            <Link to="/login">
                                <button className="btn btn--large">ODDAJ <br/>RZECZY</button>
                            </Link>
                            <Link to="/login">
                                 <button className="btn btn--large">ZORGANIZUJ <br/>ZBIORKE</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
);
};

export default Header;