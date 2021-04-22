import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from './Header';
import Global from '../Global';

import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {

    userRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        user: {},
        status: null
    }

    getFormData = (e) => {

        var user = {
            usuario: this.userRef.current.value,
            contraseña: this.passwordRef.current.value,
        }

        this.setState({
            user: user
        });
    }

    login = (e) => {
        e.preventDefault();
        var url = Global.url;
        var params = {
            usuario: this.state.user.usuario,
            contraseña: this.state.user.contraseña
        };

        axios.post(url + 'usuarios/login', params)
            .then(res => {
                console.log(res)
                return res.data;
            })
            .then(res => {
                console.log(res)
                if(res.status === 'success') {
                    var user = res.user;
                    cookies.set('usuario', user.usuario, {path: '/'});
                    cookies.set('nombre', user.nombre, {path: '/'});
                    cookies.set('tipo', user.tipo, {path: '/'});
                    alert(`Bienvenido ${user.nombre}`);
                    this.setState({
                        status: 'success'
                    })
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(err => {
                console.log(err);
                alert('El usuario o la contraseña no son correctos')
            })
    }

    render() {

        if(this.state.status === 'success') {
            return <Redirect to="/home" />
        }

        return (
            <div id="formulario">
            <Header login="true" />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Inicio de Sesion</h1>


                        {/* Crear un formulario */}
                        <form className="mid-form" onSubmit={this.login} onChange={this.getFormData}>
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

export default Login;