import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => { setMenuOpen(!menuOpen); };

  return (
    <nav className="navbar">
      <div className="navbar-container">
 <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

        <div className="logo">
          <Link to="/">sneakers</Link>
        </div>
<div className="nav-left">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`} >
          <button className="close-menu" onClick={toggleMenu} aria-label="Cerrar menú">
            <FaTimes size={25} />
          </button>
          <li><Link to="/collections" onClick={toggleMenu}>Collections</Link></li>
          <li><Link to="/men" onClick={toggleMenu}>Men</Link></li>
          <li><Link to="/women" onClick={toggleMenu}>Women</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className="nav-icons">
        <Link to="/cart" aria-label="Carrito de compras">
          <FaShoppingCart size={22} color="#69707d"/>
        </Link>
        <Link to="/profile" aria-label="Perfil">
          <FaUserCircle size={22} color="#69707d"/>
        </Link>
      </div>
      </div>
     
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;

