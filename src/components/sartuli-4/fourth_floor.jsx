import React, { useState } from 'react';
import sadarbazo4 from '../../img/sadarbazoebi/sadarbazo4.jpg';



import s4b1 from '../../img/sartulebi/4/SART4-19.jpg';
import s4b2 from '../../img/sartulebi/4/SART4-20.jpg';
import s4b3 from '../../img/sartulebi/4/SART4-21.jpg';
import s4b4 from '../../img/sartulebi/4/SART4-22.jpg';
import s4b5 from '../../img/sartulebi/4/SART4-23.jpg';
import s4b6 from '../../img/sartulebi/4/SART4-24.jpg';
import s4b7 from '../../img/sartulebi/4/SART4-25.jpg';
import s4b8 from '../../img/sartulebi/4/SART4-26.jpg';

const FourthFloor = () => {



    const [meotxe_1] = useState([
        { id: '1', bina: '19', parti: '58.5', sazafxulo: '5.49', jami: '58.5',  img: s4b1,gayiduli:true },
        { id: '2', bina: '20', parti: '58.85', sazafxulo: '5.19', jami: '58.85',  img: s4b2 },
        { id: '3', bina: '21', parti: '51.09', sazafxulo: '8.49', jami: '51.09',  img: s4b3, gayiduli:true }

    ]);

    const [meotxe_2] = useState([
        { id: '4', bina: '22', parti: '64.76', sazafxulo: '4,25', jami: '64.76',  img: s4b4,gayiduli:true },
        { id: '5', bina: '23', parti: '118.7', sazafxulo: '8.18', jami: '118.7',  img: s4b5, gayiduli:false },
        { id: '6', bina: '24', parti: '61.94', sazafxulo: '8.94', jami: '61.94',  img: s4b6 }

    ]);

    const [meotxe_3] = useState([
        { id: '7', bina: '25', parti: '61.90', sazafxulo: '8.94', jami: '61.90',  img: s4b7 },
        { id: '8', bina: '26', parti: '52.01', sazafxulo: '5.43', jami: '52.01',  img: s4b8, gayiduli:true }

    ]);



    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    სართული 4
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; სართულებზე დაბრუნება </a>

            </div>
            <p className="warning">მთლიანის სადარბაზოს სანახავად რეკომედირებულია ფართო ეკრანი</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={process.env.PUBLIC_URL + sadarbazo4} /></div>
           


           
            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meotxe_1.map(info => {
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
                                <img className="card__picture" alt="meotxe sartuli" src={process.env.PUBLIC_URL + info.img} />
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
                {meotxe_2.map(info => {
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
                                <img className="card__picture" alt="meotxe sartuli" src={process.env.PUBLIC_URL + info.img} />
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
                {meotxe_3.map(info => {
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
                                <img className="card__picture" alt="meotxe sartuli" src={process.env.PUBLIC_URL + info.img} />
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

export default FourthFloor;