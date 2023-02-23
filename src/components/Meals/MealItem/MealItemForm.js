import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = () => {
  const [amountInput, setAmountInput] = useState(1);
  const amountChangeHandle = (event) => {
    setAmountInput(event.target.value);
  };
  return (
    <form className={classes.form}>
      <label htmlFor="amount">Amount: </label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amountInput}
        min="0"
        onChange={amountChangeHandle}
      />
      <br />
      <button type="button">+Add</button>
    </form>
  );
};

export default MealItemForm;
