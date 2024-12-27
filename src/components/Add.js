import React from "react";

export default function Add() {
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    category: "",
    quantity: 0,
    price: 0,
    date_added: "",
  });

  return (
    <div>
      <h2>Add New Product</h2>
      <input
        type="text"
        value={product_name}
        onChange={(e) =>
          onChange({ ...newProduct, product_name: e.target.value })
        }
        placeholder="Product Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => onChange({ ...newProduct, category: e.target.value })}
        placeholder="Category"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => onChange({ ...newProduct, quantity: e.target.value })}
        placeholder="Quantity"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => onChange({ ...newProduct, price: e.target.value })}
        placeholder="Price"
      />
      <input
        type="date"
        value={date_added}
        onChange={(e) =>
          onChange({ ...newProduct, date_added: e.target.value })
        }
      />
      <button onClick={onAddProduct}>Add Product</button>
    </div>
  );
}
