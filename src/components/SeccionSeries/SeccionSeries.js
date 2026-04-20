import React, { Component } from "react";
import CardSeries from "../CardSerie/CardSerie";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css"


class SeccionSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todasSeries: [],
      seriesMostradas: 5,
      contadorCargas: 0,
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          todasSeries: data.results,
          contadorCargas: this.state.contadorCargas + 1,
        });
      })
      .catch(error => console.log("El error fue: " + error));
  }



  render() {

    let seriesMostradas = this.state.todasSeries.slice(0, this.state.seriesMostradas)
    return (
      <section className="row-cards">
        {this.state.todasSeries.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          seriesMostradas.map((serie) => (
            <CardSeries
              tipo="serie"

              key={serie.id}
              id={serie.id}
              title={serie.original_name}
              image={serie.poster_path}
              description={serie.overview}
            />
          ))
        )}



      <div className="ver-todas">
        <Link to="/Series" className="boton-pelis">Ver todas</Link>
      </div>

      </section>
    );
  }
}
export default SeccionSeries;