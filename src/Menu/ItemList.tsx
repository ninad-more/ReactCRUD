import FoodItem from "./FoodItem";
import { FoodItemDto } from "./FoodItem.model";
import "./FoodItem.css";
import Loading from "./Loading";
import Error from "./Error";

var ItemList = (props: itemListDto) => {
  if (!props.FoodItems) {
    return <Loading />;
  } else if (props.FoodItems) {
    return (
      <div className="items">
        {props.FoodItems.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    );
  } else {
    return <Error />;
  }
};

export default ItemList;

interface itemListDto {
  FoodItems?: FoodItemDto[];
}
