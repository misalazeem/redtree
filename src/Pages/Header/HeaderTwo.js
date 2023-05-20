import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "./Menu";
import DropDown from "./DropDown";

const HeaderTwo = ({variant}) => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
    }, []);
    return (
        <>
            <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-active" : ""}`}>
            <div className="container">
                <div className="header__area-box">
                    <div className="header__area-box-logo">
                        <Link to='/'><img src="assets/img/logo.png" alt="" /></Link>
                    </div>
                    <div className="header__area-box-menu">
                        <div className="header__area-box-main-menu">
                            <ul className="mobile__menu" >
                                <li className="menu-item-has-children">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="">About Us</Link>
                                    <DropDown>
                                        <ul className="sub-menu">
                                        <Page />
                                        </ul>
                                    </DropDown>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="/news">News</Link>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                            <span className={mobileToggle ? "mobile-menu mobile-menu-active" : "mobile-menu"} onClick={() => setMobileToggle(!mobileToggle)}>
                                <span>                                    
                                {mobileToggle && (<div className="mobilemenu">
                                    <div className="mobilemenu-container">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    </div>
                                </div>
                                )}                                       
                                </span>
                            </span>
                        </div>
                        <div className="header__area-box-contact">
                            <div className="header__area-box-contact-icon">
                                <i className="fal fa-phone-alt"></i>
                            </div>
                            <div className="header__area-box-contact-content">
                                <span>Quick Help</span>
                                <h6><a href="tel:+123(458)896895">+92 325 255 2695</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default HeaderTwo;