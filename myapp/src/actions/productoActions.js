export const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO"
export const AGREGAR_PRODUCTO_EXITO = "AGREGAR_PRODUCTO_EXITO"
export const AGREGAR_PRODUCTO_ERROR = "AGREGAR_PRODUCTO_ERROR"

// crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return () => {
        console.log(producto)
    }
}
