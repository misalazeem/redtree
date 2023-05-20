import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogData = [
      {
        id: 1,
        title: 'Effective Investment Strategies for Long-Term Financial Growth',
        date: '07 Feb, 2023',
        image: 'assets/img/news1.png',
        comment: '4 Comment',
        href: '/redtree/news-details',
      },
      {
        id: 2,
        title: 'Navigating Volatile Markets: Essential Tips for Successful Investing',
        date: '05 Feb, 2023',
        image: 'assets/img/news3.png',
        comment: '2 Comment',
        href: '/redtree/news-details',
      },
      {
        id: 3,
        title: 'Unlocking Wealth: The Power of Real Estate Investments',
        date: '04 Feb, 2023',
        comment: '3 Comment',
        image: 'assets/img/news2.png',
        href: '/redtree/news-details',
      }
    ];
    return (
        <div className="blog__area section-padding">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="blog__area-title"> 
                            <span className="subtitle-one">News & Blog</span>
                            <h2>News & Insights</h2> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogData.map((item, id)=>(
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-30" key={id}>
                            <div className="blog__area-item">
                                <div className="blog__area-item-image">
                                    <Link to={item.href}><img src={item.image} alt="" /></Link>
                                </div>
                                <div className="blog__area-item-content">
                                    <div className="blog__area-item-content-meta">
                                        <ul>
                                            <li><Link to="#"><i className="fal fa-calendar-alt"></i>{item.date}</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to={item.href}>{item.title}</Link></h4> 
                                    <Link className="simple-btn" to={item.href}>Read More<i className="far fa-long-arrow-right"></i></Link> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;