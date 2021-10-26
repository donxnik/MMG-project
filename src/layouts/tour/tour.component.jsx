import React, { useState } from 'react';
import './tour.style.scss';

import {Link} from 'react-router-dom';

import sur1 from '../../img/sartulebi/5/S5-b1.jpg';
import s8b5 from '../../img/sartulebi/8/S8-32.jpg';
import s9b2 from '../../img/sartulebi/9/S9-38.jpg';

const Tour = () => {


    const [reklama] = useState([
        { id: '1', bina: '1', parti: '58.84', sazafxulo: '5.49', jami: '64.33', holi: '2.1', misagebi: '17.9', samzareulo: '6.8', sadzinebeli: '10.7/10.8', WC: '3.6', img: sur1 },
        { id: '5', bina: '32', parti: '49.74', sazafxulo: '4.15', jami: '53.89', holi: '2.0', misagebi: '13.1', samzareulo: '8.5', sadzinebeli: '8.8/8.1', WC: '3.5', img: s8b5 },
        { id: '2', bina: '38', parti: '40.64', sazafxulo: '5.19', jami: '45.83', holi: '4.2', misagebi: '13.8', samzareulo: '4.0', sadzinebeli: '7.8', WC: '4.5', img: s9b2 }

    ]);


    return (
      
            <section className="section-tours" id="tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        პოპულარული ბინის ფართები
                    </h2>
                </div>

                {/* ------START OF THE ROW------ */}
            <div className="row">
                {reklama.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                               
                                <div className="card__details">
                                    <ul>

                                        <li>ბინა №{info.bina}</li>
                                        <li>ფართი {info.parti}კვ.მ</li>
                                        <li>საზაფხულო ფართი {info.sazafxulo}კვ.მ</li>

                                    </ul>
                                </div>
                                <img className="card__picture" src={info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        {/* <p className="card__price-only">66.7მ²</p> */}
                                        <p className="card__price-value">{info.jami}მ²</p>
                                    </div>
                                    <a href={"#reklama" + info.id} className="btn btn-white">დეტალურად</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}

            {reklama.map(banner => {
                return (
                    <div key={banner.id} className="popup" id={"reklama" + banner.id}>
                        <div className="popup__content">
                            <div className="card__details popup__list">
                                <ul>
                                    <li>ბინა {banner.bina}</li>
                                    <li>ჰოლი: {banner.holi}მ²</li>
                                    <li>მისაღები ოთახი: {banner.misagebi}მ²</li>
                                    <li>სამზარეულო: {banner.samzareulo}მ²</li>
                                    <li>საძინებელი: {banner.sadzinebeli}მ²</li>
                                    <li>WC: {banner.WC}მ²</li>
                                </ul>
                            </div>
                            <a href="#tour" className="popup__close">&times;</a>
                        </div>
                    </div>
                )
            })}

                <div className="u-center-text u-margin-top-big">
                    {/* <a  href="/sartulebi" className="btn btn-green">ყველა ბინა</a> */}
                    <Link className="btn btn-green" to={'/sartulebi'}>ყველა ბინა</Link>
                </div>
            </section>
     
    );
};

export default Tour;