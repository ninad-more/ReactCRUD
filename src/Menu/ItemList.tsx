import FoodItem from "./FoodItem";
import { FoodItemDto } from "./FoodItem.model";
import './FoodItem.css';

var ItemList = (props : itemListDto) => {

    return ( 
        <div className="items">
            {props.FoodItems.map(item => <FoodItem  {...item} key={item.id} />)}
        </div>
    );
}

export default ItemList;

interface itemListDto {
    FoodItems : FoodItemDto[];
}