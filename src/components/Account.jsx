import React from 'react';

const Account = ({ data }) => {
  return (
    <div className='account'>
      <div style={{ margin: 10, paddingBottom: 15 }}>
        <div className='heading' style={{fontSize: 20}}>
          Account Information
        </div>
      </div>
      <div className='account-item'>
        <div>
          Name:
        </div>
        <div>
          {data.name}
        </div>
      </div>
      <div className='account-item'>
        <div>
          email:
        </div>
        <div>
          {data.email}
        </div>
      </div>
      <div className='account-item'>
        <div>
          Contact:
        </div>
        <div>
          {data.phone}
        </div>
      </div>
      <div className='account-item'>
        <div>
          Date of Birth:
        </div>
        <div>
          {data.dob}
        </div>
      </div>
      <div className='account-item'>
        <div>
          Profession:
        </div>
        <div>
          {data.profession}
        </div>
      </div>
    </div>
  )
}

export default Account;