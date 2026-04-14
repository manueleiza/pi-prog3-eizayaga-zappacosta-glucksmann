import React, { Component } from "react";
import Card from "../Card/Card";
import "./SeccionPelis.css"

class SeccionPelis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todasPeliculas: [],
      peliculasMostradas: 5,
      contadorCargas: 0,
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
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
    this.setState({
      peliculasMostradas: this.state.peliculasMostradas + 5
    })
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
export default SeccionPelis;

