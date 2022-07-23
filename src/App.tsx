import './App.css';
import FoodItem from './Menu/FoodItem';
import {FoodItemDto} from './Menu/FoodItem.model'

let App = () => {

  const foodItem: FoodItemDto = {
    id:1,
    name: 'Burger',
    poster: 'https://foodish-api.herokuapp.com/images/burger/burger46.jpg'
  }


  return (
    <div>
      <FoodItem {...foodItem}/>
    </div>
  );
}

export default App;
