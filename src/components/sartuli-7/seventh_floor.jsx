import React, { useState } from 'react';

import sadarbazo7 from '../../img/sadarbazoebi/sadarbazo7.jpg';



import s7b1 from '../../img/sartulebi/7/S7-19.jpg';
import s7b2 from '../../img/sartulebi/7/S7-20.jpg';
import s7b3 from '../../img/sartulebi/7/S7-21.jpg';
import s7b4 from '../../img/sartulebi/7/S7-22.jpg';
import s7b5 from '../../img/sartulebi/7/S7-23.jpg';
import s7b6 from '../../img/sartulebi/7/S7-24.jpg';
import s7b7 from '../../img/sartulebi/7/S7-25.jpg';
import s7b8 from '../../img/sartulebi/7/S7-26.jpg';
import s7b9 from '../../img/sartulebi/7/S7-27.jpg';

const SeventhFloor = () => {



    const [meshvide_1] = useState([
        { id: '1', bina: '19', parti: '58.84', sazafxulo: '5.49', jami: '58.84', holi: '2.1', misagebi: '17.9', samzareulo: '6.8', sadzinebeli: '10.7/10.8', WC: '3.6', img: s7b1,gayiduli:true},
        { id: '2', bina: '20', parti: '40.64', sazafxulo: '5.19', jami: '40.64', holi: '4.2', misagebi: '13.8', samzareulo: '4.0', sadzinebeli: '7.8', WC: '4.5', img: s7b2,gayiduli:true  },
        { id: '3', bina: '21', parti: '40.55', sazafxulo: '4.33', jami: '40.55', holi: '4.4', misagebi: '10.6', samzareulo: '4.0', sadzinebeli: '12.3', WC: '3.7', img: s7b3,gayiduli:true }

    ]);

    const [meshvide_2] = useState([
        { id: '4', bina: '22', parti: '75.14', sazafxulo: '8.41', jami: '75.14', holi: '5.3', misagebi: '17.3', samzareulo: '7.1', sadzinebeli: '9.8/7.7/13.6', WC: '4.0', img: s7b4 },
        { id: '5', bina: '23', parti: '49.74', sazafxulo: '4.15', jami: '49.74', holi: '2.0', misagebi: '13.1', samzareulo: '8.5', sadzinebeli: '8.8/8.1', WC: '3.5', img: s7b5,gayiduli:true },
        { id: '6', bina: '24', parti: '57.48', sazafxulo: '4.03', jami: '57.48', holi: '4.5', misagebi: '12.3', samzareulo: '5.9', sadzinebeli: '12.0/13.0', WC: '4.2', img: s7b6,gayiduli:true  }
    ]);

    const [meshvide_3] = useState([
        { id: '7', bina: '25', parti: '62.73', sazafxulo: '8.94', jami: '62.73', holi: '5.4', misagebi: '12.5', samzareulo: '6.6', sadzinebeli: '14.5/7.9', WC: '4.7', img: s7b7,gayiduli:true },
        { id: '8', bina: '26', parti: '62.73', sazafxulo: '8.94', jami: '62.73', holi: '5.4', misagebi: '12.5', samzareulo: '6.6', sadzinebeli: '14.4/7.8', WC: '4.7', img: s7b8,gayiduli:true },
        { id: '9', bina: '27', parti: '47.76', sazafxulo: '5.43', jami: '47.76', holi: '2.3', misagebi: '12.8', samzareulo: '2.9', sadzinebeli: '10.0/9.5', WC: '3.3', img: s7b9,gayiduli:true }
    ]);



    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    ????????????????????? 7
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; ?????????????????????????????? ??????????????????????????? </a>

            </div>
            <p className="warning">???????????????????????? ?????????????????????????????? ??????????????????????????? ????????????????????????????????????????????? ??????????????? ??????????????????</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={process.env.PUBLIC_URL + sadarbazo7} /></div>
            <div className="u-center-text u-margin-bottom-medium"><img src="https://drive.google.com/uc?id=19-EYIpiFcWT3a0oMKp8GdEd5Koq9bUs5" /></div>


            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meshvide_1.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>
                                
                                <div className="card__details">
                                    <ul>

                                        <li>???????????? ???{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>???????????????????????????</li> :
                                                <React.Fragment>
                                                    <li>??????????????? {info.parti}??????.???</li>
                                                    <li>??????????????????????????? ??????????????? {info.sazafxulo}??????.???</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" alt="meshvide sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                    <p className="card__price-only">????????????????????? ???????????????</p>
                                        <p className="card__price-value">{info.jami}?????</p>
                                    </div>
                                    <a href={"#popup" + info.id} className="btn btn-white">???????????????????????????</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}

            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meshvide_2.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>
                               
                                <div className="card__details">
                                    <ul>

                                        <li>???????????? ???{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>???????????????????????????</li> :
                                                <React.Fragment>
                                                    <li>??????????????? {info.parti}??????.???</li>
                                                    <li>??????????????????????????? ??????????????? {info.sazafxulo}??????.???</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" alt="meshvide sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                    <p className="card__price-only">????????????????????? ???????????????</p>
                                        <p className="card__price-value">{info.jami}?????</p>
                                    </div>
                                    <a href={"#popup" + info.id} className="btn btn-white">???????????????????????????</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}

            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meshvide_3.map(info => {
                    return <div key={info.id} className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" style={info.gayiduli ? { color:'red'} : null}>
                                
                                <div className="card__details">
                                    <ul>

                                        <li>???????????? ???{info.bina}</li>
                                        {
                                            info.gayiduli ?
                                                <li>???????????????????????????</li> :
                                                <React.Fragment>
                                                    <li>??????????????? {info.parti}??????.???</li>
                                                    <li>??????????????????????????? ??????????????? {info.sazafxulo}??????.???</li>
                                                </React.Fragment>
                                        }

                                    </ul>
                                </div>
                                <img className="card__picture" alt="meshvide sartuli" src={process.env.PUBLIC_URL + info.img} />
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                    <p className="card__price-only">????????????????????? ???????????????</p>
                                        <p className="card__price-value">{info.jami}?????</p>
                                    </div>
                                    <a href={"#popup" + info.id} className="btn btn-white">???????????????????????????</a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* ------END OF THE ROW------ */}






            {meshvide_1.map(banner => {
                return (
                    <div key={banner.id} className="popup" id={"popup" + banner.id}>
                        <div className="popup__content">
                            <div className="card__details popup__list">
                                <ul>
                                    <li>???????????? {banner.bina}</li>
                                    <li>????????????: {banner.holi}?????</li>
                                    <li>???????????????????????? ???????????????: {banner.misagebi}?????</li>
                                    <li>??????????????????????????????: {banner.samzareulo}?????</li>
                                    <li>??????????????????????????????: {banner.sadzinebeli}?????</li>
                                    <li>WC: {banner.WC}?????</li>
                                </ul>
                            </div>
                            <a href="#tour" className="popup__close">&times;</a>
                        </div>
                    </div>
                )
            })}

            {meshvide_2.map(banner => {
                return (
                    <div key={banner.id} className="popup" id={"popup" + banner.id}>
                        <div className="popup__content">
                            <div className="card__details popup__list">
                                <ul>
                                    <li>???????????? {banner.bina}</li>
                                    <li>????????????: {banner.holi}?????</li>
                                    <li>???????????????????????? ???????????????: {banner.misagebi}?????</li>
                                    <li>??????????????????????????????: {banner.samzareulo}?????</li>
                                    <li>??????????????????????????????: {banner.sadzinebeli}?????</li>
                                    <li>WC: {banner.WC}?????</li>
                                </ul>
                            </div>
                            <a href="#tour" className="popup__close">&times;</a>
                        </div>
                    </div>
                )
            })}

            {meshvide_3.map(banner => {
                return ( 
                    <div key={banner.id} className="popup" id={"popup" + banner.id}>
                        <div className="popup__content">
                            <div className="card__details popup__list">
                                <ul>
                                    <li>???????????? {banner.bina}</li>
                                    <li>????????????: {banner.holi}?????</li>
                                    <li>???????????????????????? ???????????????: {banner.misagebi}?????</li>
                                    <li>??????????????????????????????: {banner.samzareulo}?????</li>
                                    <li>??????????????????????????????: {banner.sadzinebeli}?????</li>
                                    <li>WC: {banner.WC}?????</li>
                                </ul>
                            </div>
                            <a href="#tour" className="popup__close">&times;</a>
                        </div>
                    </div>
                )
            })}

        </div>

    );
};

export default SeventhFloor;