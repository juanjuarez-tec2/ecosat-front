import axios from 'axios';
import React, { Component } from 'react';
import Global from "../Global";
import Header from './Header';


class UpdateProducto extends Component {

    url = Global.url;

    descripcionRef = React.createRef();
    precioRef = React.createRef();

    state = {
        producto: {},
        status: null
    }

    componentDidMount() {
        this.getItem();
    }

    getItem = () => {
        var id = this.props.match.params.id
        console.log(id)
        axios.get(this.url + 'productos/getOne/' + id)
        .then(res => {
            this.setState({
                producto: res.data.producto,
                status: 'success'
            });

            this.descripcionRef = this.state.producto.descripcion
            this.precioRef = this.state.producto.precio
        })
    }

    render() {

        return (
            <div id="formulario">
            <Header />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Actualizar producto</h1>


                        {/* Crear un formulario */}
                        <form className="mid-form" onSubmit={this.login} onChange={this.getFormData}>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripcion</label>
                                <input type="text" name="descripcion" ref={this.descripcionRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input type="text" name="precio" ref={this.precioRef} />
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

export default UpdateProducto;