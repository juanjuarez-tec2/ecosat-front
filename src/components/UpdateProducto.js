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
        })
    }

    getFormData= () => {

        var producto = {
            descripcion: this.descripcionRef.current.value,
            precio: this.precioRef.current.value,
            _id: this.state.producto._id,
            date: this.state.producto.date
        }

        this.setState({
            producto: producto
        });

    }

    update = (e) => {
        e.preventDefault();

        axios.put(this.url + 'productos/update/' + this.state.producto._id, this.state.producto)
            .then(res => {
                if (res.data.status === 'success') {
                    alert('Producto actualizado');
                    window.location.href="./../"
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
                        <h1 className="subheader">Actualizar producto</h1>

                        <form className="mid-form" onSubmit={this.update} onChange={this.getFormData}>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripcion</label>
                                <input type="text" name="descripcion" defaultValue={producto.descripcion} ref={this.descripcionRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio">Precio</label>
                                <input type="text" name="precio" defaultValue={producto.precio} ref={this.precioRef} />
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Actualizar" className="btn btn-success" />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateProducto;