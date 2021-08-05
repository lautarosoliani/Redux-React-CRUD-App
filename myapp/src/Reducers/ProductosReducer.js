// cada reducer tiene su propio State
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from "../types"

const initialState = {
    producto: [],
    error: null,
    loading: false,
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
