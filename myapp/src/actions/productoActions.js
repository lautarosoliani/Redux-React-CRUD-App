import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from "../types"
import clienteAxios from "../config/axios"
import Swal from "sweetalert2"

//crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())
        try {
            //insertar en la API
            await clienteAxios.post("/productos", producto)

            //si todo sale bine, actualizar el State
            dispatch(agregarProductoExito(producto))

            Swal.fire("Correct", "Product added correctly", "success")
        } catch (error) {
            console.log(error)
            //si hay un error cambiar el State
            dispatch(agregarProductoError(true))
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true,
})

//si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
})

//si hubo error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
})
