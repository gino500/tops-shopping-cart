// import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
  const url = "https://fakestoreapi.com/products?limit=1";
  return (
    <>
      <Navbar />

      <div>Hello from Home Page</div>
      <div>
        <h1>Featured Item</h1>
        <Card url={url} />
      </div>
      <Link to="shop">Shop Now</Link>
    </>
  );
};

export default Home;
