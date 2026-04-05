import react from "react";
import FormLogin from "../../components/FormularioLogin/FormLogin";

function Login() {
    return(
        <section className="conetenedor-padre">
            <article className="articulo-formulario">
                <h2>¡INGRESA TU CUENTA!</h2>
            <FormLogin/>

            </article>


        </section>
    )
}

export default Login