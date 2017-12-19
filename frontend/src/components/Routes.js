import React from 'react';
import SwitchBoard from './SwitchBoard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Routes extends React.Component {
  render () {
    return (
      <Router>
          <Switch>
            <Route path="/" component={SwitchBoard} />
          </Switch>
      </Router>
    );
  }
}
