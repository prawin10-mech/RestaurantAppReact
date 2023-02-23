import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div className={classes.button}>
      <span className={classes.icon}>{CartIcon}</span>
      <span>Cart</span>
      <span className={classes.badge}>0</span>
    </div>
  );
};

export default HeaderCartButton;
