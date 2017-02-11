import React, { Component } from 'react';

const Btn = ({ handleSubmit }) => {
  return (
    <div className="btn">
      <button className="myButton" onClick={handleSubmit}>
        Submit results
      </button>
    </div>
  );
};

export default Btn;
