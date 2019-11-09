import React, { useState } from 'react';
import Nav from './Nav';
import ArticleData from './ArticleData';
import getArticles from '../js/getArticles.json';

const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }
  return (
    <div>
      <div style={{ display: 'flex', flex: 0 }}>
        <Nav toggleDropdown={toggleDropdown} />
      </div>
      {dropdown &&
        <div className='dropdown-options'>
          Dashboard
        </div>
      }
      <div style={{ display: 'flex', flex: 11 }} >
        <ArticleData data={getArticles.women} />
      </div>
    </div>
  )
}

export default Dashboard;