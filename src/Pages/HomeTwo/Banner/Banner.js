import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner__area-two" style={{backgroundImage: `url('assets/img/banner.jpg')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-content"> 
                            <h1>Red<span style={{color: '#c31c30'}}>Tree</span> <br/>Real Estate</h1><h2 style={{marginBottom: '40px'}}>Invest in Lucrative Mega Projects for Monthly Discounts and Annual Appreciation</h2><Link className="theme-btn-1" to="/portfolio-two">All Project <i className="fal fa-long-arrow-right"></i></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-two-bottom">
                <div className="container">
                    <div className="banner__area-two-bottom-icon">
                        <ul>
                            <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to=""><i className="fab fa-behance"></i></Link></li>
                            <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;