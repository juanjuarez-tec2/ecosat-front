import axios from 'axios';
import React, { Component } from 'react';
import Global from "../Global";
import Header from './Header';


class CreateProducto extends Component {

    url = Global.url;

    descripcionRef = React.createRef();
    precioRef = React.createRef();

    state = {
        producto: {},
        status: null
    }

    getFormData= () => {

        var producto = {
            descripcion: this.descripcionRef.current.value,
            precio: this.precioRef.current.value,
        }

        this.setState({
            producto: producto
        });

    }

    save = (e) => {
        e.preventDefault();

        axios.post(this.url + 'productos/save/', this.state.producto)
            .then(res => {
                if (res.data.status === 'success') {
                    alert('Producto Agregado');
                    window.location.href="./"
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        var producto = this.state.producto;

        return (
            <div id="formulario">
            <Header />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Agregar producto</h1>

                        <form className="mid-form" onSubmit={this.save} onChange={this.getFormData}>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripcion</label>
                                <input type="text" name="descripcion" defaultValue={producto.descripcion} ref={this.descripcionRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input type="text" name="precio" defaultValue={producto.precio} ref={this.precioRef} />
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Agregar" className="btn btn-success" />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateProducto;