import React, { useState } from 'react';
import sadarbazo1 from '../../img/sadarbazoebi/sadarbazo1.jpg';



import s1b1 from  '../../img/sartulebi/1/S1.jpg';
import s1b2 from '../../img/sartulebi/1/S2.jpg';
import s1b3 from '../../img/sartulebi/1/S3.jpg';

const FirstFloor = () => {



    const [pirveli_1] = useState([
        { id: '1', bina: 'კომერციული ფართი №1', parti: '158.24',img: s1b1},
        { id: '2', bina: 'საოფისე ფართი №1', parti: '125.51',img: s1b2 },
        { id: '3', bina: 'საოფისე ფართი №2', parti: '103.50', img: s1b3 }

    ]);



    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    სართული 1
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; სართულებზე დაბრუნება </a>

            </div>
            <p className="warning">მთლიანის სადარბაზოს სანახავად რეკომედირებულია ფართო ეკრანი</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={ process.env.PUBLIC_URL + sadarbazo1} /></div>
           


            {/* ------START OF THE ROW------ */}
            <div className="row">
                {pirveli_1.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__details">
                                    <ul>
                                        <li>{info.bina}</li>
                                        <li>ფართი {info.parti}კვ.მ</li>
                                        {/* {!!info.damxmare ? <li>დამხმარე ფართი №2 {info.damxmare}კვ.მ</li> : null } */}
                                        
                                    </ul>
                                </div>
                                <img className="card__picture" src={process.env.PUBLIC_URL + info.img}  alt="pirveli sartuli"/>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        {/* <p className="card__price-only">66.7მ²</p> */}
                                        <p className="card__price-value">{info.parti}მ²</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}   

            
            

            

        </div>

    );
};

export default FirstFloor;