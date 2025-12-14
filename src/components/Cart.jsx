function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>Carrinho</h2>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.item}>
                <span>
                  {item.name} — R$ {item.price.toFixed(2)}
                </span>

                <button
                  style={styles.removeButton}
                  onClick={() => onRemove(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <p style={styles.total}>
            Total: <strong>R$ {total.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "60px",
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    maxWidth: "500px",
  },
  list: {
    padding: 0,
    listStyle: "none",
    marginTop: "16px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  },
  removeButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#b03030",
    cursor: "pointer",
    fontWeight: "600",
  },
  total: {
    marginTop: "24px",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "right",
  },
};

export default Cart;
