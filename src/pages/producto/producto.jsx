import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import './producto.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Producto = ({ onAddToCart }) => {
  const { id } = useParams();
  const producto = products.find(p => p.id === parseInt(id));
  const [cantidad, setCantidad] = useState(1);
  const [imagenActual, setImagenActual] = useState(producto?.imagenes?.principal);

const [lightboxAbierto, setLightboxAbierto] =useState(false);
const[indiceImagen, setIndiceImagen] = useState(0);

  if (!producto) return <h2>Producto no encontrado</h2>;

  const precioDescuento = producto.precio - (producto.precio * (producto.descuento  )) / 100;

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

  const abrirLightbox = (index) => {
    setIndiceImagen(index);
    setLightboxAbierto(true);
  };
  const siguienteImagen =() =>{
    setIndiceImagen((indiceImagen +1 ) % imagenes.length);
  };
  const anteriorImagen =() =>{
    setIndiceImagen ((indiceImagen -1 + imagenes.length) % imagenes.length);
  };
const imagenes = [producto.imagenes.principal, ...producto.imagenes.miniaturas];

  return (
    <div className="producto-detalle">
      <div className="imagenes-producto">
        <img src={imagenActual} alt={producto.nombre} className="imagen-producto" onClick={() => abrirLightbox(imagenes.indexOf(imagenActual))}/>
        
        
        <div className="miniaturas">
          {producto.imagenes.miniaturas.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`${producto.nombre} ${idx}`} 
              className={`miniaturas ${imagenActual === img ? 'seleccionada' : ''}`}
              onClick={() => setImagenActual(img)}
            />
          ))}
        </div>
      </div>

      <div className="carrusel-responsivo">
        <button onClick={anteriorImagen} className="flecha-carrusel"><FaChevronLeft /></button>
      
      <img src={imagenes[indiceImagen]} alt="Producto" className="imagen-carrusel"
      onClick={() => abrirLightbox(indiceImagen)}/>
      <button onClick={siguienteImagen} className='flecha-carrusel'><FaChevronRight/></button>
    </div>
      <div className="detalle-info">
        <h3 className="marca">{producto.marca}</h3>
        <h2 className="nombre">{producto.nombre}</h2>
        <div className="precio-container">
          <span className="precio-desc">${precioDescuento}.00</span>
          {producto.descuento > 0 && (
            <>
              <span className="descuento">{producto.descuento}%</span>
           
              <span className="precioOriginal">${producto.precioOriginal}.00</span>
            </>
          )}
        </div>
        <p className="descripcion">{producto.descripcion}</p>
<div className="carrito">
        <div className="cantidad">
          <button onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementar}>+</button>
        </div>

        <button
          className="btn-agregar"
          onClick={() => onAddToCart(producto.nombre, cantidad, precioDescuento)}
        >
          <FaShoppingCart/> Agregar al carrito
        </button>
      </div>
      </div>
      
      {lightboxAbierto && (
        <div className="lightbox-overlay">
          <button className="cerrar" onClick={() => setLightboxAbierto(false)}>
            <FaTimes />
          </button>

          <button className="flecha izquierda" onClick={anteriorImagen}>
            <FaChevronLeft />
          </button>

          <img 
            src={imagenes[indiceImagen]} 
            alt="Imagen ampliada" 
            className="imagen-lightbox" 
          />

          <button className="flecha derecha" onClick={siguienteImagen}>
            <FaChevronRight />
          </button>
        </div>

      )}
    </div>
  );
};

export default Producto;

