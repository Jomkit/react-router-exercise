import { NavLink } from "react-router-dom";
import "../stylesheets/NavBar.css";

const NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/coolish" >Coolish</NavLink>
            <NavLink to="/famichiki" >Family Chicken</NavLink>
            <NavLink to="/coffee-jelly" >Coffee Jelly</NavLink>
        </div>
    )
}

export default NavBar