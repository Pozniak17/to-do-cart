import propTypes from "prop-types";

// Крім розмітки, прописуємо логіку, де в спан вставляємо загальну суму.
const TotalAmount = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className="total-amount">
      <span>Total:</span>
      <span>{total}$</span>
    </div>
  );
};

export default TotalAmount;

TotalAmount.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      count: propTypes.number,
      price: propTypes.number,
    })
  ),
};
