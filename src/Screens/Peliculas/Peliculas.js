import react, {Component} from "react";
import Card from "../../components/Card/Card";

class Peliculas extends Component{

  constructor(props) {
    super(props);
    this.state = {
      todasPeliculas: [],
      peliculasMostradas: 5,
      contadorCargas: 0,
      pagina: 1, 
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          todasPeliculas: data.results,
          contadorCargas: this.state.contadorCargas + 1

        });

      })
      .catch(error => console.log("El error fue: " + error));
  }

verMas() {
    let nuevoLimite = this.state.peliculasMostradas + 5;

    if (nuevoLimite > this.state.todasPeliculas.length) {
      let proximaPagina = this.state.pagina + 1;

      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=${proximaPagina}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            todasPeliculas: this.state.todasPeliculas.concat(data.results),
            contadorCargas: this.state.contadorCargas + 1,
            pagina: proximaPagina,
            peliculasMostradas: nuevoLimite
          });
        })
        .catch(error => console.log("El error fue: " + error));
    } else {
      this.setState({
        peliculasMostradas: nuevoLimite
      });
    }
  }




  render() {

    let peliculasMostradas = this.state.todasPeliculas.slice(0, this.state.peliculasMostradas)


    return (
      <section className="row-cards">
        {this.state.todasPeliculas.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          peliculasMostradas.map((pelicula) => (
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



export default Peliculas