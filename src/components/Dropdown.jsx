import React, { Component } from 'react';

const Dropdown = ({ handleOption, users, id }) => {
  // const users = ['curt', 'joe', 'jon', 'mike'];
  const options = [];

  users.forEach((user, i) => {
    options.push(<option key={i} value={user}>{user}</option>);
  });

  return (
    <div className="dropdown">
      <select onChange={handleOption} id={id}>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
