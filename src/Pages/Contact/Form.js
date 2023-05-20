import React from 'react';

const Form = () => {
    return (
        <>
        <form action="#">
            <div className="row">
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="name" placeholder="Your Name" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="number" name="phonenumber" placeholder="Phone Number" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-25">
                    <div className="contact__area-bottom-form-item">
                        <input type="text" name="subject" placeholder="Subject" required /> 
                    </div>
                </div>
                <div className="col-sm-12 mb-30">
                    <div className="contact__area-bottom-form-item">
                        <textarea name="message" rows="5" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="contact__area-bottom-form-item">
                        <button className="theme-btn-1" type="submit">Submit Now<i className="far fa-long-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </form>            
        </>
    );
};

export default Form;