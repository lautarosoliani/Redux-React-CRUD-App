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
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload],
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
