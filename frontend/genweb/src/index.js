import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Switch } from 'react-router';

class Routes extends React.Component {
  render () {
    return (
      <Router>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
