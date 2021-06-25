import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './Pages/Main';
import './Stylesheets/bootstrap.min.css';
// import './index.css';

render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('root')
);
