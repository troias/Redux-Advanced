import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector} from 'react-redux'


function App() {
  const cart = useSelector(state => state.cart.cartItems)
  const showCart = useSelector(state => state.uiSlice.showCart)
  console.log("cart", cart)

  useEffect(() => {
    fetch("https://react-adv-38f1a-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
      
    })
  }, [cart])

  return (
    <Layout>
      
     {showCart && <Cart />}
      <Products />

    </Layout>
  );
}

export default App;
