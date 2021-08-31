import { createSlice} from '@reduxjs/toolkit'


const defaultState = {
    showCart: false
};

const uiSlice = createSlice({
    name: "ui reducer", 
    initialState: defaultState,
    reducers: {
        toggle(state){
            state.showCart = !state.showCart;
        }
    }
})

export const cartActions = uiSlice.actions

export default uiSlice.reducer