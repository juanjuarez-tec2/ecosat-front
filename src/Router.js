import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import CreateProducto from './components/CreateProducto';
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
                    <Route exact path="/home/create" component={CreateProducto} />
                    <Route exact path="/home/update/:id" component={UpdateProducto} />

                </Switch>

                <div className="clearfix"></div>
            </BrowserRouter>
        )
    }
}

export default Router;