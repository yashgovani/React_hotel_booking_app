import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../component/Hero';
import Banner from '../component/Banner';

const Errors = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/home" className="btn-primary">
          Return To the Home Page
        </Link>
      </Banner>
    </Hero>
  );
};

export default Errors;
