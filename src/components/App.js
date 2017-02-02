import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';
import { Link } from 'react-router';

import Character from './Character';

const CHARACTER_LIMIT = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: {},
      characters: []
    };
  }

  handleInput(e) {
    let search = e.target.value;
    this.updateSearch(search);
  }

  updateSearch(s){
    if(s.length) {
      axios.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + s + '&limit='+ CHARACTER_LIMIT +'&apikey=359f52fff02b09fb20aaf446c4ce98bd')
      .then(res => {
        const chars = res.data.data.results;
        this.setState({
          characters: chars,
        });
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  alertCharacterInfo(char) {
    console.log(char);
  }

  render() {
    var characters =
      this.state.characters.map((character, index) => {
        return (
          <Link key={index} to={`/characters/${character.id}`}>
            <Character data={character} />
          </Link>
        );
      });

    return (
      <div id="app">
        <form>
          <TextField
            onChange={this.handleInput.bind(this)}
            hintText="Search for a character..."
            floatingLabelText="Character"
           />
        </form>
        <div id="characters">
          <List>
            {characters}
          </List>
        </div>
      </div>
    );
  }
}

export default App;
