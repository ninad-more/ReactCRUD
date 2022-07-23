import { useEffect, useState } from "react";
import { LandingPageDto } from "./FoodItem.model";
import ItemList from "./ItemList";

var Home = () => {
  const [foodItems, setFoodItems] = useState<LandingPageDto>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFoodItems({
        burgerItems: [
          {
            id: 1,
            name: "Burger 1",
            poster:
              "https://foodish-api.herokuapp.com/images/burger/burger46.jpg",
          },

          {
            id: 2,
            name: "Burger 2",
            poster:
              "https://foodish-api.herokuapp.com/images/burger/burger26.jpg",
          },
        ],
        pastaItems: [
          {
            id: 3,
            name: "Pasta 1",
            poster:
              "https://foodish-api.herokuapp.com/images/pasta/pasta27.jpg",
          },

          {
            id: 4,
            name: "Pasta 2",
            poster:
              "https://foodish-api.herokuapp.com/images/pasta/pasta24.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>Burgers : </h3>
      <ItemList FoodItems={foodItems.burgerItems} />

      <h3>Pasta :</h3>
      <ItemList FoodItems={foodItems.pastaItems} />
    </>
  );
};

export default Home;
