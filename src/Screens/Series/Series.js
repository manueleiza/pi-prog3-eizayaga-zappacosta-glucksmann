import react, { Component } from "react";
import CardSerie from "../../components/CardSerie/CardSerie";
import Header from "../../components/Header/Header";

class Series extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todasSeries: [],
      seriesMostradas: 5,
      contadorCargas: 0,
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          todasSeries: data.results,
          contadorCargas: this.state.contadorCargas + 1

        });

      })
      .catch(error => console.log("El error fue: " + error));
  }

  verMas() {
    let nuevoLimite = this.state.seriesMostradas + 5;

    if (nuevoLimite > this.state.todasSeries.length) {
      let proximaPagina = this.state.pagina + 1;

      fetch(`https://api.themoviedb.org/3/discover/tv?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=${proximaPagina}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            todasSeries: this.state.todasSeries.concat(data.results),
            contadorCargas: this.state.contadorCargas + 1,
            pagina: proximaPagina,
            seriesMostradas: nuevoLimite
          });
        })
        .catch(error => console.log("El error fue: " + error));
    } else {
      this.setState({
        seriesMostradas: nuevoLimite
      });
    }
  }

  render() {

    let seriesMostradas = this.state.todasSeries.slice(0, this.state.seriesMostradas)


    return (
      <react.Fragment>
        <Header />
        <section className="row-cards">
          {this.state.todasSeries.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            seriesMostradas.map((pelicula) => (
              <CardSerie className="pelicula"

                tipo="serie"
                key={pelicula.id}
                id={pelicula.id}
                title={pelicula.original_name}
                image={pelicula.poster_path}
                description={pelicula.overview}
              />
            ))
          )}

          <artice className="boton-mas-pelis" >
            <button onClick={() => this.verMas()}>Ver Más</button>
          </artice>


        </section>
      </react.Fragment>
    );
  }
}



export default Series;