import React from "react";
import { Component } from "react";



class DetalleMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: props.match.params.id,
            type: props.match.params.type,
        };
    }

componentDidMount(){
    if (this.state.type === "tv") {
        this.DetailMovie();
    }
}

DetailMovie(){
fetch(`https://api.themoviedb.org/3/${this.state.type}/${this.state.id}`)
  .then(res => res.json())
  .then(data => this.setState({peli: data }))
  .catch(err => console.error(err));
}




    
  render() {
        if (!this.state.data) {
            return <p>Cargando...</p>;
        }

        const info = this.state.data;

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
