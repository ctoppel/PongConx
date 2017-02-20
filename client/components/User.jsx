import React from 'react';

const User = ({ user1info, user2info, id }) => {
  function userInfo (id) {
    if (id === 'side1') {
      return (
        <div className="user">
          <div><span className="user-info">Name:</span> {user1info.first_name} {user1info.last_name}</div>
          <div><span className="user-info">Wins:</span> {user1info.wins}</div>
          <div><span className="user-info">Losses:</span> {user1info.losses}</div>
          <div><span className="user-info">Rating:</span> {user1info.rating}</div>
        </div>
      );
    }
    if (id === 'side2') {
      return (
        <div className="user">
          <div><span className="user-info">Name:</span> {user2info.first_name} {user2info.last_name}</div>
          <div><span className="user-info">Wins:</span> {user2info.wins}</div>
          <div><span className="user-info">Losses:</span> {user2info.losses}</div>
          <div><span className="user-info">Rating:</span> {user2info.rating}</div>
        </div>
      );
    }
  }

  return (
    // <div className="user">
    //   <div>{user1info.first_name} {user1info.last_name}</div>
    //   <div>{user1info.wins}</div>
    //   <div>{user1info.losses}</div>
    //   <div>{user1info.rating}</div>
    // </div>
    userInfo(id)
  );
};

export default User;
