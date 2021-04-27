import React from 'react';
import logo from '../service/images/logo.png';
import { FaAlignJustify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/home">
              <img src={logo} alt="Hotel Booking" className="logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
