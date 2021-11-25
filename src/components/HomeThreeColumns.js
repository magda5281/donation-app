import React from 'react';

const HomeThreeColumns = () => {
    return (
        <section className="homeThreeColumns" id="threeColumns">
            <div className="homeThreeColumns__wrapper">
                <div className="homeThreeColumns__column">
                    <div className="homeThreeColumns__number">10</div>
                    <h4 className="homeThreeColumns__title">ODDANYCH WORKÓW</h4>
                    <p className="homeThreeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="homeThreeColumns__column">
                    <div className="homeThreeColumns__number">5</div>
                    <h4 className="homeThreeColumns__title">WSPARTYCH ORGANIZACJI</h4>
                    <p className="homeThreeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="homeThreeColumns__column">
                    <div className="homeThreeColumns__number">7</div>
                    <h4 className="homeThreeColumns__title">ZORGANIZOWANY ZBIÓREK</h4>
                    <p className="homeThreeColumns__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>

        </section>
    );
};

export default HomeThreeColumns;