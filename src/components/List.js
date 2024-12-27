import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List() {
  const [products, setProducts] = useState([]);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) =>
        console.error("There was an error deleting the product!", error)
      );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("fetch error"));
  }, []);
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        {products.map((product) => (
          <tr
            key={product.id}
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <td style={{ border: "1px solid black" }}>
              {product.product_name}
            </td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
