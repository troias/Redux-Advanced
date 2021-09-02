import { createSlice} from '@reduxjs/toolkit'


const defaultState = {
    showCart: false, 
    error: false, 
    notification: null, 
};

const uiSlice = createSlice({
    name: "ui reducer", 
    initialState: defaultState,
    reducers: {
        toggleCart(state, action){
            state.showCart = !state.showCart;
        }, 
        showNotification(state, action){
            state.notification = {
                status: action.payload.status, 
                title: action.payload.title,
                message: action.payload.message
            }
        },
    }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer