import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class Character extends Component {
  render() {
    return (

      <ListItem
      primaryText={this.props.data.name}
      leftAvatar={<Avatar src={this.props.data.thumbnail.path + "/standard_large." + this.props.data.thumbnail.extension} />}
      />
    );
  }
}

export default Character;