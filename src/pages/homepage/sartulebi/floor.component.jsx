import React from 'react';
import './floor.style.scss';
import { Link } from 'react-router-dom';

const Floor = () => {



    return (
        <section className="section-stories">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    აირჩიეთ სართული
                    </h2>
                <div className="u-margin-top-small">
                    <p>1 სართული : საოფისე ფართები</p>
                    <p>2 - 10 სართული : ბინები</p>
                </div>
            </div>

            <div className="u-center-text u-margin-top-small">
                <a href="/" className="btn btn-green">მთავარი გვერდი</a>
            </div>

            <div className="row">


                <section className="story">
                    <Link to={'sartulebi/10'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">10</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/9'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">9</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/8'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">8</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/7'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">7</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/6'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">6</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/5'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">5</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/4'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">4</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/3'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">3</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>

                <section className="story">
                    <Link to={'sartulebi/2'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">2</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>


                <section className="story">
                    <Link to={'sartulebi/1'} className="story__link">
                        <figure className="story__shape">
                            <h1><span className="story__bonus">1</span>  სართული</h1>
                        </figure>
                    </Link>
                </section>
            </div>
        </section>
    );
};

export default Floor;