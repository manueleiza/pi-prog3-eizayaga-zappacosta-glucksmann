import react from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Navbar(props) {
    return (

        <nav>
            <ul className="main-nav">
                {
                    props.enlaces.map((unEnlace, i) => <Link to={unEnlace.ruta}><li key = {unEnlace + i}>{unEnlace.titulo} </li></Link>)
                }
            </ul>



            
            <ul className="user">
                <li>{props.nombreUsuario} <img src="./img/user.jpg" alt="" /></li>
            </ul>
        </nav>
    )
};

export default Navbar