import classes from "./Header.module.css";
import mealsImage from "../../assests/main-image.png";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>REACT MEALS</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="main image" />
      </div>
    </>
  );
};

export default Header;
