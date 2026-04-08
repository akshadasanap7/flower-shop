import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>🌸 About Our Flower Shop 🌸</h1>

      <p className="intro">
        Welcome to our online flower store! We bring you the freshest and most
        beautiful flowers to make your special moments even more memorable.
      </p>

      <div className="about-container">
        <div className="about-box">
          <h2>🌼 Our Mission</h2>
          <p>
            Our mission is to spread happiness and love through flowers. We aim
            to deliver freshness, beauty, and emotions in every bouquet.
          </p>
        </div>

        <div className="about-box">
          <h2>💐 What We Offer</h2>
          <p>
            We provide a wide variety of flowers for weddings, birthdays,
            anniversaries, and all celebrations. Each flower is carefully
            selected to ensure quality.
          </p>
        </div>

        <div className="about-box">
          <h2>🚚 Fast Delivery</h2>
          <p>
            We ensure quick and safe delivery so your flowers reach fresh and on
            time. Customer satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;