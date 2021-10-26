import React from 'react';
import './header.scss';
import logo from '../img/MMGICON.png'

const Header = () => {
    return (
        
        <div className="header">
            <div className="logo-box">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">MMG Group</span>
                    <span className="heading-primary-sub">ემ-ემ-ჯი ჯგუფი იცხოვრე მყუდრო და მშვიდ გარემოში</span>
                </h1>

            <a href="#tours" className="btn btn-white btn-animated">შეიძინე ბინა</a>
            </div>

        </div>
    );
};

export default Header;