import React, { useState } from 'react';
import logo from '../images/logo.png';

const Nav = ({toggleDropdown, selectDisplay}) => {
  return (
    <div className='nav'>
      <div style={{position: 'relative', top: '-50'}}></div>
      <div className='logo nav-options'>
        <img
          onClick={()=>selectDisplay('home')}
          style={{ height: 40, width: 50 }} src={logo}
        />
      </div>
      <div className='nav-center'>
        <div
          className='nav-options nav-home'
          onClick={()=>selectDisplay('home')}
        >
          Home
        </div>
        <div
          className='nav-options nav-discover'
          onClick={()=>selectDisplay('discover')}
        >
          Discover
        </div>
        <div
          className='nav-options nav-explore'
          onClick={()=>selectDisplay('explore')}
        >
          Explore
        </div>
      </div>
      <div className='nav-options' style={{ flex: 2, marginRight: 20 }}>
        <div className='nav-search'>
          <input placeholder='Search' className='search' />
        </div>
      </div>
      <div className='nav-dropdown'>
        <i className="material-icons nav-dropdown" onClick={toggleDropdown}>
          dehaze
        </i>
      </div>
    </div>
  )
}

export default Nav;