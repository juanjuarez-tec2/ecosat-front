import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

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
                                    <NavLink to="/productos" activeClassName="active">Productos</NavLink>
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