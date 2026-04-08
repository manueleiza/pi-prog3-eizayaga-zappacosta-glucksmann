import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            favorito: false,
        };
        
    }

    componentDidMount(){
        let storage = localStorage.getItem("favPeliculas")

        let storageParseado = storage ? JSON.parse(storage) : [];

        if (storageParseado.includes(this.props.id)){
            this.setState({favorito: true})
        }
    }


    cambiarEstado() {   
        this.setState({
            mostrar: !this.state.mostrar
        });
    }


    agregarFavorios(id){
        let storage = localStorage.getItem("favPeliculas")
        let storageParseado = JSON.parse(storage)
        if (storageParseado === null){
            let PrimerPeli = [id]
            let PrimerPeliString = JSON.stringify(PrimerPeli)
            localStorage.setItem("favPeliculas", PrimerPeliString)
        } 
        else {
            storageParseado.push(id)
            let StorageString = JSON.stringify(storageParseado)
            localStorage.setItem("favPeliculas", StorageString)
        }
        
        this.setState({favorito: true})
        
    }

    sacarFavoritos(id){
        let favoritos = localStorage.getItem("favPeliculas")
        let favoritosParseado = JSON.parse(favoritos)
        let StorageFiltrado = favoritosParseado.filter(function(pelicula){
            return pelicula !== id ;
        });

        let StorageString = JSON.stringify(StorageFiltrado);
        let storage2 = localStorage.setItem("favPeliculas", StorageString)

        this.setState({favorito: false})
        
        
    }

    render() {
        return (
            <article className="single-card-movie">
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.props.image}`}
                />

                <h2>{this.props.title}</h2>

                {this.state.mostrar ? <p>{this.props.description}</p> : null}
                <button className="more" onClick={() => this.cambiarEstado()}>
                    {this.state.mostrar ? "Ver menos" : "Ver descripción"}
                </button>

                {this.state.favorito ? <button className="SacarFav" onClick={() => this.sacarFavoritos(this.props.id)}>
                    Sacar de Favoritos
                </button> : <button className="AgregarFav" onClick={() => this.agregarFavorios(this.props.id)}>
                    Agregar a Favoritos
                </button>}
                <Link className="Detalles" to = {`/Detalle/${this.props.id}`}>Detalles</Link>
                
                 
                
            </article>
        );
    }
}


export default Card;



