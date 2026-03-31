import React, { Component } from "react";
import SeccionPelis from "../../components/SeccionPelis/SeccionPelis";
import Buscador from "../../components/Buscador/Buscador";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";
import "./styles.css"

class Home extends Component {
    render() {
        return (
            <main className="Color-de-fondo">
                <h1>Home</h1>
                <Buscador />
                <h2 className="Amarillo">Peliculas más populares:</h2>
                <SeccionPelis />
                <h2 className="Amarillo">Series más populares:</h2>
                <SeccionSeries />
            </main>
        )
    }
}

export default Home;    