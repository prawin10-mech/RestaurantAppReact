import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <div className={classes.meals}>
      <MealsSummary />
    </div>
  );
};

export default Meals;
