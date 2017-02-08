import React, { Component } from 'react';
import Table from './Table.jsx';
import Btn from './Btn.jsx';

const Main = ({ handleOption, handleChange, handleSubmit, users }) => {
  return (
    <div className="main">
      <Table handleOption={handleOption} handleChange={handleChange} users={users} />
      <Btn handleSubmit={handleSubmit} />
    </div>
  );
};

export default Main;
