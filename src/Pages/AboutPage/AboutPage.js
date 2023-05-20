import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';

const AboutPage = () => {
    pageTitle('About Us');
    const teamData = [
        {
            id: 1,
            name: 'Afshan Gilani',
            title: 'CEO & Founder',
            image: 'assets/img/team/team-2.jpg',
        },
    ];    
    return (
        <>
            <Header></Header>                
            <div className="about__page section-padding pb-100">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__page-title">
                                <span className="subtitle">About Us</span>
                                <h2>RedTree Real Estate</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-100">
                        <div className="col-xl-12">
                            <div className="about__page-area">
                                <img src="assets/img/about-us.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3>About Us</h3>
                        <div style={{marginBottom: '10px'}}></div>
                        <p>Welcome to RedTree, a leading investment advisory firm dedicated to helping clients achieve their financial goals and build a secure future. With our expertise in investment management and a client-centric approach, we strive to provide personalized solutions that drive long-term wealth creation.</p>
                        <p>At RedTree, we understand that every individual's financial journey is unique. That's why we offer tailored investment advice and strategies to meet your specific needs and aspirations. Whether you are a seasoned investor or just starting your investment journey, our team of experienced professionals is here to guide you every step of the way.</p>
                        <div style={{marginBottom: '15px'}}></div>
                        <h4>Our Services:</h4>
                        <div style={{marginBottom: '15px'}}></div>
                        <ol>
                            <li>Personalized Investment Advice: We believe in a personalized approach to investment management. Our team takes the time to understand your financial goals, risk tolerance, and time horizon, enabling us to create a customized investment plan that aligns with your objectives.</li>
                            <li>Strategic Portfolio Construction: With a focus on diversification and risk management, we construct investment portfolios that are designed to optimize returns while minimizing risk. Our team diligently analyzes market trends, asset classes, and investment opportunities to ensure that your portfolio remains well-positioned for long-term growth.</li>
                            <li>Ongoing Portfolio Monitoring and Adjustments: Your financial journey doesn't end with portfolio creation. We provide continuous monitoring of your investments and make adjustments as needed to adapt to changing market conditions and economic trends. Our proactive approach ensures that your portfolio remains aligned with your goals and helps you capitalize on emerging opportunities.</li>
                        </ol>
                        <div style={{marginBottom: '15px'}}></div>
                        <h4>Why Choose RedTree:</h4>
                        <div style={{marginBottom: '15px'}}></div>
                        <ol>
                            <li>Expertise and Experience: Our team consists of seasoned investment advisors with extensive industry knowledge and a track record of success. We stay abreast of market trends, regulatory changes, and economic developments to provide you with informed and reliable advice.</li>
                            <li>Client-Centric Approach: At RedTree, our clients are at the center of everything we do. We prioritize your financial well-being and take the time to understand your unique circumstances and goals. By building long-lasting relationships based on trust and transparency, we are committed to helping you achieve financial success.</li>
                            <li>Comprehensive Range of Investment Options: We offer a wide range of investment options tailored to meet the diverse needs of our clients. From equities and bonds to real estate and alternative investments, we provide access to a well-rounded selection of opportunities, ensuring that your investment portfolio is well-diversified.</li>
                            <li>Ethical Standards: RedTree upholds the highest ethical standards in all aspects of our business. We prioritize transparency, integrity, and fiduciary responsibility, putting your interests first and ensuring that our recommendations are always in your best interest.</li>
                        </ol>
                        <div style={{marginBottom: '15px'}}></div>
                        <p>At RedTree, our mission is to empower you to make informed investment decisions, build wealth, and secure your financial future. Discover the difference of working with a trusted investment advisor and start your journey toward financial success with RedTree.</p>
                        <p>Contact us today to schedule a consultation and take the first step toward achieving your investment goals.</p>
                    </div>
                </div>
            </div>
            <div className="team__area">
                <div className="container">
                    <div className="row mb-30 team__area-border">
                        <div className="col-xl-12">
                            <div className="team__area-title lg-t-center">
                                <span className="subtitle">Team</span>
                                <h2>Experience</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamData.map((item, id)=>(
                        <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                            <div className="team__area-item">
                                <div className="team__area-item-image">
                                    <img src={item.image} alt="" />
                                    <div className="team__area-item-image-social">
                                        <ul>
                                            <li><Link to=''><i className="fab fa-twitter"></i></Link> </li>
                                            <li><Link to=''><i className="fab fa-behance"></i></Link> </li>
                                            <li><Link to=''><i className="fal fa-basketball-ball"></i></Link> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team__area-item-content">
                                    <h5>{item.name}</h5>
                                    <span>{item.title}</span>
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

export default AboutPage;