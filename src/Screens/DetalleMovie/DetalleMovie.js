import React from "react";
import { Component } from "react";



class DetalleMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: props.match.params.id,
            peli:null
        };
    }

componentDidMount(){
        this.DetailMovie();
    
}

DetailMovie(){
fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
  .then(res => res.json())
  .then(data => this.setState({peli: data }))
  .catch(err => console.error(err));
}




  render() {
      console.log('state peli', this.state)
        if (!this.state.peli) {
            return <p>Cargando...</p>;
        }

        const info = this.state.peli;

        return (
              
            <article className='movie-card'>
                <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}alt="" />
                <h2>{info.original_title} </h2>
                <p> {info.vote_average}</p>
                <p> {info.release_date}</p>
                <p> {info.runtime}</p>
                <p> {info.overview}</p>
                <p> {info.genres.name} </p>
            </article>
        )
    }



}

export default DetalleMovie
