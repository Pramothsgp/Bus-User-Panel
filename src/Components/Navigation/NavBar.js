import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
 return (
     <nav className="nav-container">
      {/* <IoClose className="nav__toggle"/> */}
       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/home-map" className="nav__link">
               Home
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/map" className="nav__link">
               Bus Route
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/Deliverydetails"
               className="nav__link"
             >
               HLD
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/orders"
               className="nav__link"
             >
               Orders
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/location"
               className="nav__link"
             >
               Help
             </NavLink>
           </li>

         </ul>
         <div className="nav__close" id="nav-close">
           
         </div>
       </div>

     </nav>
 );
};

export default NavBar;