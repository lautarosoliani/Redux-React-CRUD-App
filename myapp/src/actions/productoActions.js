import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from "../types"
import clienteAxios from "../config/axios"

//crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
        dispatch(agregarProducto())
        try {
            //insertar en la API
            await clienteAxios.post("/hola", producto)

            //si todo sale bine, actualizar el state
            dispatch(agregarProductoExito(producto))
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
