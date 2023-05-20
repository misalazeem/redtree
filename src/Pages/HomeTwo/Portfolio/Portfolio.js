import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title lg-t-center"> 
                            <span className="subtitle">RedTree</span>
                            <h2>Current Projects with Opportunities</h2> 
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/mogc.png" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Mall of Garden City</span>
                                        <h4><Link to="/portfolio-details">More Details</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/mogc-full.png" alt="Mall of Garden City" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Mall of Garden City</span>
                                        <h4><Link to="/portfolio-details">More Details</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/dot-full.png" alt="Dot by Al-Jamal" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text"> 
                                        <span>Dot By Al-Jamal</span>
                                        <h4><Link to="/portfolio-details">More Details</Link></h4> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;