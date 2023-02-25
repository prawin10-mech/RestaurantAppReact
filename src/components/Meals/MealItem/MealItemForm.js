import classes from "./MealItemForm.module.css";
import { useState, useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const itemAddHandle = () => {
    // cartCtx.items.push(props.item, quantity: );
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };
  return (
    <form className={classes.form} key={props.id}>
      <Input
        label="Amount"
        input={{
          type: Number,
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="button" onClick={itemAddHandle}>
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
