import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // function bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user1score: 0,
      user2score: 0,
    };
  }

  // functions
  handleChange(event) {
    this.setState({ score: event.target.value });
    console.log(event.target.id);
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log('Submitted scores: ' + this.state.user1score);
    event.preventDefault();
  }


  // displayed on page
  render() {
    return (
      <div>
        <Menu className="menu" />
        <Main handleChange={this.handleChange} className="main" />
      </div>
    );
  }
}

export default App;
