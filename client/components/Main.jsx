import React, { Component } from 'react';
import Table from './Table.jsx';
import Btn from './Btn.jsx';

const Main = ({ handleChange, handleSubmit }) => {
  return (
    <div className="main">
      <Table handleChange={handleChange} />
      <Btn handleSubmit={handleSubmit} />
    </div>
  );
};

export default Main;
