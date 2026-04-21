import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header"
import "./detalles.css"



class DetalleMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: props.match.params.id,
            peli: null
        };
    }

    componentDidMount() {
        this.DetailMovie();

    }

    DetailMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
            .then(res => res.json())
            .then(data => this.setState({ peli: data }))
            .catch(err => console.error(err));
    }




  render() {
      console.log('state peli', this.state)
        if (!this.state.peli) {
            return <img src="./img/cargando.gif" alt="gif cargando"></img>;
        }

        const info = this.state.peli;

        return (
              <React.Fragment>
                <Header/>
            <article className='movie-card'>

                <div className="izquierda">
                    <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt="" />
                </div>

                <div className="derecha">
                    <h2>{info.original_title} </h2>
                    <p> <span>Calificación:</span> {info.vote_average}</p>
                    <p> <span>Fecha de Lanzamiento:</span> {info.release_date}</p>
                    <p> <span>Duración:</span>  {info.runtime} mins</p>
                    <p> {info.overview}</p>

                    <ul className="lista"> {info.genres.map((genero, idx) => {
                        return <li key={genero + idx}>{genero.name}</li>;
                    })} </ul>


                </div>
            </article>
            </React.Fragment>
        )
    }



}

export default DetalleMovie
