import React, { useState} from 'react';
import './Page.css';



function Page() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    // Llama a fetchData solo si la cadena de búsqueda no está vacía
    if (query.trim() !== '') {
      fetchData();
    } else {
      // Limpiar resultados si la búsqueda está vacía
      setSearchResults([]);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/product?query=${query}`);
      const allProducts = await response.json();

      console.log('Respuesta de la API:', allProducts);

      setSearchResults(allProducts);
    } catch (error) {
      console.log('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div className="container">
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
      </div>

      <div className="button-container">
        <button className="btn btn-outline-secondary">Agregar producto</button>
        <button className="btn btn-outline-secondary">Actualizar precios</button>
      </div>

      {/* Mostrar los resultados de la búsqueda */}

      <div className=' containerProduct'>
        <div className = 'card'>
      <ul>
        {searchResults.map((producto) => (
          <li key={producto.id_product}>
           <p>producto: {producto.producto}</p>
           <p>codigo de barra: {producto.codigo_de_barras}</p>
           <p>precio: {producto.precio}</p>
           <p>stock: {producto.stock}</p>
           <p>{producto.url_imagen}</p>
           <p>descripcion: {producto.descripcion}</p>
          <p>marca: {producto.marca}</p>
          <p>modelo: {producto.modelo}</p>
          <p>sucursal: {producto.sucursal}</p>
          <p>ciudad: {producto.ciudad}</p>
          </li>
        ))}
      </ul>
      </div>
      </div>
        </div>
  );
}

export default Page;
