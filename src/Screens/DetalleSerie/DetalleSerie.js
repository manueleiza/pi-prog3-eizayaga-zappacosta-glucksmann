import React from "react";
import { Component } from "react";
import Header from "../../components/Header/Header";



class DetalleSerie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            id: props.match.params.id,
        };
    }

    componentDidMount() {
        this.DetailSerie();
    }

    DetailSerie() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=eaa57596af1d15ddb4b8b1c407e61403`)
            .then(res => res.json())
            .then(data => this.setState({ serie: data }))
            .catch(err => console.error(err));
    }



    render() {
        if (!this.state.serie) {
            return <img className="cargando" src="./img/cargando.gif" alt="gif cargando"/>;
        }

        const info = this.state.serie;

        return (
            <React.Fragment>
                <Header />
                <article className='movie-card'>

                    <div className="izquierda">
                    <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt="" />
                    </div>

                <div className="derecha">
                    <h2>{info.original_name} </h2>
                    <p> <span>Calificación:</span> {info.vote_average}</p>
                    <p> <span>Fcha de Lanzamiento:</span> {info.first_air_date}</p>
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

export default DetalleSerie
