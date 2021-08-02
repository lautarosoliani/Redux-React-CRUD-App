import React, { Fragment } from "react"

const Productos = () => {
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
            </table>
        </Fragment>
    )
}

export default Productos
