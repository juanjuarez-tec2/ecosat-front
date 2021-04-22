import React, { Component } from 'react';


class Formulario extends Component {

    userRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        user: {}
    }

    getFormData = (e) => {
        e.preventDefault();

        var user = {
            user: this.userRef.current.value,
            password: this.passwordRef.current.value,
        }

        this.setState({
            user: user
        })

        console.log("Formulario enviado!!");
        console.log(user);
    }

    render() {

        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Login</h1>


                        {/* Crear un formulario */}
                        <form className="mid-form" onSubmit={this.getFormData} onChange={this.getFormData}>
                            <div className="form-group">
                                <label htmlFor="user">Usuario</label>
                                <input type="text" name="user" ref={this.userRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" ref={this.passwordRef} />
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Formulario;