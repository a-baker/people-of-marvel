import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

class Layout extends Component {
  render() {
    return (
      <div id="layout">
        <div id="nav">
          <IndexLink to="/" activeClassName="active">
            <FlatButton style={{color: 'white'}} label="homepage" />
          </IndexLink>
          <Link to="characters" activeClassName="active">
            <FlatButton style={{color: 'white'}} label="Characters" />
          </Link>
        </div>        
        <section id="content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;