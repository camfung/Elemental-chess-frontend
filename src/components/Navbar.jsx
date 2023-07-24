import React from 'react';
import NavButton from './ui/RedirectButton';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavButton label="Home" pageName="home"></NavButton>
      </ul>
    </nav>
  );
};

export default NavBar;
