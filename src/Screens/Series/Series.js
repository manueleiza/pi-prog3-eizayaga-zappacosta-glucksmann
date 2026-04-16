import react, {Component} from "react";
import Card from "../../components/Card/Card";

class Series extends Component{

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
          contadorCargas: this.state.contadorCargas + 1

        });

      })
      .catch(error => console.log("El error fue: " + error));
  }

  verMas() {
    this.setState({
      seriesMostradas: this.state.seriesMostradas + 5
    })
  }


  render() {

    let seriesMostradas = this.state.todasSeries.slice(0, this.state.seriesMostradas)


    return (
      <section className="row-cards">
        {this.state.todasSeries.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          seriesMostradas.map((pelicula) => (
            <Card className="pelicula"
            
            tipo="pelicula"
              key={pelicula.id}
              id={pelicula.id}
              title={pelicula.original_title}
              image={pelicula.poster_path}
              description={pelicula.overview}
            />
          ))
        )}

        <artice className="boton-mas-pelis" >
        <button onClick={() => this.verMas()}>Ver Más</button>
        </artice>


      </section>
    );
  }
}



export default Series;