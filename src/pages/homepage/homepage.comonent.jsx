import React from 'react';


import Header from '../../layouts/header'
import About from '../../layouts/about/about';
import Finance from '../../layouts/finance/finance.component'
import Tour from '../../layouts/tour/tour.component'
import Contact from '../../layouts/contact/contact.component'
import Footer from '../../layouts/footer/footer.component';
import Popup from '../../layouts/popup/popup.component';


import './homepage.style.scss';

const HomePage = () => {
    return (
        <div className="body">
            <Header />
            <main>
            <About />
            <Finance/>
            <Tour/>
            <Contact />
            {/* <Floor /> */}
            <Footer />
            <Popup />
            </main>
            
        </div>
    );
};

export default HomePage;