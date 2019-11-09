import React, { useState } from 'react';
import Nav from './Nav';
import Display from './Display';
import getArticles from '../js/getArticles.json';

const Dashboard = () => {
  const [displayMode, setDislay] = useState('home');  
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  const selectDisplay = (mode) => {
    setDislay(mode);
  }
  return (
    <div>
        <Nav toggleDropdown={toggleDropdown} selectDisplay={selectDisplay} />
      {dropdown &&
        <div className='dropdown-options'>
          Dashboard
        </div>
      }
        <Display data={getArticles.women} mode={displayMode} selectDisplay={selectDisplay} />
    </div>
  )
}

export default Dashboard;