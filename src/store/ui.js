import { createSlice} from 'react-redux'


const defaultState = {};

const uiSlice = createSlice({
    name: "ui reducer", 
    intialState: defaultState,
    reducer: {
        show: false
    }
})

export const cartActions = uiSlice.actions

export default uiSlice.reducer