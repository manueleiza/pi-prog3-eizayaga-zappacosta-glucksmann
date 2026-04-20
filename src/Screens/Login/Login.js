import react from "react";
import FormLogin from "../../components/FormularioLogin/FormLogin";
import Header from "../../components/Header/Header";

function Login() {
    return(
        <react.Fragment>
            <Header/>
        <section className="conetenedor-padre">
            <article className="articulo-formulario">
                <h2>¡INGRESA TU CUENTA!</h2>
            <FormLogin/>

            </article>


        </section>
        </react.Fragment>
    )
}

export default Login