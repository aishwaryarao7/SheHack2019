import React from 'react';

const renderArticles = (data) => {
  return data.map((article, index)=>{
    return (
      <div className='article-list-item' onClick={window.open(article.url)}>
        <img src={article.image_url} style={{height: 300, width: 500 }} />
        <div className='article-title'>
          {article.title}
        </div>
        <div>
          {article.subtitle}
        </div>
      </div>
    )
  })
}

const ArticleData = ({data}) => {
  return (
    <div className='article-data'>
      {renderArticles(data)}
    </div>
  )
}

export default ArticleData;