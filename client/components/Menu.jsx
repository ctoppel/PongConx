import React from 'react';
import Score from './InputBox.jsx';

const Menu = ({ handleLogin, usernamePlaceholder, passwordPlaceholder }) =>
  (
    <div className="menu">
      PongConX<span className="small-text">™</span>
      <div>
        <Score handleLogin={handleLogin} usernamePlaceholder={usernamePlaceholder} />
      </div>
      <div>
        <Score handleLogin={handleLogin} passwordPlaceholder={passwordPlaceholder} />
      </div>
    </div>
  );

export default Menu;
