import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Header from './components/Header/Header';

import { Route, Link, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
<Header/>
      
      <Switch>

      <Route path="/" exact={true} component={Home}/>
      <Route component={NotFound} />

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
