import MealsSummary from "./MealsSummary";
import classes from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <div className={classes.meals}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
