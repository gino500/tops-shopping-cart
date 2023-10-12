import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const btnStyle = {
    display: 'flex',
    justifyContent: "flex-end"
  }
  return (
    <div>
      <div>
        <div>Logo</div>
      </div>
      <div style={btnStyle}>
        <NavLink to="/">Home Btn</NavLink>
        <NavLink to="shop">Shop Btn</NavLink>
        <NavLink to="/shop/checkout">Checkout Btn</NavLink>
      </div> 
    </div>
  );
};

export default Navbar;
