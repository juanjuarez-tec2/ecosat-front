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
                console.log(res.data)
                this.setState({
                    productos: res.data.productos,
                    status: 'success'
                });
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
                            $1000
                        </span>
                        {this.user.tipo === 'Supervisor' &&
                            <Link to={'/home/update/' + producto._id}>Modificar producto</Link>
                        }

                        <div className="clearfix"></div>
                    </article>
                )
            })

            return (
                <div id="articles">
                    <h1>Productos</h1>
                    {listArticles}
                </div>
            );

        }
        else if(!this.state.productos.length && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay articulos para mostrar</h2>
                    <p>Todavia no hay contenido en esta seccion</p>
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