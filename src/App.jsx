import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(indexToRemove) {
  setCart(cart.filter((_, index) => index !== indexToRemove));
}


  return (
    <div style={styles.page}>
      <h1>Mini E-commerce</h1>

      <p>
        🛒 Itens no carrinho: <strong>{cart.length}</strong>
      </p>

      {/* LISTA DE PRODUTOS */}
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* CARRINHO */}
<Cart cart={cart} onRemove={removeFromCart} />

    </div>
  );
}

const styles = {
  page: {
  padding: "40px",
  maxWidth: "1000px",
  margin: "0 auto",
},

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default App;
