import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Login from './Login';
import '../styles/main.css';

const App = () => {
  const [podcasts, setPodcasts] = useState({});
  return (
    <div className='app'>
      <Login />
    </div>
  )
}

export default App;
