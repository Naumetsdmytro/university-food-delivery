import React from 'react';
import ReactDOM from 'react-dom';
import logLevel from './utils/log';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

global.log = logLevel;
log.info('App started :)');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(log.warn);
serviceWorker.unregister();
