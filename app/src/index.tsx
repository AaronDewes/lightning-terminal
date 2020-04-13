import React from 'react';
import ReactDOM from 'react-dom';
import 'mobx-react/batchingForReactDom';
import './i18n';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
