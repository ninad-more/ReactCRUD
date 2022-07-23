import FoodItem from "./FoodItem";
import { FoodItemDto } from "./FoodItem.model";
import "./FoodItem.css";
import ListComponent from "./ListComponent";
import Loading from "./Loading";
import Error from "./Error";

var ItemList = (props: itemListDto) => {
  return (
    <ListComponent
      list={props.FoodItems}
      loadingUI={<Loading />}
      errorUI={<Error />}
    >
      <div className="items">
        {props.FoodItems?.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    </ListComponent>
  );
};

export default ItemList;

interface itemListDto {
  FoodItems?: FoodItemDto[];
}
