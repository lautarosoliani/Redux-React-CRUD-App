import React, { Fragment } from "react"

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-cneter mb-4 font-weight-bold">
                            Edit a product
                        </h2>
                        <form>
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
                                Save changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
