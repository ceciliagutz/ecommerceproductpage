import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './tarjetaProducto.css';
import { Link } from "react-router-dom";

const TarjetaProducto = ({ id, nombre, marca, precio, precioOriginal, descripcion, imagenPrincipal, descuento=0, onAddToCart }) => {
    const [cantidad, setCantidad] = useState(0);
    const precioDescuento = precio - (precio * descuento) / 100;

    const incrementar = () => setCantidad(cantidad + 1);
    const decrementar = () => cantidad > 0 && setCantidad(cantidad - 1);

    return (
        <div className="tarjeta-producto">
            <Link to={`/producto/${id}`}>
            <img src={imagenPrincipal} alt={nombre} className="imagen-principal"/>
            </Link>
            <div className="informacion">
                <h3 className="marca">{marca}</h3>
                <h2 className="nombre">{nombre}</h2>
                <div className="precio">
                    <span className="precio-desc">${precioDescuento}.00</span>
                    {descuento > 0 && (
                        <>
                            <span className="descuento">{descuento}%</span>
                            <span className="precioOriginal">${precioOriginal}.00</span>
                        </>
                    )}
                </div>
                <p className="descripcion">{descripcion}</p>

                <div className="cantidad">
                    <button onClick={decrementar}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={incrementar}>+</button>
                </div>

                <button
                    className="btn-agregar"
                    onClick={() => onAddToCart(nombre, cantidad, precioDescuento, imagenPrincipal)}
                >
                    <FaShoppingCart/> Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default TarjetaProducto;


