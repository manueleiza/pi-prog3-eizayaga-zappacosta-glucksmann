import React, { Component } from "react";
import Card from "../../components/Card/Card";



class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelisFavoritas: []
    };

  }

  componentDidMount() {

    let storage = localStorage.getItem("favPeliculas")
    
    
    
    if (storage !== null) {
      let storageParseado = JSON.parse(storage)

      console.log(storageParseado);
      

      storageParseado.map((id) =>

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({
              pelisFavoritas: this.state.pelisFavoritas.concat([data])
            })
          })
      )

     
      

      


    }
  }



  render() {
    console.log(this.state.pelisFavoritas);
    
    return (
      <section className="row cards">
        {this.state.pelisFavoritas.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pelisFavoritas.map((pelicula) => (
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
    );
  }

}


export default Favourites;



