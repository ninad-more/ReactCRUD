import './App.css';
import FoodItem from './Menu/FoodItem';
import {FoodItemDto} from './Menu/FoodItem.model'
import ItemList from './Menu/ItemList';

let App = () => {

  const burgerItems: FoodItemDto[] = [
    {
      id: 1,
      name: 'Burger 1',
      poster: 'https://foodish-api.herokuapp.com/images/burger/burger46.jpg'
    },

    {
      id: 2,
      name: 'Burger 2',
      poster: 'https://foodish-api.herokuapp.com/images/burger/burger26.jpg'
    }
  ]

  const pastaItems: FoodItemDto[] = [
    {
      id: 3,
      name: 'Pasta 1',
      poster: 'https://foodish-api.herokuapp.com/images/pasta/pasta27.jpg'
    },

    {
      id: 4,
      name: 'Pasta 2',
      poster: 'https://foodish-api.herokuapp.com/images/pasta/pasta24.jpg'
    }
  ]


  return (
    <div>
      <h3>Burgers : </h3>
      <ItemList FoodItems={burgerItems}/>

      <h3>Pasta :</h3>
      <ItemList FoodItems={pastaItems}/>
    </div>
  );
}

export default App;
