import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import uiReducer from './ui'






const store = configureStore({
    reducer: {
        cart: cartReducer, 
        uiSlice: uiReducer
    }
})



export default store