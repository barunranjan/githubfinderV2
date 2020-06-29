import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { className, title, icon } = props;
  return (
    <nav className={className}>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  className: 'navbar bg-primary',
  icon: ' fab fa-github',
  title: 'Github Finder',
};
Navbar.porpType = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
