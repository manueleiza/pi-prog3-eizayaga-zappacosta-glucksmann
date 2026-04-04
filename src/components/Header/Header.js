import { Component } from "react";
import React from "react";
import NavBar from "../Navbar/Navbar";
import "./styles.css"


function Header() {
    const menu = [{ titulo: "Home", ruta: "/" }, { titulo: "Login", ruta: "/Login" }, { titulo: "register", ruta: "/Register" }, { titulo: "Favoritos", ruta: "/Favoritos" }, { titulo: "Ver todas", ruta: "/Ver-todas" }]
    return (

        <header>
        <nav className="nav">
            <img src="/img/Logo.png" alt="logo" className="Logo"/>
            <NavBar enlaces={menu} nombreUsuario="nombre usuario(traerlo desde el login)" />
        </nav>
        </header>

    )
}


export default Header


