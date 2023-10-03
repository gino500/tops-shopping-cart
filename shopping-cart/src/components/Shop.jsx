import { useState, useEffect } from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1", {
      mode: "cors",
    })
      .then(response => response.json())
      .then(response => setData(response.image));
  }, []);

  const imgStyle = {
    height: "100px",
    width: "100px",
  };

  return (
    <>
      <div>Shopping Page!</div>

      <ShopCard props={data} />
    </>
  );
};

export default Shop;
