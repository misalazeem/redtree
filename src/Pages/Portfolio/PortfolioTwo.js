import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';

const PortfolioTwo = () => {
    pageTitle('Portfolio Two');
    return (
        <>
        <Header></Header>
        <div className="portfolio__column-two section-padding">
            <div className="container">
                <div className="row"> 
                    <div className="col-xl-6 col-md-6 mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="assets/img/mogc.png" alt="Mall of Garden City" />
                            <div className="portfolio__column-two-item-content">
                                <span>Mall of Garden City</span>
                                <h4><Link to="/portfolio-details">More Details</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 md-mb-30">
                        <div className="portfolio__column-two-item">
                            <img className="img__full" src="assets/img/Dot.png" alt="Dot by Al-Jamal" />
                            <div className="portfolio__column-two-item-content">
                                <span>Dot by Al-Jamal</span>
                                <h4><Link to="/portfolio-details">More Details</Link></h4> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 mt-60 t-center">
                        <Link className="theme-btn-1" to="">All Project<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>           
        </>
    );
};

export default PortfolioTwo;