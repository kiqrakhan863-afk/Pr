// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to Paradise Nursery! We are passionate about bringing nature closer to you. 
        Our mission is to provide high-quality plants, gardening tools, and expert advice 
        to help you create your perfect green space. Whether you're a seasoned gardener or 
        just starting out, we have something for everyone.
      </p>
      <p style={styles.paragraph}>
        Founded in 2010, Paradise Nursery has grown into a community of plant enthusiasts 
        dedicated to promoting sustainable gardening practices and spreading the joy of 
        greenery. We believe every home deserves a touch of nature.
      </p>
      <p style={styles.paragraph}>
        Visit us in-store or explore our online shop to discover our wide selection of 
        plants, pots, and accessories. Let's grow together!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#2E8B57",
  },
  paragraph: {
    marginBottom: "1rem",
    fontSize: "1rem",
    color: "#333",
  },
};

export default AboutUs;
