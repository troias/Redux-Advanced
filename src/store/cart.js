import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui'

const defaultState = {
    cartItems: [],

    totalCartItemQuantity: 0,
};

const cartSlice = createSlice({
    name: "cartReducer",
    initialState: defaultState,
    reducers: {
        addCartItem(state, action) {
            const item = action.payload

            const existingItem = state.cartItems.find(x => x.id === item.id)
            state.totalCartItemQuantity++
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
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})


export const sendCartData = (cart) => {
    return async (dispatch) => {

        //side effect
        dispatch(uiActions.showNotification({
            status: "Pending-request",
            title: "Sending",
            message: "Sending cart data!"
        }))


    

        const sendRequest = async () => {
            const req = await fetch("https://react-adv-38f1a-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart),
    
            })
            if (!req.ok) {
                throw new Error('sending cart data failed')
            }
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success",
                message: "Sent cart data successfully "
            }))
        }
        try {
            await sendRequest()
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: error.title,
                message: error.message
              }))
        }
      
        // const res = await req.json()

      
    }
}


export const cartActions = cartSlice.actions
export default cartSlice.reducer