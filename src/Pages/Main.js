import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Header from '../Components/Header';

const Main = () => (
  <main>
    <div
      className={'col row justify-content-center align-items-center p-0 m-0'}
      style={{
        minHeight: '100vh',
      }}
    >
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </main>
);

export default Main;
