import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';
import Form from './Form';

const Contact = () => {
    pageTitle('Contact Us');
    return (
        <>
        <Header></Header>
        <div className="contact__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact__area-title">
                            <span className="subtitle">Contact Us</span>
                            <h2>Need Yor any help Contact with Us</h2> 
                        </div>
                        <div className="contact__area-info">
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-phone-alt"></i>
                                    <span>Phone :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="tel:+923252552695">+92 325 2552695</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                    <span>Email :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <a href="mailto:uhfshaazt@gamil.com">uhfshaaaz@gamil.com</a>
                                </div>
                            </div>
                            <div className="contact__area-info-item">
                                <div className="contact__area-info-item-icon">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Location :</span>
                                </div>
                                <div className="contact__area-info-item-content">
                                    <Link to="#"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact__area-bottom">
                            <div className="contact__area-bottom-form page">
                                <Form></Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Contact;