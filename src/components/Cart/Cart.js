import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "sushi", price: 20, amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$36.99</span>
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
