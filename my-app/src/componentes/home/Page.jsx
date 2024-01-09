import React, { useState} from 'react';
import './Page.css';

    function Page() {
        const [query, setQuery] = useState('');
      
        const handleInputChange = (event) => {
          setQuery(event.target.value);
        };
      
        const handleSearch = () => {
          // Realizar la lógica de búsqueda aquí con el valor de 'query'
          console.log(`Búsqueda para: ${query}`);
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
              <button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>
                Buscar
              </button>
              {/* También puedes agregar aquí los elementos del dropdown si es necesario */}
            </div>
          </div>

          <div className="button-container">
          <button className="btn btn-outline-secondary">Automotor</button>
          <button className="btn btn-outline-secondary">Residencial</button>
          <button className="btn btn-outline-secondary">Comercial</button>
        </div>
        </div>
        );
      }
  
export default Page;