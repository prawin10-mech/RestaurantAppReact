import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const itemAddHandle = () => {
    const quantity = document.getElementById("amount_" + props.id).value;
    props.onAddToCart(quantity);
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
