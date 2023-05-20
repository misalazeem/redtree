import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    const featuresData = [
        {
            title: 'Personalized Investment Advice',
            description: 'Receive expert personalized investment advice in Rawalpindi, Pakistan, tailored to your unique financial goals and risk tolerance. Our experienced advisors empower you to make informed decisions, optimizing your portfolio for long-term financial success.'
        },
        {
            title: 'Exclusive Access to Projects',
            description: 'Get exclusive access to high-potential mega projects for investment in Rawalpindi, Pakistan. Our rigorous analysis ensures you capitalize on opportunities, with projects offering monthly discounts and annual appreciation for maximum returns.'
        },
        {
            title: 'Ongoing Portfolio Management',
            description: 'Experience comprehensive portfolio management services in Rawalpindi, Pakistan. Our expert team maximizes your investments, identifying market opportunities and implementing strategic adjustments to achieve your financial goals.'
        },
    ];
    const [active, setActive] = useState(1);
    const handelActive = index => {
        setActive(index);
    };

    return (
        <div className="features__area-two">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                {featuresData.map((item, index) => (
                    <div className="col-xl-4 col-lg-4" key={index}>
                        <div 
                            className={`features__area-two-item ${active === index ? 'active' : ''}`}                            
                            onMouseEnter={() => handelActive(index)}
                        >
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <Link className="simple-btn" to="/services-details">Discover More<i className="far fa-long-arrow-right"></i></Link>
                            <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;