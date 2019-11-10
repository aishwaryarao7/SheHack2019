import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Podcast = ({ interest }) => {
  const [podcasts, setPodcasts] = useState({});

  const fetchPodcasts = async () => {
    const response = await axios.get(`https://itunes.apple.com/search?term=women+empowerment&entity=podcast`);
    setPodcasts(response.data);
  }

  useEffect(() => {
    fetchPodcasts()
  }, [])

  if (podcasts == {}) {
    return (
      <div>Loading.....</div>
    )
  }
  else if (podcasts.resultCount > 1) {
    return (
      <div className='article-data' style={{ display: 'flex', flexDirection: 'column' }}>
        {podcasts.results.map((p, index) => {
          return (
            <div style={{ padding: 10, marginTop: 10 }} onClick={()=>window.open(p.trackViewUrl)}>
              <img className='podcast-image' src={p.artworkUrl30} />
              <div className='article-subtitle'>{p.collectionName}</div>
              <div></div>
            </div>
          )
        })}
      </div>
    )
  } return null;
}

export default Podcast;