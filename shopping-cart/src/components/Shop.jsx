import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Checkout from "./Checkout";

const Shop = () => {
  const url = "https://fakestoreapi.com/products?limit=15";
  return (
    <>
      <Navbar />
      <div>Shopping Page!</div>
      <Card url={url} />
    {/* <Link to="checkout">Checkout</Link> */}

    </>
  );
};

export default Shop;
