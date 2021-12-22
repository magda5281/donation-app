import React from 'react';
import {Link} from "react-router-dom";

import tShirt from "../../assets/Icon-1.svg";
import bag from "../../assets/Icon-2.svg";
import magnifyingGlass from "../../assets/Icon-3.svg";
import circleArrows from "../../assets/Icon-4.svg";

import Decoration from "../Decoration";

const FourSteps = () => {
    return (
        <section className="homeFourSteps" id ="fourSteps">
            <h2>Wystarczą 4 proste kroki</h2>
            <Decoration marginTop="25px" marginBottom="25px"/>
            <div className="homeFourSteps__body">
                <div className="homeFourSteps__column">
                    <img src={tShirt} alt={"t-shirt icon"}/>
                    <h4>Wybierz rzeczy</h4>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src={bag} alt={"bag icon"}/>
                    <h4>Spakuj je</h4>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src={magnifyingGlass} alt={"magnifing glass"}/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src={circleArrows} alt={"Circle with arrows"}/>
                    <h4>Zamów kuriera</h4>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to="/login" className="homeFourSteps__center">
                <button className="btn btn--large">ODDAJ <br/>RZECZY</button>
            </Link>

        </section>
    );
};

export default FourSteps;