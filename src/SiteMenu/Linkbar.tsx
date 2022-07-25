import { NavLink } from "react-router-dom";

var Linkbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://webstockreview.net/images/clipart-restaurant-restaurant-logo-5.png"
            width={100}
          ></img>
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/veg">
                Veg
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/non-veg">
                Non-Veg
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add Menu Item
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/edit/:id">
                Edit Menu Item
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Linkbar;
