import React, { Component } from 'react';

const Dropdown = ({ }) => {
  const users = ['curt', 'joe', 'jon', 'mike'];
  const options = [];

  users.forEach((user, i) => {
    options.push(<option key={i} value={user}>{user}</option>);
  });

  return (
    <div className="dropdown">
      <select>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
