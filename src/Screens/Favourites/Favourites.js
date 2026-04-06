import React, {Component} from "react";
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
        let storageParseado= JSON.parse(storage)
        let peliculasRecuperadas= []
        if (storageParseado !== null){

            storageParseado.map((id)=> 

            fetch(`https://api.themoviedb.org/3/movie/${this.props.id}`)
                .then(response => response.json())
                .then(data => {
                    peliculasRecuperadas.push(data)
                })
            )


            this.setState({
                pelisFavoritas: peliculasRecuperadas
        })
            }
        }

   

  render() {
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



