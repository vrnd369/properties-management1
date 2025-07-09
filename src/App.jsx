import React, { useState, useEffect } from "react";
import { FaHome, FaWarehouse, FaBuilding, FaChevronDown } from "react-icons/fa";
import { GiVillage, GiGate } from "react-icons/gi";
import "./App.css";

const services = [
  { label: "Home", icon: <FaHome size={32} /> },
  { label: "Independent Villas", icon: <GiVillage size={32} /> },
  { label: "Commercial", icon: <FaWarehouse size={32} /> },
  { label: "Residential", icon: <FaBuilding size={32} /> },
  { label: "Gated Community", icon: <GiGate size={32} /> }
];

const carouselImages = [
  "/images/analog-landscape-city-with-buildings.jpg",
  "/images/3d-electric-car-building.jpg",
  "/images/office-buildings.jpg"
];

function App() {
  const [language, setLanguage] = useState("English");
  const [currentImage, setCurrentImage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleClick = (label) => {
    alert(`${label} clicked!`);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Hindi" : "English"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    alert(`You searched for: ${searchText}`);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Properties & Management Services</div>
        <div className="header-actions">
          <button className="header-button" onClick={() => handleClick("Property Listing")}>
            Property Listing <FaChevronDown />
          </button>
          <button className="header-button" onClick={() => handleClick("Login")}>
            Login
          </button>
          <button className="header-button" onClick={toggleLanguage}>
            {language} <FaChevronDown />
          </button>
        </div>
      </header>

      <div className="carousel-container">
        <img
          src={carouselImages[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="service-box">
        {services.map((service) => (
          <button
            key={service.label}
            onClick={() => handleClick(service.label)}
            className="service-item"
          >
            {service.icon}
            <strong>{service.label}</strong>
          </button>
        ))}
      </div>

      {/* New Search Bar Below Service Icons */}
      <div className="search-bar-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search properties..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="search-box">
        <div className="search-item">
          <small>State</small>
          <strong>Hyderabad</strong>
          <div className="subtext">HYD, Hyderabad Airport India</div>
        </div>
        <div className="search-item">
          <small>State</small>
          <strong>Bangalore</strong>
          <div className="subtext">BLR, Bengaluru International Airport</div>
        </div>
        <div className="search-item">
          <small>State</small>
          <strong>Mumbai</strong>
          <div className="subtext">BOM, Mumbai International Airport</div>
        </div>
      </div>
    </div>
  );
}

export default App;
