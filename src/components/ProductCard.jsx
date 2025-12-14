function ProductCard({ product, onAddToCart }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>R$ {product.price}</p>

      <button
        style={styles.button}
        onClick={() => onAddToCart(product)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    color: "#2e1f16",
  },
  price: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#5c4638",
  },
  button: {
    marginTop: "auto",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#d9b79a",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default ProductCard;
