import { Component } from "react";
import { withRouter } from "react-router-dom";


class Buscador extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            tipo: ""

        }

    }

    onSumbit(event) {
        event.preventDefault()
        console.log("props de buscador", this.props)
        this.props.history.push(`/busqueda/${this.state.search}/${this.state.tipo}`)
    }

    guardarBusqueda(event) {
        this.setState({

            search: event.target.value
        }, () => console.log("log desde el setState extendido:", this.state.search))
        console.log("El valor en estado es:", this.state.search)
    }

   busquedaTipo(event) {
    this.setState({
        tipo: event.target.value
    })
   }



    render() {
        return (
            <div>
                <form onSubmit={(event) => this.onSumbit(event)}>
                    <input type="text" placeholder="Buscar Peliculas o Series" onChange={(event) => this.guardarBusqueda(event)} value={this.state.search}></input>
                    <label>Serie</label>
                    <input type="radio" onChange={(event) => this.busquedaTipo(event)} id="tipo" value="tv" ></input>
                    <label>Pelicula</label>
                    <input type="radio" onChange={(event) => this.busquedaTipo(event)} id="tipo" value="movie"></input>

                    <button type="submit">Buscar</button>

                </form>
            </div>
        )
    }
}

export default withRouter(Buscador);
