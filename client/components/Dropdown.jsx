import React, { Component } from 'react';

const Dropdown = ({ handleOption, users, id }) => {
  // const users = ['curt', 'joe', 'jon', 'mike'];
  const options = [];

  users.forEach((user, i) => {
    options.push(<option key={i} value={JSON.stringify(user)}>{user.first_name} {user.last_name.slice(0,1)}.</option>);
  });

  return (
    <div className="dropdown">
      <select onChange={handleOption} id={id} >
        <option value="" disabled selected>Select Player</option>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
