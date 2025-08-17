import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src="/imagenes/BannerSneaker.png" 
        alt="Banner de Sneaker Company" 
        className="home-banner" 
      />
      <h1>Bienvenido a Sneaker Company</h1>
      <p>Explora nuestros productos y encuentra tu par ideal.</p>
    </div>
  );
};

export default Home;
