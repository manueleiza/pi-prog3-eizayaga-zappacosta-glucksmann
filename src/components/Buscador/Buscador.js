import { Component } from "react";
import React from "react";


class Buscador extends Component {
    constructor() {
        super();
        this.state = { search: "" }
    }

    onSumbit(event) {
        event.preventDefault();
    }
    controlarCambios(event) {
        this.setState({ valor: event.target.value });
    }
    guardarBusqueda(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSumbit(event)}>
                <button type="sumbit">Buscar</button>
                <input onChange={(event) => this.guardarBusqueda(event)} value={this.state.search}></input>
            </form>
        )
    }
}

export default Buscador;