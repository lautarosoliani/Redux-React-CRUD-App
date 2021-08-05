import React from "react"
//Actions de REDUX
import { useDispatch, useSelector } from "react-redux"
import { crearNuevoProductoAction } from "../actions/productoActions"

const NuevoProducto = () => {
    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch()
    //manda llamar el action de productoAction
    const agregarProducto = () => dispatch(crearNuevoProductoAction())
    //cuando el ususario haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault()

        //validar formulario
        //si no hay errores
        //crear el nuevo producto
        agregarProducto()
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-cneter mb-4 font-weight-bold">
                            Complete to add new product
                        </h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Insert Name"
                                    name="nombre"
                                ></input>
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Insert Price"
                                    name="precio"
                                ></input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                ADD NEW PRODUCT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
