import React from 'react';
import TarjetaProducto from '../../components/tarjeta_productos/tarjetaProductos.jsx';
import products from '../../data/products.json';
import './women.css';

const Women = ({ onAddToCart }) => {
  return (
    <div>
      <img 
        src="/imagenes/womenb.jpg" 
        alt="Banner Women" 
        className="women-banner" 
      />

     
      <div className="container-women">
        {products.map((prod) => (
          <TarjetaProducto
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            marca={prod.marca}
            precio={prod.precio}
            precioOriginal={prod.precioOriginal}
            descripcion={prod.descripcion}
            imagenPrincipal={prod.imagenes.principal}
            descuento={prod.descuento}
            onAddToCart={() => onAddToCart(prod.nombre, 1, prod.precio, prod.imagenes.principal)}
          />
        ))}
      </div>
    </div>
  );
};

export default Women;






