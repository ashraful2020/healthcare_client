import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Emergency from '../Emergency/Emergency';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Emergency></Emergency>
      </div>

  );
};

export default Home;