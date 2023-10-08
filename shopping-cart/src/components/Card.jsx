import { useState, useEffect } from "react";

const Card = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      mode: "cors",
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  // temp css
  const imgStyle = {
    height: "100px",
    width: "100px",
  };

  return (
    data && (
      <>
        {data.map(product => (
          <img style={imgStyle} key={product.id} src={product.image} alt="" />
        ))}
      </>
    )
  );
};

export default Card;
