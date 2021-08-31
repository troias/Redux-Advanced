import {configureStore, createSlice} from 'react-redux'
import cartReducer from './cart'
import uiReducer from './ui'

const defaultState = {};




const store = configureStore({
    reducer: {
        cart: cartReducer, 
        uiSlice: uiReducer
    }
})



export default store