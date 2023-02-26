import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const total = `${cartCtx.totalAmount.toFixed(2)}`;

  const CartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };
  const CartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            name={item.name}
            key={item.id}
            quantity={item.quantity}
            price={item.price}
            onAdd={CartItemAddHandler.bind(null, item)}
            onRemove={CartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  console.log(CartItems);
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
