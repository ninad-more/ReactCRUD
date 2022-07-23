import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NonVeg from "./FoodType/Nonveg";
import Veg from "./FoodType/Veg";
import Home from "./MenuCard/LandingPage";
import Linkbar from "./SiteMenu/Linkbar";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Linkbar />
        <div className="container">
          <Link to="/"></Link>
          <Link to="/veg"></Link>
          <Link to="/non-veg"></Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/veg" element={<Veg />}></Route>
            <Route path="/non-veg" element={<NonVeg />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
