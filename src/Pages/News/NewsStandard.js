import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';
import NewsPagination from './NewsPagination';
import NewsSideBar from './NewsSideBar';

const NewsStandard = () => {
    pageTitle('News');
    const newsData = [
        {
            id: 1,
            date: '07 Feb, 2023',
            comment: '2 Comment',
            title: 'Effective Investment Strategies for Long-Term Financial Growth',
            description: 'When it comes to achieving long-term financial growth, implementing effective investment strategies is essential. RedTree offers expert guidance on developing a comprehensive investment strategy tailored to your specific financial goals and risk tolerance. One key aspect is portfolio diversification, which involves spreading your investments across different asset classes to mitigate risk. By allocating your funds to a mix of stocks, bonds, real estate, and other investments, you can minimize exposure to any single market or sector. Additionally, asset allocation plays a crucial role in optimizing your investment portfolio. RedTrees experienced advisors analyze your financial objectives and risk profile to determine the ideal allocation of assets. This strategic approach aims to strike a balance between growth opportunities and stability, ensuring that your investments align with your long-term goals. Stay informed about market trends and economic indicators to make well-informed investment decisions. RedTrees team of experts regularly monitors market movements and conducts thorough research to identify lucrative opportunities. By staying ahead of the curve, we help you capitalize on emerging trends and adjust your investment strategy accordingly. Unlock your potential for long-term financial growth with RedTrees effective investment strategies. Our personalized approach, backed by in-depth market analysis, empowers you to navigate the ever-changing investment landscape and achieve your financial aspirations.',
            image: 'assets/img/news1.png',
            href: '/news-details',
        },
        {
            id: 2,
            date: '05 Feb, 2023',
            comment: '3 Comment',
            title: 'Navigating Volatile Markets: Essential Tips for Successful Investing',
            description: 'Successful investing requires navigating through volatile markets with confidence. RedTree provides essential tips to help you thrive in unpredictable market conditions. Firstly, maintaining a long-term perspective is crucial. Avoid getting caught up in short-term market fluctuations and focus on your investment goals over an extended period. This approach enables you to ride out temporary market downturns and benefit from long-term growth potential. Diversification is another key strategy for navigating volatile markets. By spreading your investments across various sectors, industries, and geographical regions, you reduce the risk of being heavily impacted by a single market event. RedTrees advisors help you identify diversified investment opportunities that align with your risk tolerance and financial objectives. Staying informed about economic indicators and global news is vital for making informed investment decisions. RedTrees experts provide up-to-date market insights and analysis, ensuring you have the information needed to navigate market fluctuations successfully. By understanding how economic factors and global events impact the markets, you can adjust your investment strategy accordingly. RedTrees proven track record of navigating volatile markets sets us apart. Our comprehensive approach, combined with our commitment to informed decision-making, helps you achieve stable returns even during uncertain times. Trust RedTree to be your partner in navigating the complexities of volatile markets and achieving your investment goals.',
            image: 'assets/img/news3.png',
            href: '/news-details',
        },
        {
            id: 3,
            date: '04 Feb, 2023',
            comment: '1 Comment',
            title: 'Unlocking Wealth: The Power of Real Estate Investments',
            description: 'Real estate investments have long been recognized as a powerful wealth-building tool, and RedTree is here to help you unlock the potential. Investing in real estate offers numerous advantages, including regular rental income, long-term appreciation, and diversification of your investment portfolio. With RedTrees guidance, you can tap into the world of real estate investing and leverage the power of income-generating properties. Residential and commercial real estate can provide a steady stream of rental income, allowing you to build wealth over time. We help you identify properties in high-demand areas that offer attractive rental yields, ensuring that your investments generate consistent cash flow. In addition to rental income, real estate investments offer the potential for long-term appreciation. Property values tend to increase over time, providing capital appreciation that enhances your overall wealth. RedTrees experts conduct thorough market research to identify properties with strong growth potential, allowing you to capitalize on the upward trajectory of real estate markets. Diversification is another advantage of real estate investments. By including real estate in your investment portfolio alongside stocks, bonds, and other assets, you spread your risk and protect against market volatility. RedTrees advisors help you identify the right mix of real estate investments to align with your financial goals and risk tolerance. Unlock the wealth-building potential of real estate with RedTree. Our expertise, coupled with our carefully selected investment opportunities, empowers you to maximize your investment returns and create long-term wealth through the power of property.',
            image: 'assets/img/news2.png',
            href: '/news-details',
        },
    ];
    return (
        <>
        <Header></Header>
        <div className="blog__standard section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        {newsData.map((item, id)=>(
                        <div className="blog__standard-item" key={id}>                        
                            <div className="blog__standard-item-image">
                                <Link to={item.href}><img src={item.image} alt="" /></Link>
                            </div>
                            <div className="blog__standard-item-meta">
                                <ul>
                                    <li><Link to="#"><i className="far fa-calendar-alt"></i>{item.date}</Link></li>
                                </ul>
                            </div>
                            <div className="blog__standard-item-content">
                                <h3><Link to={item.href}>{item.title}</Link></h3>
                                <p>{item.description}</p>
                                <Link className="simple-btn mt-35" to={item.href}>Discover More<i className="far fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        ))}
                        <NewsPagination></NewsPagination>
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

export default NewsStandard;