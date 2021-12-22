import React from 'react';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

const Footer = () => {
    return (
        <div className="footer">
            <small>
                Copyright by Coders Lab; Coded by Magda Gozdalik
            </small>
            <div className="footer__icons">
                <img src={facebook} alt={"Facebook icon"}/>
                <img src={instagram} alt={"Instagram icon"}/>
            </div>
        </div>
    );
};

export default Footer;