import React from 'react';

import Footer from './components/Footer/Footer';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Resultados from './Screens/Resultados/Resultados';
import Header from './components/Header/Header';
import Register from './Screens/Register/Register';
import DetalleMovie from './Screens/DetalleMovie/DetalleMovie';
import DetalleSerie from './Screens/DetalleSerie/DetalleSerie';
import Favourites from './Screens/Favourites/Favourites';
import Peliculas from './Screens/Peliculas/Peliculas';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Series from './Screens/Series/Series';
import MiPerfil from './Screens/MiPerfil/MiPerfil';

function App() {
  return (
    <React.Fragment>

      
      <Switch>
      <Route path="/" exact={true} component={Home}/>
       <Route path="/Register" component={Register}/>
       <Route path = "/Login" component = {Login}/> 
       <Route path = "/MiPerfil" component ={MiPerfil}/>
      <Route path="/busqueda/:busqueda/:tipo" component={Resultados}/>
      <Route path="/DetalleMovie/:id" component={DetalleMovie}/>
      <Route path="/DetalleSerie/:id" component={DetalleSerie}/>
      <Route path = "/Favoritos/" component ={Favourites}/>
      <Route path = "/Peliculas" component ={Peliculas}/>
      <Route path = "/Series" component ={Series}/>
      <Route component={NotFound} />
      

      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
