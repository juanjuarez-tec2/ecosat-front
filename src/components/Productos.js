import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Global from "../Global";
import Cookies from 'universal-cookie';

var cookies = new Cookies();

class Productos extends Component {

    url = Global.url;
    user = {
        usuario: cookies.get('usuario'),
        tipo: cookies.get('tipo'),
        nombre: cookies.get('nombre')
    }

    state = {
        productos: {},
        status: null
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        axios.get(this.url + "productos/getAll")
            .then(res => {
                console.log(res.data);
                this.setState({
                    productos: res.data.productos,
                    status: 'success'
                });
            })
    }

    delete = (id) => {
        if(!window.confirm('¿Desea eliminar el producto?')) return;

        axios.delete(this.url + 'productos/delete/' + id)
            .then(res => {
                this.getArticles();
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if(this.state.productos.length) {

            var listArticles = this.state.productos.map((producto) => {
                return (
                    <article className="article-item" id="article-template" key={producto._id}>
                        <div className="image-wrap">
                            <img src={this.url + 'get-image/' + producto.image} alt={producto.title} />
                        </div>

                        <h2>{producto.descripcion}</h2>
                        <span className="date">
                            ${producto.precio}
                        </span>
                        {this.user.tipo === 'Supervisor' &&
                            <React.Fragment>
                                <Link to={'/home/update/' + producto._id}>Modificar Producto</Link>
                                <button onClick={
                                    () => {
                                        this.delete(producto._id)
                                    }
                                } className="btn btn-danger">Eliminar</button>
                            </React.Fragment>
                        }

                        <div className="clearfix"></div>
                    </article>
                )
            })

            return (
                <div id="articles">
                    <h1>Productos</h1>

                    {this.user.tipo === 'Supervisor' &&
                        <Link to={'/home/create'} className="btn btn-success center">Agregar</Link>
                    }

                    {listArticles}
                </div>
            );

        }
        else if(!this.state.productos.length && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay productos para mostrar</h2>
                    <p>Todavia no hay contenido en esta seccion</p>

                    {this.user.tipo === 'Supervisor' &&
                        <Link to={'/home/create'} className="btn btn-success center">Agregar</Link>
                    }
                </div>
            );

        }
        else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );

        }
    }
}

export default Productos;