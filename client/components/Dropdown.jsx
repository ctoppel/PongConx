import React from 'react';

const Dropdown = ({ handleOption, users, id }) => {
  const options = [];

  users.forEach((user, i) => {
    options.push(
      <option key={i} value={JSON.stringify(user)}>
        {user.first_name} {user.last_name.slice(0, 1)}.
      </option>);
  });

  return (
    <div className="dropdown">
      <select onChange={handleOption} id={id} defaultValue="select_player">
        <option value="select_player" disabled>Select Player</option>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
