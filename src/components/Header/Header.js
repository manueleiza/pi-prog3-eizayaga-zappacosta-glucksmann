import { Component } from "react";
import React from "react";
import NavBar from "../Navbar/Navbar";


function Header(){
    const menu =[{titulo: "Home", ruta: "/"}, {titulo: "Login", ruta: "/Login"}, {titulo: "crear cuenta", ruta: "/crear-cuenta"}, {titulo: "Favoritos", ruta: "/Favoritos"}, {titulo: "Ver todas", ruta: "/Ver-todas"}]
    return(
         <NavBar enlaces={menu} nombreUsuario ="nombre usuario(traerlo desde el login)"/>


    )
}


export default Header


