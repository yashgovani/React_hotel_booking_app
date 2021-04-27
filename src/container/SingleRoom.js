import React from 'react';
import defaultBcg from '../service/images/room-1.jpeg';
//import Hero from '../component/Hero';
import Banner from '../component/Banner';
import StyledHero from '../component/StyledHero';
import { RoomContext } from '../context/context';
import { Link } from 'react-router-dom';

class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>Room Does Not Exists...</h3>
          <Link to="/rooms" className="btn-primary">
            Go Back To Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Go Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'Free Breakfast Available'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Additional Benefits</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
        <center>
          <div style={{ marginBottom: '15px' }}>
            <Link to="/checkout" className="btn-primary">
              Checkout
            </Link>
          </div>
        </center>
      </>
    );
  }
}

export default SingleRoom;
