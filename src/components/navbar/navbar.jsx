import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
     
      <div className="logo">
        <Link to="/">sneakers</Link>
      </div>

    
      <ul className="nav-links">
        <li><Link to="/collections">Collections</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      
      <div className="desktop-icons">
        <Link to="/cart"><FaShoppingCart size={22} /></Link>
        <Link to="/profile"><FaUserCircle size={22} /></Link>
      </div>

      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

  
      <aside className={`side-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/collections" onClick={toggleMenu}>Collections</Link></li>
          <li><Link to="/men" onClick={toggleMenu}>Men</Link></li>
          <li><Link to="/women" onClick={toggleMenu}>Women</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <div className="mobile-icons">
          <Link to="/cart"><FaShoppingCart size={22} /></Link>
          <Link to="/profile"><FaUserCircle size={22} /></Link>
        </div>
      </aside>
    </nav>
  );
}

export default Navbar;
