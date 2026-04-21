import React, { Component } from "react";
import Card from "../../components/Card/Card";
import CardSerie from "../../components/CardSerie/CardSerie";
import "../../components/SeccionPelis/SeccionPelis.css"
import Header from "../../components/Header/Header";

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
        let tipo =  this.props.match.params.tipo;

        fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=eaa57596af1d15ddb4b8b1c407e61403&query=${busquedaUsuario}`).then(res => res.json())
            .then(data => this.setState({
                resultados: data.results,
                cargando: false
            }))
            .catch(error => console.log(error));
    }



render() {
    const tipoBusqueda = this.props.match.params.tipo;

    return (
        <React.Fragment>
            <Header/>
        <main>
            <h4>Resultados de: {this.props.match.params.busqueda}</h4>

            {this.state.cargando ? (
                <img className="cargando" src="./img/cargando.gif" alt="gif cargando"/>
            ) : (
                <section className="row-cards">
                    {this.state.resultados != null && this.state.resultados.length > 0 ? (
                        this.state.resultados.map((item) => {
                            
                            if (tipoBusqueda === "tv") {
                                return (
                                    <CardSerie
                                        key={item.id}
                                        id={item.id}
                                        title={item.name} 
                                        image={item.poster_path}
                                        description={item.overview}
                                    />
                                );
                            } else {
                                return (
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        title={item.title} 
                                        image={item.poster_path}
                                        description={item.overview}
                                    />
                                );
                            }
                        })
                    ) : (
                        <p>No se encontraron resultados para su búsqueda.</p>
                    )}
                </section>
            )}
        </main>
        </React.Fragment>
    );
}
}

export default Resultados
