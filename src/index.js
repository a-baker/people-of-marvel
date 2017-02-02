import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import Homepage from './components/Homepage';
import Layout from './components/Layout';
import CharacterInfo from './components/CharacterInfo';

import 'normalize.css';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Homepage} />
        <Route path="/characters" component={App}>
        </Route>
        <Route path="/characters/:id" component={CharacterInfo}>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
