import React from 'react';
import ButtonCluster from './ButtonCluster';
import RedirectButton from './RedirectButton';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Navbar.css"
const NavBar = () => {
  return (
    <>

      <div class="parent">

        <div class="div1">
          <div className="big-buttons">

            <div className='button-group'>
              <RedirectButton label="Quick Standard" />
              <RedirectButton label="Quick Random" flipped />
            </div>

            <div className='button-group right-buttons'>
              <RedirectButton pageName={"play"} label="Play" />
              <RedirectButton pageName={"teamBuilder"} label="Teams" flipped />
            </div>

          </div>
        </div>

        <div class="div2 right-buttons small">
          <div className="little-buttons">
            <RedirectButton label="Ranked Standard" />
            <RedirectButton label="Ranked Random" className='bottom-button' />
          </div>
          <div className="little-buttons right-buttons">
            <RedirectButton label="Private Game" />
            <RedirectButton label="Join Game" className='bottom-button' />
          </div>
        </div>

        <div class="div3 right-buttons">
          <div className="little-buttons">
            <RedirectButton label="Sets" flipped className='top-button' />
            <RedirectButton label="Monsters" flipped />
          </div>

        </div>

      </div>
    </>
  );
};

export default NavBar;
