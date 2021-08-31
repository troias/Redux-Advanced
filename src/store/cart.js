import { createSlice} from '@reduxjs/toolkit'


const defaultState = {
    showCart: false,
};

const cartSlice = createSlice({
    name: "cartReducer", 
    initialState: defaultState,
    reducers: {
       showcart(state) {}
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer