import React from 'react';
import './App.css'; // Make sure App.css exists with your styles

function App() {
  const handleGetStarted = () => {
    alert('Welcome to Paradise Nursery! Start exploring our plants.');
    // You can also redirect to another page or component
    // window.location.href = "/products";
  };

  return (
    <div className="App">
      {/* Header / Landing Section */}
      <header>
        <h1>Paradise Nursery</h1>
        <p>Bring greenery and life to your home and garden.</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </header>

      {/* Main Content */}
      <main>
        <h2>Welcome to Paradise Nursery</h2>
        <p>
          Explore our wide variety of plants, gardening tips, and accessories.
          Make your home and garden a paradise with us!
        </p>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;