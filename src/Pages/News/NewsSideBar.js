import React from 'react';
import { Link } from 'react-router-dom';

const NewsSideBar = () => {
    return (
        <>
        <div className="all__sidebar ml-25 xl-ml-0">
            <div className="all__sidebar-item">
                <h4>Search Here</h4>
                <div className="all__sidebar-item-search">
                    <form action="#">
                        <input type="text" placeholder="Search....." required />
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4>Tag</h4>
                <div className="all__sidebar-item-tag">
                    <ul>
                        <li><Link to="">Stable Returns</Link></li>
                        <li><Link to="">Investment Opportunities</Link></li>
                        <li><Link to="">Rental Income</Link></li>
                        <li><Link to="">Market Research</Link></li>
                        <li><Link to="">Developemnt</Link></li>
                        <li><Link to="">Real Estate Investments</Link></li>
                    </ul>
                </div>
            </div>
        </div>            
        </>
    );
};

export default NewsSideBar;