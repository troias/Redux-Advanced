import classes from './CartButton.module.css';
import {  useDispatch } from 'react-redux'
import { uiActions } from '../../../src/store/ui'

const CartButton = (props) => {

  const dispatch =  useDispatch()

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
