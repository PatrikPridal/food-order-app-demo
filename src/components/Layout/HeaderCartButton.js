import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../components/store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);
  const cartCtx = useContext(CartContext); // header button will be rendered whenever context changes

  const { items } = cartCtx; //destructure so I can add "items" into useEffect hook as dependencies
  //reduce method for transform array of data into single value (number in this case)
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ''}`;

  useEffect(() =>{
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true); // every add into cart setting bump classes on btn on

    //timeout for 300ms (as long that effect is) then set that effect to false
    setTimeout(() => {
      setBtnIsHiglighted(false);
    }, 300);
  }, [items]); //dependencies -> [items]

  // passing "numberOfCartItems into span for number of cart items in it"
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
