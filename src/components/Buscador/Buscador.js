import { useState } from "react";
import { withRouter } from "react-router-dom";


function Buscador(props) {
    const [search, setSearch] = useState("")
    const [tipo, setTipo] = useState("")

    function onSumbit(event) {
        event.preventDefault()
        console.log("props de buscador", props)
        props.history.push(`/busqueda/${search}/${tipo}`)
    }

    function guardarBusqueda(event) {
        setSearch(event.target.value)
        console.log("El valor en estado es:", search)
    }

   function busquedaTipo(event) {
    setTipo(event.target.value)
   }

    return (
        <div className="buscador">
            <form className="form-buscador" onSubmit={(event) => onSumbit(event)}>
                <input className="campo-buscar" type="text" placeholder="Buscar" onChange={(event) => guardarBusqueda(event)} value={this.state.search}></input>
                <label>Serie</label>
                <input type="radio" onChange={(event) => busquedaTipo(event)} id="tipo" value="tv" ></input>
                <label>Pelicula</label>
                <input  type="radio" onChange={(event) => busquedaTipo(event)} id="tipo" value="movie"></input>

                <button className="boton-busqueda" type="submit">Buscar</button>

            </form>
        </div>
    )
}

export default withRouter(Buscador);
