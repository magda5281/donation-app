import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const HomeFourSteps = () => {
    return (
        <section className="homeFourSteps" id ="fourSteps">
            <h2>Wystarczą 4 proste kroki</h2>
            <div className="decoration">
                <img src={decoration} alt={"decoration"}/>
            </div>
            <div className="homeFourSteps__body">
                <div className="homeFourSteps__column">
                    <img src="../assets/Icon-1.svg" alt="t-shirt icon"/>
                    <h4>Wybierz rzeczy</h4>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src="../assets/Icon-2.svg" alt="bag icon"/>
                    <h4>Spakuj je</h4>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src="../assets/Icon-3.svg" alt="magnifing glass"/>
                    <h4>Zdecyduj komu chcesz pomóc</h4>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="homeFourSteps__column">
                    <img src="../assets/Icon-3.svg" alt="Circle with arrows"/>
                    <h4>Zamów kuriera</h4>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to="/login">
                <button className="btn btn--large">ODDAJ <br/>RZECZY</button>
            </Link>

        </section>
    );
};

export default HomeFourSteps;