import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importar componentes
import Home from './components/Home';
import Login from './components/Login';
import UpdateProducto from './components/UpdateProducto';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home/update/:id" component={UpdateProducto} />

                </Switch>

                <div className="clearfix"></div>
            </BrowserRouter>
        )
    }
}

export default Router;