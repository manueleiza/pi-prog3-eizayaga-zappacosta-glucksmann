import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies

class MiPerfil extends Component {

  logout() {

Cookies.remove(`user-auth-cookie`)

    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <h1>Mi Perfil</h1>
        <button onClick={() => this.logout()}>Logout</button>
      </div>
    );
  }
}

export default MiPerfil