import "./Card.css";

function Card({ name, color, meaning, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <p><strong>Color:</strong> {color}</p>
        <p><strong>Meaning:</strong> {meaning}</p>

        {/* ✅ PRICE */}
        <p className="price">₹{price}</p>

        {/* ✅ BUTTON */}
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;