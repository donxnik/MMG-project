import React from 'react';
import './footer.style.scss';
import logo from '../../img/MMGICON.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">მთავარი</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">ჩვენ შესახებ</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">ფინანსები</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">ბინები</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">საკონტაქტო</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        ყველა წესი დაცულია &copy; <a href="#" className="footer__link"> MMG GROUP</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;