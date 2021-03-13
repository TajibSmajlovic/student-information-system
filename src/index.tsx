import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from 'views/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
