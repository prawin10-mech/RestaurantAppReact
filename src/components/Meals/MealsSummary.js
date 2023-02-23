import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered To YOU</h2>
      <p>
        Choose your favourite food from our board selection of available meals
        and ejoy your deliscious lunch or dinner at your home.
      </p>
      <p>
        All out Meals are cooked with high-quality ingredents, just-in-time and
        ofcourse by experienced chefs.
      </p>
    </div>
  );
};

export default MealsSummary;
