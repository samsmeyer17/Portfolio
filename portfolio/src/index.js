import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'

ReactDom.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();