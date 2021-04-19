import React from 'react';
import ReactDOM from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from 'views/App';
import { isDevelopment } from 'utils/helpers';

if (isDevelopment)
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
