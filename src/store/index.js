import {configureStore, createSlice} from 'react-redux'

const defaultState = {};

const cartSlice = createSlice({
    name: "cartReducer", 
    intialState: defaultState,
    reducer: {
        show: false
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const cartActions = cartSlice.actions

export default store