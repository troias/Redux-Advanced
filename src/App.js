import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui'
import Notification from './components/UI/Notification'
import { useSelector, useDispatch } from 'react-redux'

let isInitial = true

function App() {
  const cart = useSelector(state => state.cart.cartItems)
  const showCart = useSelector(state => state.uiSlice.showCart)
  const notificationStatus = useSelector(state => state.uiSlice.notification)
  const dispatch = useDispatch()

  console.log("notificationStatus", notificationStatus)
  useEffect(() => {
    
      const sendCartData = async () => {
        dispatch(uiActions.showNotification({
          status: "Pending-request",
          title: "Sending",
          message: "Sending cart data!"
        }))
        const req = await fetch("https://react-adv-38f1a-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),

        })

        if (!req.ok) {
          throw new Error('sending cart data failed')
        }
        const res = await req.json()

        dispatch(uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully "
        }))
      }
      if (isInitial) {
        isInitial = false
        return 
      }

      sendCartData().catch(error => {
        dispatch(uiActions.showNotification({
          status: "error",
          title: error.title,
          message: error.message
        }))
      })
  
    
    
  }, [cart, dispatch]);

  return (
    <>
      {notificationStatus && <Notification
        status={notificationStatus.status}
        title={notificationStatus.title}
        message={notificationStatus.message}
      />}
      <Layout>

        {showCart && <Cart />}
        <Products />

      </Layout>
    </>
  );
}

export default App;
