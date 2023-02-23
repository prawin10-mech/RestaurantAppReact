import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import react, { useState } from "react";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <div>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </div>
  );
}

export default App;
