import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';

import { Routes, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Link to="/" exact="true" >Home</Link>
      <Switch>

      <Route path="/" exact={true} component={Home}/>
      <Route component={NotFound} />

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
