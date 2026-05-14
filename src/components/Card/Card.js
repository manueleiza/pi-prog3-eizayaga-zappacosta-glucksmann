import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function card(props) {
    const [mostrar, setMostrar] = useState("")
    const [favorito, setFavorito] = useState("")
    
    }

    useEffect( () => {
        let storage = localStorage.getItem("favPeliculas")

        let storageParseado = storage ? JSON.parse(storage) : [];

        if (storageParseado.includes(props.id)){
            setFavorito(true)
        }}, [])
    


    function cambiarEstado(){    
        setFavorito(!mostrar) }
    

    function agregarFavoritos(id){
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
        
        setFavorito(true)
        
    }

    function sacarFavoritos(id){
        let favoritos = localStorage.getItem("favPeliculas")
        let favoritosParseado = JSON.parse(favoritos)
        let StorageFiltrado = favoritosParseado.filter(function(pelicula){
            return pelicula !== id ;
        });

        let StorageString = JSON.stringify(StorageFiltrado);
        let storage2 = localStorage.setItem("favPeliculas", StorageString)

        setFavorito(false)
    }

        return (
            <article className="single-card-movie">
                <img
                    src={`https://image.tmdb.org/t/p/w342${props.image}`}
                />
                <div className="titulo-peli">
                <h2>{props.title}</h2>
                </div>  
                {mostrar ? <p>{props.description}</p> : null}
                <button className="more" onClick={() => cambiarEstado()}>
                    {mostrar ? "Ver menos" : "Ver descripción"}
                </button>

                {favorito ? <button className="SacarFav" onClick={() => sacarFavoritos(props.id)}>
                    Sacar de Favoritos
                </button> : <button className="AgregarFav" onClick={() => agregarFavoritos(props.id)}>
                    Agregar a Favoritos
                </button>}
                <Link className="detalles" to = {`/detalleMovie/${props.id}`}>Detalles</Link>
                
                 
                
            </article>
        );


export default Card;



