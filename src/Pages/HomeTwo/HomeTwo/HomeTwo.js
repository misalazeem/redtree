import React from 'react';
import Footer from '../../Footer/Footer';
import HeaderTwo from '../../Header/HeaderTwo';
import { pageTitle } from '../../PageTitle';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Features from '../Features/Features';
import Portfolio from '../Portfolio/Portfolio';
import Skill from '../Skill/Skill';

const HomeTwo = () => {
    pageTitle('Home');
    return (
        <>
            <HeaderTwo></HeaderTwo>
            <Banner></Banner>
            <Features></Features>
            <Portfolio></Portfolio>
            <Skill></Skill>
            <Blog></Blog>
            <Footer></Footer>
        </>
    );
};

export default HomeTwo;