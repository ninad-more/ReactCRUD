import { FoodItemDto } from "./FoodItem.model";
import './FoodItem.css';
var FoodItem = (props: FoodItemDto) => {
    const buildLink = () =>  `/menu/${props.id}`


    return (
        <div className="item">
            <a href={buildLink()}>
                <img alt="Poster" src={props.poster}></img>
            </a>
            <p>
            <a href={buildLink()}>
                {props.name}
            </a>
            </p>
        </div>
    );
}

export default FoodItem; 