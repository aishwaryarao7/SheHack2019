import React from 'react';
import logo from '../images/logo.png';

const SignUp = () => {
  return (
    <div className='sign-up'>
      <div>
        <div>
          <img alt='' style={{ height: 40, width: 45, paddingTop: 10 }} src={logo} />
        </div>
        <div>
          Sign Up
        </div>
      </div>
      <div>
        <input style={{ width: '90%' }} placeholder='Full Name' />
      </div>
      <div>
        <input style={{ width: '41.5%' }} placeholder='Email' />
        <input style={{ width: '41.5%' }} placeholder='Phone Number' />
      </div>
      <div>
        <input style={{ width: '41.5%' }} placeholder='Date of Birth' />
        <input style={{ width: '41.5%' }} placeholder='Profession' />
      </div>
      <div>
        <input style={{ width: '90%' }} placeholder='password' />
      </div>
      <div>
        <div>
          <button className='sign-up-button'>Sign Up</button>
        </div>
        <div className='log-in-link'>
          Already have an account? Sign In
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default SignUp;