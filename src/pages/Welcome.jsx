import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <h1>🌸 Welcome to My Online Flower Store 🌸</h1>
      <p>Discover beautiful flowers for every occasion</p>

      <Link to="/home">
        <button>Explore Flowers</button>
      </Link>
    </div>
  );
}

export default Welcome;