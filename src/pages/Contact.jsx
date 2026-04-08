import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>📞 Contact Us</h1>
      <p className="subtitle">We would love to hear from you 🌸</p>

      <div className="contact-container">
        
        {/* LEFT SIDE INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Nashik, Maharashtra</p>
          <p>📧 flowershop@gmail.com</p>
          <p>📱 +91 9876543210</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          
          <select>
            <option>Select Occasion</option>
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>

          <textarea placeholder="Your Message..." rows="4"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
