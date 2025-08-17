import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Women from './pages/women/women';
import Producto from './pages/producto/producto';
import { useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = (nombre, cantidad, precio, imagen) => {
    if(cantidad === 0) return;
    const index = carrito.findIndex(item => item.nombre === nombre);
    if(index !== -1){
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += cantidad;
      setCarrito(nuevoCarrito);
    } else{
      setCarrito([...carrito, { nombre,cantidad, precio, imagen}]);
    }
  };

  return (
    <>
      <Navbar carrito={carrito} setCarrito={setCarrito}/>
      <Routes>
        <Route path="/women" element={<Women onAddToCart={handleAddToCart} />} />
        <Route path="/producto/:id" element={<Producto onAddToCart={handleAddToCart} />} />
      </Routes>
    </>
  );
}

export default App;

