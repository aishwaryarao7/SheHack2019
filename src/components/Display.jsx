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
        <ArticleData data={data} />
      )
    case 'discover':
      return (
        <ArticleData data={data} />
      )
    case 'account':
      return (
        <ArticleData data={data} />
      )
    case 'saved':
      return (
        <ArticleData data={data} />
      )
    case 'interests':
      return (
        <ArticleData data={data} />
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