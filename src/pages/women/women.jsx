import React from 'react';
import TarjetaProducto from '../../components/tarjeta_productos/tarjetaProductos';
import products from '../../data/products.json';
import './women.css';

const Women = () => {
  const handleAddToCart = (nombre, cantidad, precio) => {
    console.log('Agregar al carrito:', nombre, cantidad, precio);
    alert(`Producto agregado: ${nombre}\nCantidad: ${cantidad}\nPrecio: $${precio}.00`);
  };

  return (
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
          onAddToCart={handleAddToCart}
          
        />
      ))}
    </div>
  );
};

export default Women;




