import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Resultados from './Screens/Resultados/Resultados';
import Header from './components/Header/Header';
import Register from './Screens/Register/Register';

import { Route, Link, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
<Header/>
      
      <Switch>

      <Route path="/" exact={true} component={Home}/>
       <Route path="/Register" component={Register}/>
      <Route path="/busqueda/:busqueda" component={Resultados}/>
      <Route component={NotFound} />

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
