import React, { useRef } from 'react';
import './Carrito.css';

const Carrito = ({ productos, eliminarDelCarrito }) => { // Cambiado eliminarProducto por eliminarDelCarrito
  const carritoRef = useRef(null);

  const calcularTotal = () => {
    let total = 0;
    productos.forEach(producto => {
      total += parseFloat(producto.precio);
    });
    return total.toFixed(2); // Redondea el total a dos decimales
  };

  const imprimirCarrito = () => {
    const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.write('<html><head><title>Carrito de Compras</title>');
    ventanaImpresion.document.write('<link rel="stylesheet" type="text/css" href="styles.css">'); // Cambia 'styles.css' por el nombre de tu archivo CSS
    ventanaImpresion.document.write('</head><body>');
    ventanaImpresion.document.write(carritoRef.current.innerHTML);
    ventanaImpresion.document.write('</body></html>');
    ventanaImpresion.document.close();
    ventanaImpresion.print();
  };

  return (
    <div className="carrito" ref={carritoRef}>
      <h2>Presupuesto Radiadores Franco</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <strong>Producto:</strong> {producto.producto} - ${producto.precio}
            {producto.marca && <span>, <strong>Marca:</strong> {producto.marca}</span>}
            {producto.modelo && <span>, <strong>Modelo:</strong> {producto.modelo}</span>}
            <button onClick={() => eliminarDelCarrito(producto)}>Eliminar</button> {/* Cambiado eliminarProducto por eliminarDelCarrito */}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${calcularTotal()}</p>
      <button onClick={imprimirCarrito}>Imprimir Presupuesto</button>
    </div>
  );
};

export default Carrito;
