import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {

    logout = () =>{
        cookies.remove('usuario', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('tipo', {path: '/'});
        window.location.href="./login"
    }

    render() {
        var isLogin = this.props.login;

        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <span id="brand">
                            <strong>Ecosat</strong>
                        </span>
                    </div>

                    {/* <!-- MENU --> */}
                    {!isLogin &&

                        <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                                </li>
                                <li>
                                    <span onClick={this.logout} style={{cursor: 'pointer', }}>Cerrar Sesion</span>
                                </li>
                            </ul>
                        </nav>
                    }

                    {/* <!--LIMPIAR FLOTADOS--> */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;