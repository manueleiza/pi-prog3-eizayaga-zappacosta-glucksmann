import react, { Component } from "react";
import "./FormRegister.css"
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function formRegister(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    function enviarForm(e) {
        e.preventDefault();

        let usuarioACrear = {
            username: username,
            email: email,
            password: password,
        };

        if (password.length < 6) {
            setError("extencion menor a 6 caracteres");
            return;
        }
        if (!email.includes("@")) {
            setError("email no contiene @")
            return;
        }

        let usersStorage = localStorage.getItem("users")
        if (usersStorage != null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrados = usersParseado.filter(username => username.email === email);

            if (usersFiltrados.length > 0) {
                setError("ya existe un user con ese correo")
                return;
            }
            else {
                usersParseado.push(usuarioACrear);
                let usersEnJson = JSON.stringify(usersParseado)

                localStorage.setItem("users", usersEnJson)
            }


        }

        else {
            console.log("Entre");

            let usersInicial = [usuarioACrear]
            let usersEnJson = JSON.stringify(usersInicial)
            localStorage.setItem("users", usersEnJson)

        }

        props.history.push("/Login");
        console.log("se envio el formulario")



    }

    function controlarCambios(e, nombre) {
        if (nombre === "email") {
            setEmail(e.target.value);
        }
        if (nombre === username)
            setUsername(e.target.value)
    }


    return (

        <form className="form-register" onSubmit={(e) => this.enviarForm(e)}>

            <label>Username: </label>
            <input className="campo-forms" type="text" value={username} onChange={(e) => controlarCambios(e, "username")} />
            <label>Correo Electronico: </label>
            <input className="campo-forms" type="email" value={email} onChange={(e) => controlarCambios(e, "email")} />
            {error === "ya existe un user con este correo" ? <p className="error-contrasenia">Este correo ya se encuentra en uso   </p> : null}
            {error === "@ no incluido" ? <p className="error-contraseña">El correo debe incluir "@"  </p> : null}



            <label>Constraseña: </label>
            <input className="campo-forms" type="password" value={password} onChange={(e) => controlarCambios(e, "password")} />

            {error === "extension menor a 6 caracteres" ? <p className="error-contrasenia">La contraseña debe contener al menos 6 caracteres</p> : null}

            <button className="boton" type="submit" > Crear cuenta</button>

            <Link to="/login" className="ya-tengo-cuenta">Ya tengo cuenta</Link>


        </form>


    )
}

export default withRouter(FormRegister)