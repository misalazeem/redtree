import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import HomeTwo from './Pages/HomeTwo/HomeTwo/HomeTwo';
import NewsDetails from './Pages/News/NewsDetails';
import NewsStandard from './Pages/News/NewsStandard';
import PortfolioDetailsTwo from './Pages/Portfolio/PortfolioDetailsTwo';
import PortfolioTwo from './Pages/Portfolio/PortfolioTwo';
import Preloader from './Pages/Preloader/Preloader';
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import ServicesDetails from './Pages/Services/ServicesDetails';
import ServicesPage from './Pages/Services/ServicesPage';

function App() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <>
            {loader && <Preloader />}
            <Router><Routes>
                <Route path="/redtree" element={<HomeTwo />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-details" element={<ServicesDetails />} />
                <Route path="/portfolio" element={<PortfolioTwo />} />
                <Route path="/portfolio-details" element={<PortfolioDetailsTwo />} />
                <Route path="/news" element={<NewsStandard />} />
                <Route path="/news-details" element={<NewsDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes></Router>
            <ScrollTop />
        </>
    )
}

export default App;
