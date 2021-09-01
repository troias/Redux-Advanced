import { createSlice} from '@reduxjs/toolkit'


const defaultState = {
    showCart: false
};

const uiSlice = createSlice({
    name: "ui reducer", 
    initialState: defaultState,
    reducers: {
        toggleCart(state, actions){
            state.showCart = !state.showCart;
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer