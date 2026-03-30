import react from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";




function NavBar(props) {
    return (

        <nav>
            <ul className="main-nav">
                {
                    props.enlaces.map((unEnlace, i) => <li key = {unEnlace + i}><Link to={unEnlace.ruta} >{unEnlace.titulo} </Link></li>)
                }
            </ul>

            <ul className="user">
                <li>{props.nombreUsuario} <img src="./img/user.jpg" alt="" /></li>
            </ul>
        </nav>
    )
};


export default NavBar
