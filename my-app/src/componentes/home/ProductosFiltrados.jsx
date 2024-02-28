import React from 'react'
import { useState, useEffect } from 'react'
import './Page.css';
const ProductosFiltrados = () => {
    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [filteredProducts, setFilteredProducs] = useState([])
    
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
        selectedModel(e.target.value)
    }
    
    useEffect(() => {
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
    }, [selectedType, selectedBrand, selectedModel, products])
  return (
    <div>
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
         <ul>
         <div className = 'card-deck'>
            {filteredProducts.map(producto => (
                <li key={producto.id_product} className='card'>
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
            </div>
         </ul>

         
    </div>
  )
}

export default ProductosFiltrados
