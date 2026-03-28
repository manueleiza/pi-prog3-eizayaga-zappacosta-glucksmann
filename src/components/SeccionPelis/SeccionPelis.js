import React, { Component } from "react";
import Card from "../Card/Card";

class SeccionPelis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [

      ]
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eaa57596af1d15ddb4b8b1c407e61403&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peliculas: data.results
        });
      })
      .catch(error => console.log("El error fue: " + error));
  }

  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          {this.state.peliculas.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                id={pelicula.id}
                title={pelicula.original_title}
                image={pelicula.poster_path}
                description={pelicula.overview}
              />
            ))
          )}

        </section>
      </React.Fragment>
    );
  }
}
export default SeccionPelis;

