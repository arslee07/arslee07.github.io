import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { MDBAnimation } from 'mdbreact';

const Main = () => (
  <MDBAnimation type={'fadeIn'}>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  </MDBAnimation>
);
export default Main;
