import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/HeaderTwo';
import { pageTitle } from '../PageTitle';

const PortfolioDetailsTwo = () => {
    pageTitle('Portfolio Details');
    return (
        <>
        <Header></Header>
        <div className="portfolio__details-two section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__details-two-left">
                            <div className="portfolio__details-two-left-content">
                                <h2 className="mb-30">Mall of Garden City</h2>
                                <p className="mb-20">Welcome to the Mall of Garden City, a prestigious and captivating destination located in Rawalpindi, Pakistan. This iconic project offers an unparalleled shopping and leisure experience for visitors of all ages. With its prime location and modern architecture, the Mall of Garden City stands as a beacon of style and sophistication. Indulge in a world-class shopping extravaganza as you explore a vast array of retail outlets, featuring renowned national and international brands. From fashion and accessories to electronics and home decor, our diverse collection of stores caters to every discerning shopper's taste. Not only does the Mall of Garden City offer an unparalleled shopping experience, but it also boasts a delightful culinary journey. Savor a wide range of delectable cuisines at our food courts, which showcase an exquisite blend of local and international flavors. Whether you're craving traditional Pakistani dishes or international delicacies, our food courts are sure to tantalize your taste buds. Beyond shopping and dining, the Mall of Garden City presents a host of entertainment options for the entire family. Catch the latest blockbuster movies at our state-of-the-art cinemas or immerse yourself in thrilling games at the dedicated gaming zone. Additionally, our spacious event venues provide the perfect setting for memorable concerts, exhibitions, and social gatherings. With ample parking facilities and a commitment to exceptional customer service, the Mall of Garden City ensures a seamless and enjoyable visit for all guests. Join us as we redefine the shopping experience and create unforgettable memories in the heart of Rawalpindi.</p>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <h3>Mall of Garden City Investment Options</h3>
                        <p>Please note that these are not the only investment options, Contact further for tailer-made investment options according to your budget</p><br/><br/>
                        <div className="row mb-30">
                            <div className="col-sm-6 sm-mb-30">
                                <img className="img__full" src="assets/img/mogc1.png" alt="MOGC Investment Option 1" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img__full" src="assets/img/mogc2.png" alt="MOGC Investment Option 2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 sm-mb-30">
                                <img className="img__full" src="assets/img/mogc3.png" alt="MOGC Investment Option 3" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img__full" src="assets/img/mogc4.png" alt="MOGC Investment Option 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="Dot">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__details-two-left">
                            <div className="portfolio__details-two-left-content">
                                <h2 className="mb-30">Dot by Al-Jamal</h2>
                                <p className="mb-20">Welcome to Dot by Al-Jamal, an exceptional office building offering unparalleled investment opportunities. RedTree is proud to present this prestigious development, providing clients with a unique chance to invest in the future of commercial real estate. Dot by Al-Jamal caters to a diverse range of investors, offering tailor-made investment options to suit individual budgets and preferences. Whether you are a seasoned investor looking for a customized investment plan or seeking to purchase entire floors, our dedicated team is here to assist you every step of the way. One of the key advantages of investing in Dot by Al-Jamal is the enticing monthly discounts available to our esteemed clients. These exclusive discounts provide an attractive incentive, allowing investors to enjoy immediate cost savings while benefiting from long-term value appreciation. The strategic location of Dot by Al-Jamal further enhances its investment potential. Situated in a highly sought-after area, this office building offers excellent connectivity and access to prominent business hubs, transportation networks, and a wide range of amenities. Such a prime location ensures high demand and potential rental income for investors. At RedTree, we understand the importance of financial growth and wealth creation. That's why we have meticulously curated investment opportunities in Dot by Al-Jamal that promise annual appreciation, providing our clients with the potential for significant returns on their investment. Investing in Dot by Al-Jamal not only secures a prime commercial asset but also positions investors to benefit from the thriving business environment and future economic growth of the area. With its modern infrastructure, state-of-the-art facilities, and innovative design, Dot by Al-Jamal stands as a symbol of prestige and success. Discover the power of commercial real estate investment with Dot by Al-Jamal and RedTree. Our expertise, commitment to excellence, and unparalleled investment options ensure that you make informed investment decisions and maximize your returns in the thriving commercial property market.</p>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <h3>Dot by Al-Jamal Investment Options</h3>
                        <p>Please note that these are not the only investment options, Contact further for tailer-made investment options according to your budget</p><br/><br/>
                        <div className="row mb-30">
                            <div className="col-sm-6 sm-mb-30">
                                <img className="img__full" src="assets/img/dot1.jpg" alt="Dot Investment Option 1" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img__full" src="assets/img/dot2.jpg" alt="Dot Investment Option 2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 sm-mb-30">
                                <img className="img__full" src="assets/img/dot3.jpg" alt="Dot Investment Option 3" />
                            </div>
                            <div className="col-sm-6">
                                <img className="img__full" src="assets/img/dot4.jpg" alt="Dot Investment Option 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>        
        <Footer></Footer>            
        </>
    );
};

export default PortfolioDetailsTwo;