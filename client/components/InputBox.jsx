import React from 'react';

const InputBox = ({ handleChange, scorePlaceholder, id }) =>
  (
    <div className="score">
      <input type="text" id={id} onChange={handleChange} placeholder={scorePlaceholder} />
    </div>
  );

export default InputBox;
