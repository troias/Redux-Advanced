import { createSlice} from 'react-redux'


const defaultState = {};

const cartSlice = createSlice({
    name: "cartReducer", 
    intialState: defaultState,
    reducer: {
        show: false
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer