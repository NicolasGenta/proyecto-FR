import React from 'react'
import { useState, useEffect } from 'react'
import './Page.css';
import './ProductosFiltrados.css';

const ProductosFiltrados = () => {
    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [filteredProducts, setFilteredProducs] = useState([]);
    const [porcentaje, setPorcentaje] = useState(0);
    
     useEffect(() => {
       fetch('http://localhost:3000/product')
       .then(response => response.json())
       .then(data => {
        setProducts(data);
       })
       .catch(error => {
        console.error('Error fecching product:', error)
       })
     }, []);

     const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setSelectedBrand('');
        setSelectedModel('');
     }

     const handleBrandChange = (e) => {
         setSelectedBrand(e.target.value)
     }

     const handleModelChange = (e) => {
        setSelectedModel(e.target.value)
    }
    
    const handlePorcentajeChange = (e) => {
      setPorcentaje(parseFloat(e.target.value));
    };
    useEffect(() => {
      if (selectedType !== '' || selectedBrand !== '' || selectedModel !== '') {
        let filtered = products;
       
        if (selectedType !== '') {
            filtered = filtered.filter(products => products.producto === selectedType)
        }

        if (selectedBrand !== '') {
            filtered = filtered.filter(products => products.marca === selectedBrand)
        }

        if (selectedModel !== '') {
            filtered = filtered.filter(products => products.modelo === selectedModel)
        }
        setFilteredProducs(filtered)
      }
    }, [selectedType, selectedBrand, selectedModel, products])

  return (
    <div>
      <div className='conts'>
         <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Seleccione un tipo de producto</option>
        {products.map(product => ( 
          <option key={product.id} value={product.name}>{product.producto}</option>))}
      </select>
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="">Seleccione una marca</option>
        {/* Opciones para las marcas */}
        {products.map(brand => (
          <option key={brand.id} value={brand.marca}>{brand.marca}</option>
        ))}
      </select>
      <select value={selectedModel} onChange={handleModelChange}>
        <option value="">Seleccione un modelo</option>
        {/* Opciones para los modelos */}
        {products.map(model => (
          <option key={model.id} value={model.modelo}>{model.modelo}</option>
        ))}
      </select>
      </div>
         <div className = 'card-deck'>
            {filteredProducts.map(producto => (
                <li key={producto.id_product} className='card'>
                <p>categoria :{producto.categoria}</p>
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
      </div>
           
           <p>
                Precio Final: ${(parseFloat(producto.precio) * (1 + porcentaje / 100)).toFixed(2)}
             
              </p>
               </li>
            ))}
            </div>
         

         
    </div>
  )
}

export default ProductosFiltrados
