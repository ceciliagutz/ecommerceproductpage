import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar({ carrito }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carritoOpen, setCarritoOpen] = useState(false);

  const toggleMenu = () => { setMenuOpen(!menuOpen); };
  const toggleCarrito = () => setCarritoOpen(!carritoOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menú">
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>

        <div className="logo">
          <Link to="/home.jsx">sneakers</Link>
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
          <button className="boton-carrito" onClick={toggleCarrito}>
            <FaShoppingCart size={22} color="#69707d" />
            {carrito.length > 0 && (
              <span className="carrito-count">
                {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
              </span>
            )}
          </button>


          <Link to="/profile" aria-label="Perfil">
            <FaUserCircle size={22} color="#69707d" />
          </Link>
        </div>
      </div>


      {carritoOpen && (
        <div className="carrito-desplegable">
          {carrito.length === 0 ? (
            <p className="carrito-vacio">Tu carrito está vacío</p>
          ) : (
            <>
              {carrito.map((item, index) => (
                <div key={index} className="item-carrito">
                  <img src={item.imagen} alt={item.nombre} className="item-imagen" />
                  <div className="item-detalles">
                    <span className="item-nombre">{item.nombre}</span>
                    <span className="item-precio">
                      ${item.precio}.00 x {item.cantidad} = ${item.precio * item.cantidad}.00
                    </span>
                  </div>
                </div>
              ))}
              <button className="btn-ver-carrito">Ver carrito</button>
            </>
          )}
        </div>
      )}

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;

