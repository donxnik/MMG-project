import React from 'react';
import './contact.style.scss';

const Contact = () => {
    return (
        <section className="section-contact">
            <div className="row">
                
                <div className="book">
                    <div className="book__form">
                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary">
                                საკონტაქტო ინფრომაცია
                    </h2>
                        </div>
                        
                        <h3 className="heading-contact u-margin-bottom-small"><span className="light-info">მისამართი:</span> ქ.თბილისი დასახლება მუხიანი მიკრო/რაიონი IVბ 42 კოპუსის მიმდებარედ</h3>
                        <h3 className="heading-contact u-margin-bottom-small"><span className="light-info">ტელეფონი:</span> 595 11 91 11</h3>
                        <h3 className="heading-contact u-margin-bottom-small"><span className="light-info">ელ-ფოსტა:</span> mmggroup20@Gmail.com</h3>
                        <a href="https://www.facebook.com/www.mmg.ge/" className="btn btn-green">მოგვწერეთ</a>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;