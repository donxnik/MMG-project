import React, { useState } from 'react';
import sadarbazo2 from '../../img/sadarbazoebi/sadarbazo2.jpg';


import s2b1 from '../../img/sartulebi/2/SART2-3.jpg';
import s2b2 from '../../img/sartulebi/2/SART2-4.jpg';
import s2b3 from '../../img/sartulebi/2/SART2-5.jpg';
import s2b4 from '../../img/sartulebi/2/SART2-6.jpg';
import s2b5 from '../../img/sartulebi/2/SART2-7.jpg';
import s2b6 from '../../img/sartulebi/2/SART2-8.jpg';
import s2b7 from '../../img/sartulebi/2/SART2-9.jpg';
import s2b8 from '../../img/sartulebi/2/SART2-10.jpg';


const SecondFloor = () => {



    const [meore_1] = useState([
        { id: '1', bina: '3', parti: '107.67', sazafxulo: '15.54', jami:'107.67', img: s2b1},
        { id: '2', bina: '4', parti: '43.11',jami:'43.11',img: s2b2,gayiduli:true },
        { id: '3', bina: '5', parti: '60.02',sazafxulo: '4.49',jami:'60.02', img: s2b3,gayiduli:false }

    ]);
    const [meore_2] = useState([
        { id: '4', bina: '6', parti: '57.59', sazafxulo: '4.25',jami:'57.59', img: s2b4},
        { id: '5', bina: '7', parti: '50.80',sazafxulo:'4.15',jami:'50.80',img: s2b5 },
        { id: '6', bina: '8', parti: '53.07',sazafxulo: '4.03',jami:'53.07‬', img: s2b6 }

    ]);

    const [meore_3] = useState([
        { id: '7', bina: '9', parti: '46.04', sazafxulo: '3.55',jami:'46.04', img: s2b7,gayiduli:true},
        { id: '8', bina: '10', parti: '87.02',sazafxulo:'11.33',jami:'87.02', img: s2b8 }
    ]);



    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    სართული 2
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; სართულებზე დაბრუნება </a>

            </div>
            <p className="warning">მთლიანის სადარბაზოს სანახავად რეკომედირებულია ფართო ეკრანი</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={process.env.PUBLIC_URL + sadarbazo2} alt="meore sartulis sadarbazo"/></div>
           


            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meore_1.map(info => {
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
                                                    {!!info.sazafxulo ? <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li> : null }
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" src={process.env.PUBLIC_URL + info.img}  alt="meore sartuli"/>
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
                {meore_2.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__details">
                                    <ul>

                                        <li>ბინა №{info.bina}</li>
                                        <li>ფართი {info.parti}კვ.მ</li>
                                        {!!info.sazafxulo ? <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li> : null }

                                    </ul>
                                </div>
                                <img className="card__picture"  src={process.env.PUBLIC_URL + info.img} alt="meore sartuli"/>
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
                {meore_3.map(info => {
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
                                                    {!!info.sazafxulo ? <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li> : null }
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture"  src={process.env.PUBLIC_URL + info.img} alt="meore sartuli"/>
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

export default SecondFloor;