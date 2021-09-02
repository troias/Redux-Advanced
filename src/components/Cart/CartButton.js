import classes from './CartButton.module.css';
import {  useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../../src/store/ui'


const CartButton = (props) => {
  const totalAmount = useSelector(state => state.cart.totalCartItemQuantity)

  const dispatch =  useDispatch()

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
