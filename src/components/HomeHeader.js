import React from 'react';
import HomeNav from "./HomeNav";
import decoration from '../assets/Decoration.svg';
import {Link} from 'react-router-dom';


const HomeHeader = () => {
    return (
        <section className="homeHeader" id="header">
            <div className="homeHeader__wrapper">
                <div className="homeHeader__background"/>

                <div className="homeHeader__body">
                    <HomeNav/>
                    <div className="homeHeader__content">
                        <h1>
                            Zacznij pomagac!<br/>
                            Oddaj niechciane rzeczy w zaufane rece
                        </h1>
                        <div className="homeHeader__decoration">
                            <img src={decoration} alt={"decoration"}/>
                        </div>
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

export default HomeHeader;