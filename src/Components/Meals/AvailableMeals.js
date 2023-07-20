import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tandoori Chicken Biryani",
    description: "special combination of maratha and hyderabadi style Biryani",
    price: 250.0,
  },
  {
    id: "m2",
    name: "Chicken Kabab",
    description: "Chicken finely fried in Oil with great flavour!",
    price: 150.0,
  },
  {
    id: "m3",
    name: "Gobi Manchurian",
    description:
      "Deep-fried, crispy cauliflower florets tossed in a thick and spicy Manchurian gravy",
    price: 120.0,
  },
  {
    id: "m4",
    name: "Egg Fried Rice",
    description:
      "Simple, aromatic, and healthy meal of scrambled eggs stir fried with rice",
    price: 120.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
