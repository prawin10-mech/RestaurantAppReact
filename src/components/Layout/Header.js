import classes from "./Header.module.css";
import mealsImage from "../../assests/main-image.png";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className="header-heading">REACT MEALS</h1>
        <button className="header-cart-button" alt="main-image">
          Cart
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
