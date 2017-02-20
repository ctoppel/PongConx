import React from 'react';

const Btn = ({ handleSubmit }) =>
  (
    <div className="btn">
      <button className="myButton" onClick={handleSubmit}>
        Submit results
      </button>
    </div>
  );

export default Btn;
