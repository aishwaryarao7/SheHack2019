import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({selectDisplay}) => {
  return (
    <div className='side-menu' style={{ display: 'flex', flexDirection:'column' }}>
      <div className='side-menu-item' onClick={()=>selectDisplay('account')}>
        Account
      </div>
      <div className='side-menu-item' onClick={()=>selectDisplay('saved')}>
        Saved Items
      </div>
      <div className='side-menu-item' onClick={()=>selectDisplay('interests')}>
        Interests
      </div>
      <Link className='side-menu-item' style={{ textDecoration: 'none', color: 'black' }} to='/signout'>Logout</Link>
    </div>
  )
}

export default SideMenu;