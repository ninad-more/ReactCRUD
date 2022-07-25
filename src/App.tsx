import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NonVeg from "./FoodType/Nonveg";
import Veg from "./FoodType/Veg";
import Home from "./MenuCard/LandingPage";
import Linkbar from "./SiteMenu/Linkbar";
import CreateItem from "./MenuCard/AddMenuItem";
import EditItem from "./MenuCard/EditMenuItem";
import DeleteItem from "./MenuCard/DeleteMenuItem";
let App = () => {
  return (
    <>
      <BrowserRouter>
        <Linkbar />
        <div className="container">
          <Link to="/"></Link>
          <Link to="/veg"></Link>
          <Link to="/non-veg"></Link>
          <Link to="/create"></Link>
          <Link to="/edit/:id"></Link>
          <Link to="/delete/:id"></Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/veg" element={<Veg />}></Route>
            <Route path="/non-veg" element={<NonVeg />}></Route>
            <Route path="/create" element={<CreateItem />}></Route>
            <Route path="/edit/:id" element={<EditItem />}></Route>
            <Route path="/delete/:id" element={<DeleteItem />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
