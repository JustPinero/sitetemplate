import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/Routes';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
