import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Login from './Login';
import Logout from './Logout';
import '../styles/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/login'>
          <Login />          
        </Route>
        <Route path='/signup'>
          <SignUp />          
        </Route>
        <Route path='/home'>
          <Dashboard />
        </Route>
        <Route path='/signout'>
          <Logout />
        </Route>
      </div>
    </Router>
  )
}

export default App;
