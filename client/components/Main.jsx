import React from 'react';
import Table from './Table.jsx';
import Btn from './Btn.jsx';

const Main = ({ handleOption, handleChange, handleSubmit, users, user1info, user2info, scorePlaceholder }) =>
  (
    <div className="main">
      <Table handleOption={handleOption} handleChange={handleChange} users={users} user1info={user1info} user2info={user2info} scorePlaceholder={scorePlaceholder} />
      <Btn handleSubmit={handleSubmit} />
    </div>
  );

export default Main;
