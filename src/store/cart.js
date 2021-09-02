import { createSlice } from '@reduxjs/toolkit'


const defaultState = {
    cartItems: [],
    totalCartItemQuantity: 0,
    changed: false
};

const cartSlice = createSlice({
    name: "cartReducer",
    initialState: defaultState,
    reducers: {
        replaceCart(state, action) {
            state.totalCartItemQuantity = action.payload.totalCartItemQuantity
            state.items = action.payload.items
        },
        addCartItem(state, action) {
            const item = action.payload
            const existingItem = state.cartItems.find(x => x.id === item.id)
            state.totalCartItemQuantity++
            state.changed = true
            if (!existingItem) {
                state.cartItems.push({
                    id: item.id,
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
        removeCartItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalCartItemQuantity--
            state.changed = true
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})




export const cartActions = cartSlice.actions
export default cartSlice.reducer