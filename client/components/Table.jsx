import React from 'react'
import Side from './Side.jsx'

const Table = ({ handleOption, handleChange, handleSubmit, users, user1info, user2info, scorePlaceholder }) =>
  (
    <div className="table">
      <Side handleOption={handleOption} handleChange={handleChange} users={users} user1info={user1info} user2info={user2info} scorePlaceholder={scorePlaceholder} id="side1" />
      <Side handleOption={handleOption} handleChange={handleChange} users={users} user1info={user1info} user2info={user2info} scorePlaceholder={scorePlaceholder} id="side2" />
    </div>
  );

export default Table;
