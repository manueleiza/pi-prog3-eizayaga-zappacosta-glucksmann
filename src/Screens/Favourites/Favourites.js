import React, { Component } from "react";
import Card from "../../components/Card/Card";
import CardSerie from "../../components/CardSerie/CardSerie";
import "../../components/SeccionPelis/SeccionPelis.css"


class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritosPelis: [],
      favoritosSeries: []
    };

  }

  componentDidMount() {

    let storagePeliculas = localStorage.getItem("favPeliculas")
    let storageSeries = localStorage.getItem("favSeries")
     
    if (storagePeliculas !== null) {
      let storageParseado = JSON.parse(storagePeliculas)

      console.log(storageParseado);
      
      let peliculas = []
      storageParseado.map((id) =>

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            peliculas.push(data)
            this.setState({
              favoritosPelis: peliculas
            })
          })
        )
    }

    if(storageSeries !== null){
      let storageParseado = JSON.parse(storageSeries)

      console.log(storageParseado);
      
      let series = []
      storageParseado.map((id) =>

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            series.push(data)
            this.setState({
              favoritosSeries: series
            })
          })
        )
    }
  }



  render() {
    console.log(this.state.favoritosSeries);
    console.log(this.state.favoritosPelis);
    
    return (
      <React.Fragment>
      
      <h2 className="subtitulo">Tus Peliculas Favoritas</h2>
      <section className="row-cards">
        {this.state.favoritosPelis.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.favoritosPelis.map((pelicula) => (
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

      <h2 className="subtitulo">Tus Series Favoritas</h2>

      <section className="row-cards">
        {this.state.favoritosSeries.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.favoritosSeries.map((pelicula) => (
            <CardSerie
              key={pelicula.id}
              id={pelicula.id}
              title={pelicula.name}
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


export default Favourites;



