import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <Meals />
    </div>
  );
}

export default App;
