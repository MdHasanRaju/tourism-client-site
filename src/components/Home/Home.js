import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import NewSession from '../NewSession/NewSession';
import Services from '../Services/Services';

// to get the time we should go to timestamp epoch converter website and need to convert it into milliseconds

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <Features></Features>
        <NewSession countdownTimestampMs={1664042400000}></NewSession>
      </div>
    );
};

export default Home;