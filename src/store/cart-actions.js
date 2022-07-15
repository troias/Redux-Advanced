import { uiActions } from "./ui"
import { cartActions } from "./cart"

export const sendCartData = (cart) => {
  return async (dispatch) => {
    //side effect
    dispatch(
      uiActions.showNotification({
        status: "Pending-request",
        title: "Sending",
        message: "Sending cart data!",
      })
    )

    const sendRequest = async () => {
      console.log("sendRequest", process.env.REACT_APP_FIREBASE_API)
      const req = await fetch(process.env.REACT_APP_FIREBASE_API, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.cartItems,
          totalCartItemQuantity: cart.totalCartItemQuantity,
        }),
      })
      if (!req.ok) {
        throw new Error("sending cart data failed")
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully ",
        })
      )
    }
    try {
      await sendRequest()
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: error.title,
          message: error.message,
        })
      )
    }
  }
}

export const fetchCartData = () => {
  return async (dispatch) => {
    const reqData = async () => {
      const req = await fetch(process.env.REACT_APP_FIREBASE_API)
      if (!req.ok) {
        throw new Error("sending cart data failed")
      }
      const res = await req.json()

      return res
    }
    try {
      const cartData = await reqData()
      console.log("cartData", cartData)
      if (!cartData) {
        throw new Error("Add Item to cart")
      }
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalCartItemQuantity: cartData.totalCartItemQuantity || 0,
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: error.title,
          message: error.message,
        })
      )
    }
  }
}
