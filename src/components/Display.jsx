import React, {useState} from 'react';
import ArticleData from './ArticleData';
import SideMenu from './SideMenu';

const renderData = (mode, data) => {
  switch(mode) {
    case 'home':
      return (
        <ArticleData data={data} />
      )
    case 'explore':
      return (
        <div>Explore</div>
      )
    case 'discover':
      return (
        <div>Discover</div>
      )
    case 'account':
      return (
        <div>account</div>
      )
    case 'saved':
      return (
        <div>saved</div>
      )
    case 'interests':
      return (
        <div>interests</div>
      )
    default: return null;
  }
}

const Display = ({data, mode, selectDisplay}) => {
  return (
    <div className='display' style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 2 }}>
        <SideMenu selectDisplay={selectDisplay} />
      </div>
      {renderData(mode, data)}
    </div>
  )
}

export default Display;