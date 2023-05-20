import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';
import NewsSideBar from './NewsSideBar';

const NewsDetails = () => {
    pageTitle('News Details');
    return (
        <>
        <Header></Header>        
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="blog__details-left">
                            <img src="assets/img/news1.png" alt="Effective Investment" />
                            <div className="blog__details-left-meta">
                                <ul>
                                    <li><Link to="#"><i className="fal fa-user"></i>By - Admin</Link></li>
                                    <li><Link to="#"><i className="fal fa-calendar-alt"></i>07, March 2023</Link></li>
                                </ul>
                            </div>
                            <h3 className="mb-20">Effective Investment Strategies for Long-Term Financial Growth</h3>
                            <p>When it comes to achieving long-term financial growth, implementing effective investment strategies is essential. RedTree offers expert guidance on developing a comprehensive investment strategy tailored to your specific financial goals and risk tolerance. One key aspect is portfolio diversification, which involves spreading your investments across different asset classes to mitigate risk. By allocating your funds to a mix of stocks, bonds, real estate, and other investments, you can minimize exposure to any single market or sector. Additionally, asset allocation plays a crucial role in optimizing your investment portfolio. RedTree's experienced advisors analyze your financial objectives and risk profile to determine the ideal allocation of assets. This strategic approach aims to strike a balance between growth opportunities and stability, ensuring that your investments align with your long-term goals. Stay informed about market trends and economic indicators to make well-informed investment decisions. RedTree's team of experts regularly monitors market movements and conducts thorough research to identify lucrative opportunities. By staying ahead of the curve, we help you capitalize on emerging trends and adjust your investment strategy accordingly. Unlock your potential for long-term financial growth with RedTree's effective investment strategies. Our personalized approach, backed by in-depth market analysis, empowers you to navigate the ever-changing investment landscape and achieve your financial aspirations. </p>
                            <div className="blog__details-left-box">
                                <div className="blog__details-left-box-icon">
                                    <img src="assets/img/icon/quote.png" alt="" />
                                </div>
                                <p>The stock market is filled with individuals who know the price of everything, but the value of nothing. Invest wisely and focus on long-term growth.</p>
                                <h6>Warren Buffett</h6>                                
                            </div>
                            
                            <div className="blog__details-left-related">
                                <div className="row align-items-center">
                                    <div className="col-md-7 md-mb-30">
                                        <div className="blog__details-left-related-tag">
                                            <h6>Tags</h6>                                      
                                            <ul>
                                                <li><Link to="">Investment Strategies</Link></li>
                                                <li><Link to="">Financial Goals</Link></li>
                                                <li><Link to="">Investment Decisions</Link></li>
                                                <li><Link to="">Personalized Approach</Link></li>
                                                <li><Link to="">Investment Opportunities</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-5 t-right md-t-left">
                                        <div className="blog__details-left-related-share">
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-behance"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-youtube"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details-left-post mb-55">

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <NewsSideBar></NewsSideBar>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default NewsDetails;