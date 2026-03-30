import React, { Component } from "react";
import SeccionPelis from "../../components/SeccionPelis/SeccionPelis";
import Buscador from "../../components/Buscador/Buscador";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";
import "./styles.css"

class Home extends Component {
    render() {
        return (
            <main>
                <h1>Home</h1>
                <Buscador />
                <h2>Peliculas más populares:</h2>
                <SeccionPelis />
                <h2>Series más populares:</h2>
                <SeccionSeries />
            </main>
        )
    }
}

export default Home;    