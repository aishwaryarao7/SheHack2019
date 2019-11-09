import React, { useState } from 'react';
import Nav from './Nav';
import Display from './Display';
import getArticles from '../js/getArticles.json';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [displayMode, setDisplay] = useState('home');  
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  const selectDisplay = (mode) => {
    setDisplay(mode);
  }
  return (
    <div>
        <Nav toggleDropdown={toggleDropdown} selectDisplay={selectDisplay} />
      {dropdown &&
        <div className='dropdown-options'>
          <div className='dropdown-option' onClick={()=>{setDisplay('account')}}>Account</div>
          <div className='dropdown-option' onClick={()=>{setDisplay('interests')}}>Interests</div>
          <div className='dropdown-option' onClick={()=>{setDisplay('explore')}}>Explore</div>
          <Link className='dropdown-option' to='/signout'>Logout</Link>
        </div>
      }
        <Display data={getArticles.women} mode={displayMode} selectDisplay={selectDisplay} />
    </div>
  )
}

export default Dashboard;