import React from "react";

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#d6336c" }}>Filter Cream</h1>
      <p>
        Brightening cream that targets pigmentation and uneven skin tone.
        Visible results in 14 days.
      </p>
      <ul>
        <li>Reduces dark spots</li>
        <li>Gentle and safe for daily use</li>
        <li>Natural active ingredients</li>
      </ul>
      <h2>Order Now</h2>
      <form>
        <input placeholder="Your Name" /><br /><br />
        <input placeholder="Your Email" /><br /><br />
        <input placeholder="Skin Type (e.g. oily, dry)" /><br /><br />
        <textarea placeholder="Message (optional)" /><br /><br />
        <button>Send Order</button>
      </form>
    </div>
  );
}
