import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import NewSession from '../NewSession/NewSession';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <Features></Features>
        <NewSession></NewSession>
      </div>
    );
};

export default Home;