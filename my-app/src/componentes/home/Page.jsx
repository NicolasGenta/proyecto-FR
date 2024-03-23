import React, { useState } from 'react';
import ProductosFiltrados from './ProductosFiltrados';
import Form from './Form';
import Carrito from './Carrito'; // Asegúrate de importar el componente Carrito desde su archivo correspondiente
import './Page.css';

function Page() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [porcentaje, setPorcentaje] = useState(0);
  const [carrito, setCarrito] = useState([]); // Estado para almacenar los productos en el carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para controlar la visibilidad del carrito
  

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  };

  const fetchData = async () => {
    try {
      const encodedQuery = encodeURIComponent(query);
      const response = await fetch(`http://localhost:3000/product?query=${encodedQuery}`);
      const allProducts = await response.json();
      const searchWords = query.toLowerCase().split(' ');
      const filteredProducts = allProducts.filter(producto => {
        const productNameLower = producto.producto.toLowerCase();
        return searchWords.some((word) => productNameLower.includes(word));
      });
      setSearchResults(filteredProducts);
    } catch (error) {
      console.log('Error al realizar la búsqueda:', error);
      setSearchResults([]);
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handlePorcentajeChange = (e) => {
    setPorcentaje(parseFloat(e.target.value));
  };

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]); // Agrega el producto al carrito
  };

  const eliminarDelCarrito = (producto) => {
    const index = carrito.findIndex((item) => item.id_product === producto.id_product);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };
  

  const toggleMostrarCarrito = () => {
    setMostrarCarrito(!mostrarCarrito); // Cambia el estado para mostrar u ocultar el carrito
    
  };

  return (
    <div className="container">
     


  
      {mostrarCarrito && (
      <div className='carrito-content'>
        <Carrito productos={carrito} eliminarDelCarrito={eliminarDelCarrito} />
      </div>
  )}    
     <div/>
      {/* Botón del carrito */}
      <button type='button' className='carrito-btn' onClick={toggleMostrarCarrito}>
        <i className="fas fa-shopping-cart"></i> {/* Aquí usa la clase de tu icono */}
        <span className="badge badge-pill badge-primary">{carrito.length}</span>
      </button>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          value={query}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSearchClick}
          >
            Buscar
          </button>
        </div>
        <div className="btn-container">
          <button type='button' className='btn' onClick={handleShowForm}>
            Crear Producto
          </button>
        </div>
      </div>

      <div className="card-deck">
        {searchResults.map((producto) => (
          <div key={producto.id_product} className="card">
            {/* Mostrar detalles del producto */}
            <p>categoria: {producto.categoria}</p>
            <p>producto: {producto.producto}</p>
            <p>marca: {producto.marca}</p>
            <p>modelo: {producto.modelo}</p>
            <p>descripcion: {producto.descripcion}</p>
            <p>stock: {producto.stock}</p>
            <p>sucursal: {producto.sucursal}</p>
            <p>precio: {producto.precio}</p>
            <div>
              <label htmlFor="porcentaje">Porcentaje de aumento:</label>
              <input
                type="range"
                id="porcentaje"
                name="porcentaje"
                min="0"
                max="100"
                step="1"
                value={porcentaje}
                onChange={handlePorcentajeChange}
              />
              <span>{porcentaje}%</span>
              <p>
                Precio Final: ${(parseFloat(producto.precio) * (1 + porcentaje / 100)).toFixed(2)}
              </p>
            </div>
            {/* Agregar al carrito */}
            <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {showForm && <Form />}

    </div>
  );
}

export default Page;
