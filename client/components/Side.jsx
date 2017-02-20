import React from 'react';
import Dropdown from './Dropdown.jsx';
import User from './User.jsx';
import InputBox from './InputBox.jsx';

const Side = ({ handleOption, handleChange, users, user1info, user2info, scorePlaceholder, id }) =>
  (
    <div className="Side">
      <Dropdown handleOption={handleOption} users={users} id={id} />
      <User users={users} user1info={user1info} user2info={user2info} id={id} />
      <InputBox handleChange={handleChange} scorePlaceholder={scorePlaceholder} id={id} />
    </div>
  );

export default Side;
