import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Main from './Main.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    // function bindings
    this.handleOption = this.handleOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      users: [],
      user1: '',
      user2: '',
      user1info: '',
      user2info: '',
      user1score: 0,
      user2score: 0,
      winner: '',
      loser: '',
    };
  }

  componentDidMount() {
    const userArr = [];

    $.get('/users', (data) => {
      data.forEach(user => userArr.push(user.first_name));
      this.setState({ users: userArr });
    });

  }


  // functions
  handleOption(event) {
    console.log(event.target.value);
    console.log(event.target.id);
    event.target.id === 'side1' ?
    this.setState({ user1: event.target.value }) :
    this.setState({ user2: event.target.value });
  }

  handleChange(event) {
    $.get('/users', (data) => {
      // console.log(data);
      data.forEach(user => userArr.push(user.name));
      this.setState({ users: userArr });
    });

    event.target.id === 'side1' ?
    this.setState({ user1score: event.target.value }) :
    this.setState({ user2score: event.target.value });
  }

  handleSubmit(event) {
    this.state.user1score > this.state.user2score ?
    this.setState({ winner: this.state.user1, loser: this.state.user2 }) :
    this.setState({ winner: this.state.user2, loser: this.state.user1 });

    console.log('winner', this.state.winner, 'loser', this.state.loser);
    console.log('Scores submitted: ' + this.state.user1 + ':' + this.state.user1score + ',' + this.state.user2 + ':' + this.state.user2score);

    // post to server
    // $.post()

    // event.preventDefault();
  }


  // displayed on page
  render() {
    return (
      <div>
        <Menu className="menu" />
        <Main handleOption={this.handleOption} handleChange={this.handleChange} handleSubmit={this.handleSubmit} users={this.state.users} className="main" />
      </div>
    );
  }
}

export default App;
