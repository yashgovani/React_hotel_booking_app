import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import Services from '../component/Services';
import FeaturedRooms from '../component/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Quality Rooms"
          subtitle="Single Economy starts at $100 minimum"
        >
          <Link to="/rooms" className="btn-primary">
            Available Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
