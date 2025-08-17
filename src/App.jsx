import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Women from './pages/women/women';
import Producto from './pages/producto/producto';

function App() {
  const handleAddToCart = (nombre, cantidad, precio) => {
    console.log('Agregar al carrito:', nombre, cantidad, precio);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/women" element={<Women onAddToCart={handleAddToCart} />} />
        <Route path="/producto/:id" element={<Producto onAddToCart={handleAddToCart} />} />
      </Routes>
    </>
  );
}

export default App;

