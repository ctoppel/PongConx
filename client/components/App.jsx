import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // function bindings
    this.handleLogin = this.handleLogin.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      usernamePlaceholder: 'Enter username',
      password: '',
      passwordPlaceholder: 'Enter password',
      users: [],
      user1info: { first_name: '-', last_name: null, wins: '-', losses: '-', rating: '-' },
      user2info: { first_name: '-', last_name: null, wins: '-', losses: '-', rating: '-' },
      scorePlaceholder: 'Enter score',
      user1score: 0,
      user2score: 0,
      winner: '',
      loser: '',
      selectedPlayer: 'select_player',
    };
  }

  componentDidMount() {
    const userArr = [];

    $.get('/users', (data) => {
      data.forEach(user => userArr.push(user));
      this.setState({ users: userArr });
    });
  }

  // functions
  handleLogin(event) {
    $.post('/users', { first_name: 'Curt', last_name: 'Toppel', password: '123456' }, (data, status) => {
      console.log(data, status);
    });
  }

  handleOption(event) {
    event.target.id === 'side1' ?
    this.setState({ user1info: JSON.parse(event.target.value) }) :
    this.setState({ user2info: JSON.parse(event.target.value) });
  }

  handleChange(event) {
    event.target.id === 'side1' ?
    this.setState({ user1score: +event.target.value }) :
    this.setState({ user2score: +event.target.value });
  }

  handleSubmit(event) {

    // if (!this.state.user1info.id || !this.state.user2info.id) return alert("Ghosts aren't allowed to play at this time...");
    if (this.state.user1info.id === this.state.user2info.id) return alert("Playing with yourself isn't recommended in public");

    let user1infoCopy = JSON.parse(JSON.stringify(this.state.user1info));
    let user2infoCopy = JSON.parse(JSON.stringify(this.state.user2info));

    if (this.state.user1score > this.state.user2score) {
      user1infoCopy.wins += 1;
      user2infoCopy.losses += 1;
      user1infoCopy.rating += 10;
      user2infoCopy.rating -= 10;
      this.setState({
        user1info: user1infoCopy,
        user2info: user2infoCopy,
        winner: this.state.user1info.first_name,
        loser: this.state.user2info.first_name,
      });
    } else if (this.state.user1score < this.state.user2score) {
      user2infoCopy.wins += 1;
      user1infoCopy.losses += 1;
      user2infoCopy.rating += 10;
      user1infoCopy.rating -= 10;
      this.setState({
        user1info: user1infoCopy,
        user2info: user2infoCopy,
        winner: this.state.user2info.first_name,
        loser: this.state.user1info.first_name,
      });
    } else return alert("You can't end on a tie! Get back out there and finish your game!");

    // post to server
    $.post('/users', { first_name: 'Curt', last_name: 'Toppel', password: '123456' }, (data, status) => {
      console.log(data, status);
    });
  }

  // displayed on page
  render() {
    return (
      <div>
        <Menu
          handleLogin={this.handleLogin} usernamePlaceholder={this.state.usernamePlaceholder}
          passwordPlaceholder={this.state.passwordPlaceholder}
        />
        <Main
          handleOption={this.handleOption} handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} users={this.state.users} user1info={this.state.user1info}
          user2info={this.state.user2info} scorePlaceholder={this.state.scorePlaceholder}
        />
      </div>
    );
  }
}

export default App;
