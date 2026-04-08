import flowers from "../data/flowers.json"; // or .js if you used js
import Card from "../components/card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>🌸 Buy Beautiful Flowers</h1>

      <div className="cards">
        {flowers.map((flower) => (
          <Card key={flower.id} {...flower} />
        ))}
      </div>
    </div>
  );
}
export default Home;