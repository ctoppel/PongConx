import React, { Component } from 'react';
import Dropdown from './Dropdown.jsx';
import User from './User.jsx';
import Score from './Score.jsx';

const Side = ({ handleOption, handleChange, users, user1info, user2info, id }) => {
  return (
    <div className="Side">
      <Dropdown handleOption={handleOption} users={users} id={id} />
      <User users={users} user1info={user1info} user2info={user2info} id={id}/>
      <Score handleChange={handleChange} id={id} />
    </div>
  );
};

export default Side;
