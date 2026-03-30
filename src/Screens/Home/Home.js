import React, { Component } from "react";
import SeccionPelis from "../../components/SeccionPelis/SeccionPelis";
import Buscador from "../../components/Buscador/Buscador";

class Home extends Component {
    render() {
        return (
            <main>
                <h1>Home</h1>
                <Buscador />
                <SeccionPelis />
            </main>
        )
    }
}

export default Home;