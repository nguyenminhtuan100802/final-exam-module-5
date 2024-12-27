import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EditProductForm from "../components/EditProductForm";

export default function Edit() {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching the product!", error)
      );
  }, [id]);

  const handleSaveEdit = () => {
    axios
      .put(`${API_URL}/${product.id}`, product)
      .then((response) => {
        navigate("/");
      })
      .catch((error) =>
        console.error("There was an error editing the product!", error)
      );
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        type="text"
        value={product.product_name}
        onChange={(e) => onChange({ ...product, product_name: e.target.value })}
      />
      <input
        type="text"
        value={product.category}
        onChange={(e) => onChange({ ...product, category: e.target.value })}
      />
      <input
        type="number"
        value={product.quantity}
        onChange={(e) => onChange({ ...product, quantity: e.target.value })}
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => onChange({ ...product, price: e.target.value })}
      />
      <input
        type="date"
        value={product.date_added}
        onChange={(e) => onChange({ ...product, date_added: e.target.value })}
      />
      <button onClick={onSaveEdit}>Save Changes</button>
    </div>
  );
}
