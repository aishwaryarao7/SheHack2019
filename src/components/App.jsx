import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import '../styles/main.css';

const App = () => {
  const [podcasts, setPodcasts] = useState({});
  return (
    <div className='app'>
      <Dashboard />
    </div>
  )
}

export default App;
