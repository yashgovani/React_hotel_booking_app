import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../component/RoomContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/home" className="btn-primary">
            Return To the Home Page
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
