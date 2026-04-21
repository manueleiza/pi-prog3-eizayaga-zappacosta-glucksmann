import React from "react";
import "./NotFound.css";
import Header from "../../components/Header/Header";

function NotFound(){
    return(
        <React.Fragment>
            <Header/>
        <div className="contenedor-error">
            <img className="error" src="/img/error.gif"/>
            <p>Contenido Inexistente</p>
        </div>
        </React.Fragment>
    );
}

export default NotFound;