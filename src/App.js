import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { useSelector, useDispatch } from 'react-redux'
import {sendCartData} from './store/cart'
let isInitial = true

function App() {
  const cart = useSelector(state => state.cart.cartItems)
  const showCart = useSelector(state => state.uiSlice.showCart)
  const notificationStatus = useSelector(state => state.uiSlice.notification)
  const dispatch = useDispatch()

  console.log("notificationStatus", notificationStatus)

  useEffect(() => {

    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(cart))

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
