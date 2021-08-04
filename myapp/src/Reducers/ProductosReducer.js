// cada reducer tiene su propio State

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
