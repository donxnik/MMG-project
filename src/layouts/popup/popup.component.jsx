import React from 'react';
import './popup.style.scss';
import mtelibina1 from '../../img/mtelibina1.PNG'


const POPUP = (props) => {
    
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <img src={props.link} alt="გადატვირთე ბრაუზერი" className="popup__img"/>
                <a href="#tours" className="popup__close">&times;</a>
            </div>
        </div>
    );
};

export default POPUP;