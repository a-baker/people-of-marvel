import React, { Component } from 'react'
import axios from 'axios'

class CharacterInfo extends Component {
    constructor(props) {
        super(props);

        axios.get('https://gateway.marvel.com:443/v1/public/characters/' + this.props.params.id + '&apikey=359f52fff02b09fb20aaf446c4ce98bd')
          .then(res => {
            const char = res.data.data.results;
            this.setState({
              info: char,
            });
          })
          .catch(err => {
            console.error(err);
          });
    }

    render() {
        const errMessage = `Sorry, no character found for id ${this.props.params.id}`;

        return (
            <div id="character-info">
                {this.info ? this.info : errMessage}
            </div>
        );
    }
}

export default CharacterInfo;