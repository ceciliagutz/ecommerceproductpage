import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import './producto.css';
import { FaShoppingCart } from "react-icons/fa";

const Producto = ({ onAddToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <h2>Producto no encontrado</h2>;

    const precioDescuento = product.precio - (product.precio * (product.descuento || 0)) / 100;

    return (
        <div className="producto-container">
            <img src={product.imagenes.principal} alt={product.nombre} className="producto-imagen" />

            <div className="producto-info">
                <h3 className="producto-marca">{product.marca}</h3>
                <h1 className="producto-nombre">{product.nombre}</h1>
                
                <div className="producto-precio">
                    <span className="precio-desc">${precioDescuento}.00</span>
                    {product.descuento > 0 && (
                        <>
                            <span className="descuento">{product.descuento}%</span>
                            <span className="precioOriginal">${product.precioOriginal}.00</span>
                        </>
                    )}
                </div>

                <p className="producto-descripcion">{product.descripcion}</p>

                <button
                    className="btn-agregar"
                    onClick={() => onAddToCart(product.nombre, 1, precioDescuento)}
                >
                    <FaShoppingCart /> Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Producto;
