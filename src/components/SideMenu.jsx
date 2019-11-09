import React from 'react';

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
    </div>
  )
}

export default SideMenu;