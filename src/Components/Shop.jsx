import React from "react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Product 01",
      price: "$120",
      desc: "Essential everyday object with a clean finish.",
    },
    {
      id: 2,
      name: "Product 02",
      price: "$240",
      desc: "Refined aesthetic form for modern spaces.",
    },
    {
      id: 3,
      name: "Product 03",
      price: "$180",
      desc: "Minimalist utility tool built to last.",
    },
    {
      id: 4,
      name: "Product 04",
      price: "$310",
      desc: "Premium quality finish with timeless design.",
    },
  ];

  return (
    <main className="shop-main">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {/* Rasm URL manzili kiritilsa, bu yerda ko'rinadi */}
              <img src="" alt={product.name} className="product-image" />
            </div>

            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <span className="product-price">{product.price}</span>
            </div>

            <p className="product-desc">{product.desc}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
