import React, { Component } from "react";
import SeccionPelis from "../../components/SeccionPelis/SeccionPelis";
import Buscador from "../../components/Buscador/Buscador";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";
import "./styles.css"
import Header from "../../components/Header/Header";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main className="Color-de-fondo">
                    <h1>Home</h1>
                    <Buscador />
                    <h2 className="subtitulo">Peliculas más populares:</h2>
                    <SeccionPelis />
                    <h2 className="subtitulo">Series más populares:</h2>
                    <SeccionSeries />
                </main>
            </React.Fragment>
        )
    }
}

export default Home;    