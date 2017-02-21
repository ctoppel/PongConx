import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NotFound from './NotFound.jsx';

const App = () =>
  (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
        <hr />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/login" component={Login} />
        <Match pattern="/signup" component={Signup} />
        <Miss component={NotFound} />
      </div>
    </Router>
  );

export default App;
