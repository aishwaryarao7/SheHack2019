import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import shenews from '../images/shenews.png';

const renderArticles = (data) => {
  return data.map((article, index) => {
    return (
      <div onClick={()=>window.open(article.url)}>
        <div style={{ flex: 10 }} key={index} className='article-list-item'>
          <img className='article-image' src={article.image_url} />
          <div className='article-title'>
            {article.title}
          </div>
          <div className='article-subtitle'>
            {article.subtitle}
          </div>
        </div>
      </div>
    )
  })
}

const ArticleData = ({ data }) => {
  return (
    <div className='article-data'>
      <div className='heading'>
        Recommended for you
      </div>  
      {renderArticles(data)}
    </div>
  )
}

export default ArticleData;