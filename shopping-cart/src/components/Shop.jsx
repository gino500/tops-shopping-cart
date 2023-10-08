import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Shop = () => {
  const url = "https://fakestoreapi.com/products?limit=15";
  return (
    <>
      <Navbar />
      <div>Shopping Page!</div>
      <Card url={url} />
    </>
  );
};

export default Shop;
