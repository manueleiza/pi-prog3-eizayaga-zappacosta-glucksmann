import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "../../components/SeccionPelis/SeccionPelis.css"

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            cargando: true,
        };
    }

    componentDidMount() {
        const busquedaUsuario = this.props.match.params.busqueda;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=eaa57596af1d15ddb4b8b1c407e61403&query=${busquedaUsuario}`).then(res => res.json())
            .then(data => this.setState({
                resultados: data.results,
                cargando: false
            }))
            .catch(error => console.log(error));
    }

    filtrarPelicula() {

    }


    render() {
        return (
            <main>
                <h4>Resultados de: {this.props.match.params.busqueda}</h4>

                {this.state.cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <section className="row-cards">
                        {this.state.resultados != null && this.state.resultados.length > 0 ? (
                            this.state.resultados.map(pelicula => (
                                <Card className="pelicula"
                                    key={pelicula.id}
                                    id={pelicula.id}
                                    title={pelicula.original_title}
                                    image={pelicula.poster_path}
                                    description={pelicula.overview}
                                />
                            ))
                        ) : (
                            <p>No se encontraron resultados.</p>
                        )}
                    </section>
                )}
            </main>
        );
    }
}

export default Resultados
