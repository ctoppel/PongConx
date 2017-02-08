import React, { Component } from 'react';
import Dropdown from './Dropdown.jsx';
import User from './User.jsx';
import Score from './Score.jsx';

const Side = ({ id, handleChange }) => {
  return (
    <div className="Side">
      <Dropdown />
      <User />
      <Score id={id} />
    </div>
  );
};

export default Side;
