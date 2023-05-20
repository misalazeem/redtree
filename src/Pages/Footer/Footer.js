import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        {/* <!-- Footer Area Start --> */}
        <div className="footer__area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-about m-0">
                                <div className="footer__area-widget-about-logo">
                                    <Link to="index.html"><img src="assets/img/logo.png" alt="" /></Link>
                                </div>
                                <p> Your Investment Partner. Unlock financial success with our expert investment advice, lucrative opportunities, and exceptional portfolio management. Experience growth with RedTree today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                        <div className="row">
                            <div className="col-7">
                                <div className="footer__area-widget">
                                    <h4 className="mb-40">Opportunities</h4>
                                    <div className="footer__area-widget-menu">
                                        <ul>
                                            <li><Link to="/redtree/portfolio-details">Mall of Garden City</Link></li>
                                            <li><Link to="/redtree/portfolio-details">Dot by Al-Jamal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="footer__area-widget">
                                    <h4 className="mb-40">Link</h4>
                                    <div className="footer__area-widget-menu">
                                        <ul>
                                            <li><Link to="/redtree">Home</Link></li>
                                            <li><Link to="/redtree/services">Services</Link></li>
                                            <li><Link to="/redtree/news">News</Link></li>
                                            <li><Link to="/redtree/portfolio">Portfolio</Link></li>
                                            <li><Link to="/redtree/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="footer__area-widget">
                            <div className="footer__area-widget-subscribe">
                                <h4>Subscribe</h4>
                                <form action="#">
                                    <input type="text" placeholder="Email Address" required />
                                    <button type="submit"><i className="fal fa-hand-pointer"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer Area End --> */}
        {/* <!-- Copyright Area Start --> */}
        <div className="copyright__area">
            <div className="container">
                <div className="row align-items-center copyright__area-border">
                    <div className="col-xl-6 col-lg-6 col-md-8 md-mb-20">
                        <div className="copyright__area-left md-t-center">
                            <p>Copyright © 2023<Link to="index.html"> RedTree</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4">
                        <div className="copyright__area-right t-right md-t-center">
                            <ul>
                                <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Copyright Area End */}
        </>
    );
};

export default Footer;