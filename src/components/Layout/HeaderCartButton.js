import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../components/store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext); // header button will be rendered whenever context changes

  //reduce method for transform array of data into single value (number in this case)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // passing "numberOfCartItems into span for number of cart items in it"
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
