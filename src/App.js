import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Resultados from './Screens/Resultados/Resultados';

import { Route, Link, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>

      <Link to="/" exact="true" >Home</Link>
      
      <Switch>

      <Route path="/" exact={true} component={Home}/>
      <Route path="/busqueda/:busqueda" component={Resultados}/>
      <Route component={NotFound} />

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
