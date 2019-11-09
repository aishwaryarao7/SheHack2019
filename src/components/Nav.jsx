import React, { useState } from 'react';

const Nav = ({toggleDropdown}) => {
  return (
    <div className='nav'>
      <div className='logo nav-options'>
        Logo
      </div>
      <div className='nav-center'>
        <div className='nav-options nav-home'>Home</div>
        <div className='nav-options nav-discover'>Discover</div>
        <div className='nav-options nav-explore'>Explore</div>
      </div>
      <div className='nav-options'>
        <div className='nav-search'>
          <input placeholder='Search' className='search' />
        </div>
      </div>
      <div className='nav-dropdown'>
        <i class="material-icons" onClick={toggleDropdown}>
          dehaze
        </i>
      </div>
    </div>
  )
}

export default Nav;