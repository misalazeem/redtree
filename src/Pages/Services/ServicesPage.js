import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';

const ServicesPage = () => {
    pageTitle('Services');
    const servicesData = [
        {
            id: 1,
            title: 'Personalized Investment Advice',
            description: 'Receive expert personalized investment advice in Rawalpindi, Pakistan, tailored to your unique financial goals and risk tolerance. Our experienced advisors empower you to make informed decisions, optimizing your portfolio for long-term financial success.',
            imgOne: 'assets/img/icon/service-1.png',
            imgTwo: 'assets/img/icon/services-1.png',
            href: '/services-details',
        },
        {
            id: 2,
            title: 'Exclusive Access to Projects',
            description: 'Get exclusive access to high-potential mega projects for investment in Rawalpindi, Pakistan. Our rigorous analysis ensures you capitalize on opportunities, with projects offering monthly discounts and annual appreciation for maximum returns.',
            imgOne: 'assets/img/icon/service-2.png',
            imgTwo: 'assets/img/icon/services-2.png',
            href: '/services-details',
        },
        {
            id: 3,
            title: 'Ongoing Portfolio Management',
            description: 'Experience comprehensive portfolio management services in Rawalpindi, Pakistan. Our expert team maximizes your investments, identifying market opportunities and implementing strategic adjustments to achieve your financial goals.',
            imgOne: 'assets/img/icon/service-3.png',
            imgTwo: 'assets/img/icon/services-3.png',
            href: '/services-details',
        },
    ];
    const feedbackData = [
        {
            id: 1,
            name: 'Col. Gilani',
            title: 'UX Designer',
            description: 'I am extremely satisfied with the investment advice and services provided by RedTree. Their team of experts guided me through the investment process, helping me make informed decisions and achieve my financial goals. Thanks to their personalized approach, my investments have seen consistent growth and stability. I highly recommend RedTree to anyone looking for a trusted partner in their financial journey.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-1.jpg',
        },
        {
            id: 2,
            name: 'Usama',
            title: 'Marketing',
            description: '"RedTree has been instrumental in helping me diversify and grow my investment portfolio. Their comprehensive knowledge of different asset classes and their ability to identify lucrative opportunities have proven invaluable. The teams professionalism, dedication, and commitment to my financial success have exceeded my expectations. I am grateful for their guidance and highly recommend their services to anyone seeking expert investment advice.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-2.jpg',
        },
        {
            id: 3,
            name: 'Ahsen',
            title: 'Developer',
            description: 'Working with RedTree has been a game-changer for my investments. Their strategic approach and in-depth market analysis have provided me with a clear roadmap to achieve my financial objectives. The teams responsiveness, transparency, and personalized attention have instilled confidence in me as an investor. I appreciate their commitment to my long-term financial growth and would wholeheartedly recommend RedTree to anyone seeking a reliable investment advisor.',
            quote: 'assets/img/icon/quote.png',
            avatar: 'assets/img/avatar/feedback-3.jpg',
        },
    ];
    return (
        <>
        <Header></Header>
            <div className="services__page section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-6 col-lg-8">
                            <div className="services__page-title lg-t-center">
                                <span className="subtitle">Our Services</span>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servicesData.map((item, id)=>(
                            <div className="col-xl-12" key={id}>
                                <div className="services__page-item">
                                    <div className="services__page-item-left">
                                        <div className="services__page-item-left-icon">
                                            <img src={item.imgOne} alt="" />
                                        <div className="services__area-item-icon-one">
                                            <img src={item.imgTwo} alt="" />
                                        </div>
                                        </div>
                                        <div className="services__page-item-left-content">
                                            <h4><Link to='#'>{item.title}</Link></h4>
                                        </div>
                                    </div>
                                    <div className="services__page-item-center">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="services__page-item-right">
                                        <Link to='#'><i className="fal fa-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="feedback__area section-padding">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-12">
                            <div className="feedback__area-title">
                                <span className="subtitle-one">Our Reviews</span>
                                <h2>Awesome client Feedback</h2>                         
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {feedbackData.map((item, id)=>(
                            <div className="col-xl-4 col-lg-6" key={id}>
                                <div className="feedback__area-item">
                                    <div className="feedback__area-item-quote">
                                        <img src={item.quote} alt="" />
                                    </div>
                                    <div className="feedback__area-item-reviews">
                                        <h5>Good :</h5>
                                        <ul>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                            <li><Link to=''><i className="fas fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="feedback__area-item-content">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="feedback__area-item-bottom">
                                        <div className="feedback__area-item-bottom-avatar">
                                            <img src={item.avatar} alt="" />
                                        </div>
                                        <div className="feedback__area-item-bottom-title">
                                            <h5>{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <Footer></Footer>        
        </>
    );
};

export default ServicesPage;