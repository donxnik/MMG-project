import React, { useState } from 'react';
import sadarbazo3 from '../../img/sadarbazoebi/sadarbazo3.jpg';


import s3b1 from '../../img/sartulebi/3/SART3-11.jpg';
import s3b2 from '../../img/sartulebi/3/SART3-12.jpg';
import s3b3 from '../../img/sartulebi/3/SART3-13.jpg';
import s3b4 from '../../img/sartulebi/3/SART3-14.jpg';
import s3b5 from '../../img/sartulebi/3/SART3-15.jpg';
import s3b6 from '../../img/sartulebi/3/SART3-16.jpg';
import s3b7 from '../../img/sartulebi/3/SART3-17.jpg';
import s3b8 from '../../img/sartulebi/3/SART3-18.jpg';

const ThirdFloor = () => {



    const [mesame_1] = useState([
        { id: '1', bina: '11', parti: '58.5', sazafxulo: '5.49', jami: '58.5', img: s3b1,gayiduli:true },
        { id: '2', bina: '12', parti: '58.85', sazafxulo: '5.19', jami: '58.85', img: s3b2,gayiduli:true},
        { id: '3', bina: '13', parti: '41.09', sazafxulo: '8.49', jami: '41.09', img: s3b3,gayiduli:true }

    ]);

    const [mesame_2] = useState([
        { id: '4', bina: '14', parti: '59.76', sazafxulo: '4,25', jami: '59.76', img: s3b4,gayiduli:true },
        { id: '5', bina: '15', parti: '108.7', sazafxulo: '8.18', jami: '108.7', img: s3b5 },
        { id: '6', bina: '16', parti: '61.94', sazafxulo: '8.94', jami: '61.94', img: s3b6,gayiduli:false }

    ]);

    const [mesame_3] = useState([
        { id: '7', bina: '17', parti: '61.90', sazafxulo: '8.94', jami: '61.90', img: s3b7,gayiduli:true },
        { id: '8', bina: '18', parti: '52.01', sazafxulo: '5.43', jami: '52.01', img: s3b8, gayiduli: true }

    ]);





    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    სართული 3
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; სართულებზე დაბრუნება </a>

            </div>
            <p className="warning">მთლიანის სადარბაზოს სანახავად რეკომედირებულია ფართო ეკრანი</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={process.env.PUBLIC_URL + sadarbazo3} /></div>



            {/* ------START OF THE ROW------ */}
            <div className="row">
                {mesame_1.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>

                                <div className="card__details">
                                    <ul>

                                        <li>ბინა №{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>გაყიდულია</li> :
                                                <React.Fragment>
                                                    <li>ფართი {info.parti}კვ.მ</li>
                                                    <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" alt="mesame sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">მთლიანი ფართი</p>
                                        <p className="card__price-value">{info.jami}მ²</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}

            {/* ------START OF THE ROW------ */}
            <div className="row">
                {mesame_2.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>

                                <div className="card__details">
                                    <ul>

                                        <li>ბინა №{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>გაყიდულია</li> :
                                                <React.Fragment>
                                                    <li>ფართი {info.parti}კვ.მ</li>
                                                    <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" alt="mesame sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                         <p className="card__price-only">მთლიანი ფართი</p>
                                        <p className="card__price-value">{info.jami}მ²</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}


            {/* ------START OF THE ROW------ */}
            <div className="row">
                {mesame_3.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>

                                <div className="card__details">
                                    <ul>

                                        <li>ბინა №{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>გაყიდულია</li> :
                                                <React.Fragment>
                                                    <li>ფართი {info.parti}კვ.მ</li>
                                                    <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture"  alt="mesame sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                         <p className="card__price-only">მთლიანი ფართი</p>
                                        <p className="card__price-value">{info.jami}მ²</p>
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

export default ThirdFloor;