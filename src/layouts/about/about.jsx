import React from 'react';
import './about.style.scss';


import image1 from '../../img/korpusi1.jpg'
import image2 from '../../img/korpusi2.jpg'
import image3 from '../../img/korpusi3.jpg'

const About = () => {
    return (
       
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        ჩვენი ახალი პროექტი
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                             მშენებლობა მიმდინარეობს მუხიანში
                        </h3>
                        <p className="paragraph">
                        ინფორმაცია მალე დაემატება!
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">
                            მშენებლობა მიმდინარეობს მუხიანში
                        </h3>
                        <p className="paragraph">
                        ინფორმაცია მალე დაემატება!
                        </p>

                        <a href="https://www.facebook.com/www.mmg.ge/" target="_blank" className="btn-text">გაიგე მეტი &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={image1} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={image2} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={image3} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default About;