import React, { useState } from 'react';
import logo from '../images/logo.png';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClick = () => {
    if(email == null || password == null) {
      alert('Please fill all the fields before clicking submit')
    }
  }

  return (
    <div className='sign-up'>
      <div style={{ paddingTop: 20 }}>
        <div>
          <img style={{ height: 40, width: 45, paddingTop: 10 }} src={logo} />
        </div>
        <div>
          Login
        </div>
        <input style={{ width: '90%' }} placeholder='email' />
        <input style={{ width: '90%' }} placeholder='password' />
        <button className='sign-up-button'>Login</button>
        <div className='log-in-link'>
          Dont have an account? Sign Up
        </div>
      </div>
    </div>
  )
}

export default Login;