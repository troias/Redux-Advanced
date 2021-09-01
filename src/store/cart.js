import { createSlice} from '@reduxjs/toolkit'


const defaultState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cartReducer", 
    initialState: defaultState,
    reducers: {
       addCartItem(state, action) {
           const item = action.payload
           const existingItem = state.item.id.find(x => x.id === item.id)
           if (!existingItem){
               state.cartItems.push({
                   itemId: item.id, 
                   price: item.price, 
                   quantity: 1, 
                   totalPrice: item.price,
                   name: item.title
               })
           } else {
               existingItem.quantity++;
               existingItem.totalPrice = existingItem.totalPrice + item.price
           }
        }, 
       removeCartItem(state, action){}
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer