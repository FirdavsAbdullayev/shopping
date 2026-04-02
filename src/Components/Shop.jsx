import axios from "axios";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get("http://localhost:3000/products");
        
        // Agar to'g'ridan-to'g'ri massiv qaytsa res.data o'zini ishlatamiz.
        setProducts(res.data.products || res.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    }
    
    getData();
  }, []);

  return (
    <main className="shop-main">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {/* 2. Rasm manzili ob'ektdan ulanmoqda */}
              <img src={product.image}  className="product-image" />
            </div>

            <div className="product-info">
              {/* Sarlavha sifatida title ko'rsatilmoqda */}
              <h3 className="product-title">{product.title}</h3>
              <span className="product-price">${product.price}</span>
            </div>

            {/* 3. JSON da maydon 'description' deb nomlangan */}
            <p className="product-desc">{product.description}</p>
            <button className="buy-btn" onClick={() => {}}>Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;