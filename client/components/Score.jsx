import React, { Component } from 'react';

const Score = ({ handleChange, id }) => {
  return (
    <div className="score">
      <input type="text" id={id} onChange={handleChange} placeholder="Enter score" />
    </div>
  );
};

export default Score;
