import react, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const cookies = new Cookies

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }


    enviarForm(e) {
        e.preventDefault();

        const { email, password } = this.state;

        let usuarioACrear = {
            email: email,
            password: password,
            createdAt: Date.now()
        };

        if (password.length < 6) {
            this.setState({ error: "extension menor a 6 caracteres" });
            console.log("aaa")
            return;
        }
        if (!email.includes("@")) {
            console.log("estoy en error email");

            this.setState({ error: "@ no incluido" })
            return;
        }

        let usersStorage = localStorage.getItem("users")
        if (usersStorage != null) {
            let usersParseado = JSON.parse(usersStorage);

            let usersFiltrados = usersParseado.filter(username => username.email === email);

            if (usersFiltrados.length === 0) {
                this.setState({ error: "no existe ese usuario" })
                console.log("correo error")

                return;
            }
            if (usersFiltrados[0].password !== password) {
                this.setState({ error: "las credenciales ingresadas son invalidas" })
                return;
            }
            sessionStorage.setItem(
                "usuarioEnSesion",
                JSON.stringify({ sesionActiva: true })
            );

            let usuarioLogueado = usersFiltrados[0];
            localStorage.setItem("usuarioLogueado", usuarioLogueado.email);
            cookies.set("auth-user", this.state.email)

            this.props.history.push("/");

        }

        this.props.history.push("/");




    }

    controlarCambios(e, estadoNombre) {
        this.setState({ [estadoNombre]: e.target.value }); //agarra lo q escribe el usuario y lo guarda en el state
    }





    render() {
        return (

            <form className="form-register" onSubmit={(e) => this.enviarForm(e)}>


                <label>Correo Electronico: </label>
                <input className="campo-forms" type="email" value={this.state.email} onChange={(e) => this.controlarCambios(e, "email")} />

                <label>Constraseña: </label>
                <input className="campo-forms" type="password" value={this.state.password} onChange={(e) => this.controlarCambios(e, "password")} />

                <button className="boton" type="submit" > Login </button>
                <Link to= "/Register" className="ya-tengo-cuenta">No tengo cuenta</Link>


            </form>


        )
    }
}

export default withRouter(FormLogin)