import React, { useState } from 'react';


import sadarbazo10 from '../../img/sadarbazoebi/sadarbazo10.jpg';


import s10b1 from '../../img/sartulebi/10/S10-46.jpg';
import s10b2 from '../../img/sartulebi/10/S10-47.jpg';
import s10b3 from '../../img/sartulebi/10/S10-48.jpg';
import s10b4 from '../../img/sartulebi/10/S10-49.jpg';
import s10b5 from '../../img/sartulebi/10/S10-50.jpg';
import s10b6 from '../../img/sartulebi/10/S10-51.jpg';
import s10b7 from '../../img/sartulebi/10/S10-52.jpg';
import s10b8 from '../../img/sartulebi/10/S10-53.jpg';
import s10b9 from '../../img/sartulebi/10/S10-54.jpg';

const TenthFloor = () => {



    const [meate_1] = useState([
        { id: '1', bina: '46', parti: '58.84', sazafxulo: '5.49', jami: '58.84', holi: '2.1', misagebi: '17.9', samzareulo: '6.8', sadzinebeli: '10.7/10.8', WC: '3.6', img: s10b1,gayiduli:true },
        { id: '2', bina: '47', parti: '40.64', sazafxulo: '5.19', jami: '40.64', holi: '4.2', misagebi: '13.8', samzareulo: '4.0', sadzinebeli: '7.8', WC: '4.5', img: s10b2,gayiduli:true },
        { id: '3', bina: '48', parti: '40.55', sazafxulo: '4.33', jami: '40.55', holi: '4.4', misagebi: '10.6', samzareulo: '4.0', sadzinebeli: '12.3', WC: '3.7', img: s10b3 ,gayiduli:true}

    ]);

    const [meate_2] = useState([
        { id: '4', bina: '49', parti: '75.14', sazafxulo: '8.41', jami: '75.14', holi: '5.3', misagebi: '17.3', samzareulo: '7.1', sadzinebeli: '9.8/7.7/13.6', WC: '4.0', img: s10b4,gayiduli:true},
        { id: '5', bina: '50', parti: '49.74', sazafxulo: '4.15', jami: '49.74', holi: '2.0', misagebi: '13.1', samzareulo: '8.5', sadzinebeli: '8.8/8.1', WC: '3.5', img: s10b5,gayiduli:true},
        { id: '6', bina: '51', parti: '57.48', sazafxulo: '4.03', jami: '57.48', holi: '4.5', misagebi: '12.3', samzareulo: '5.9', sadzinebeli: '12.0/13.0', WC: '4.2', img: s10b6,gayiduli:true}
    ]);

    const [meate_3] = useState([
        { id: '7', bina: '52', parti: '62.73', sazafxulo: '8.94', jami: '62.73', holi: '5.4', misagebi: '12.5', samzareulo: '6.6', sadzinebeli: '14.5/7.9', WC: '4.7', img: s10b7,gayiduli:true },
        { id: '8', bina: '53', parti: '62.73', sazafxulo: '8.94', jami: '62.73', holi: '5.4', misagebi: '12.5', samzareulo: '6.6', sadzinebeli: '14.4/7.8', WC: '4.7', img: s10b8,gayiduli:true },
        { id: '9', bina: '54', parti: '47.76', sazafxulo: '5.43', jami: '47.76', holi: '2.3', misagebi: '12.8', samzareulo: '2.9', sadzinebeli: '10.0/9.5', WC: '3.3', img: s10b9,gayiduli:true }
    ]);



    return (



        <div className="section-tours">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    ????????????????????? 10
                    </h2>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <a href="/sartulebi" className="btn-text ">&#8592; ?????????????????????????????? ??????????????????????????? </a>

            </div>
            <p className="warning">???????????????????????? ?????????????????????????????? ??????????????????????????? ????????????????????????????????????????????? ??????????????? ??????????????????</p>
            <div className="u-center-text u-margin-bottom-medium"><img className="myImg" src={process.env.PUBLIC_URL + sadarbazo10} /></div>
            <div className="u-center-text u-margin-bottom-medium"><img src="https://drive.google.com/uc?id=19-EYIpiFcWT3a0oMKp8GdEd5Koq9bUs5" /></div>


            {/* ------START OF THE ROW------ */}
            <div className="row">
                {meate_1.map(info => {
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
                                <img className="card__picture" alt="meate sartuli" src={process.env.PUBLIC_URL + info.img} />
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
                {meate_2.map(info => {
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
                                <img className="card__picture" alt="meate sartuli" src={process.env.PUBLIC_URL + info.img} />
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
                {meate_3.map(info => {
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
                                <img className="card__picture" alt="meate sartuli" src={process.env.PUBLIC_URL + info.img} />
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






            {meate_1.map(banner => {
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

            {meate_2.map(banner => {
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

            {meate_3.map(banner => {
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

export default TenthFloor;