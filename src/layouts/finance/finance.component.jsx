import React from 'react';
import './finance.style.scss'

import geoImg from '../../img/georgia_icon.png'
import tbcImg from '../../img/tbc_icon.png'
import libertiImg from '../../img/liberti_icon.png'
import handshakeImg from '../../img/handshake.png'


const Finance = () => {
    return (
        
           <section className="section-finance">
               <div className="row">
                   <div className="col-1-of-4">
                       <div className="feature-box">
                           <img className="feature-box__icon icon-basic-world" src={geoImg} alt="საქ ბანკი" />
                           <h3 className="heading-tetriary u-margin-bottom-small">საქართველოს ბანკი</h3>
                           <p className="feature-box__text">ინფორმაცია მალე დაემატება!</p>
                       </div>
                   </div>

                   <div className="col-1-of-4">
                       <div className="feature-box">
                           <img className="feature-box__icon icon-basic-world" src={tbcImg} alt="საქ ბანკი" />
                           <h3 className="heading-tetriary u-margin-bottom-small">თიბისი ბანკი</h3>
                           <p className="feature-box__text">ინფორმაცია მალე დაემატება!</p>
                       </div>
                   </div>

                   <div className="col-1-of-4">
                       <div className="feature-box">
                           <img className="feature-box__icon icon-basic-world" src={libertiImg} alt="საქ ბანკი" />
                           <h3 className="heading-tetriary u-margin-bottom-small">ლიბერთი ბანკი</h3>
                           <p className="feature-box__text">ინფორმაცია მალე დაემატება!</p>
                       </div>
                   </div>

                   <div className="col-1-of-4">
                       <div className="feature-box">
                           <img className="feature-box__icon icon-basic-world" src={handshakeImg} alt="საქ ბანკი" />
                           <h3 className="heading-tetriary u-margin-bottom-small">ნაღდი ანგარისწორება</h3>
                           <p className="feature-box__text">ინფორმაცია მალე დაემატება!</p>
                       </div>
                   </div>
               </div>
           </section>
        
    );
};

export default Finance;