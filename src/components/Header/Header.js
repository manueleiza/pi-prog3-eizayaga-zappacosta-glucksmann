import { Component } from "react";
import React from "react";
import NavBar from "../Navbar/Navbar";
import "./styles.css"
import Cookies from "universal-cookie";

function Header() {

  let email = localStorage.getItem("usuarioLogueado");


    const menu = [{ titulo: "Home", ruta: "/" },
    { titulo: "Favoritos", ruta: "/Favoritos" },
    { titulo: "Peliculas", ruta: "/Peliculas" },
    { titulo: "Series", ruta: "/Series" }]

    if (!email) {
        menu.push(
            { titulo: "Login", ruta: "/Login" },
            { titulo: "Register", ruta: "/Register" }
        );
    }



    return (

        <header>
            <nav className="nav">
                <img src="/img/Logo.png" alt="logo" className="Logo" />

                <NavBar
                    enlaces={menu} 
                />

            </nav>
        </header>

    )
}


export default Header


