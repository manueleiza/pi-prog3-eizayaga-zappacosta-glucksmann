import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Resultados from './Screens/Resultados/Resultados';
import Header from './components/Header/Header';
import Register from './Screens/Register/Register';
import Detalle from './Screens/Detalle/Detalle';
import Favourites from './Screens/Favourites/Favourites';

import { Route, Link, Switch } from 'react-router-dom';
import Login from './Screens/Login/Login';

function App() {
  return (
    <React.Fragment>
<Header/>
      
      <Switch>

      <Route path="/" exact={true} component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path = "/Login" component = {Login}/> 
      <Route path="/busqueda/:busqueda" component={Resultados}/>
      <Route path="/Detalle/:type/:id" component={Detalle}/>
      <Route path = "/Favoritos/" component ={Favourites}/>
      <Route component={NotFound} />
      

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
