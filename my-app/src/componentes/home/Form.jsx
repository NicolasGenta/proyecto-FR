import React from 'react';
import {useState} from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    producto: '',
    codigo_de_barras: '',
    precio: '',
    stock: '',
    url_imagen: '',
    descripcion: '',
    marca: '',
    modelo: '',
    sucursal: '',
    ciudad: '',
    categoria: ''
  });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
    };

     const handldeSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/product',{
          method: 'POST' ,
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(formData)
        });
        
        setFormData({
          producto: '',
          codigo_de_barras: '',
          precio: '',
          stock: '',
          url_imagen: '',
          descripcion: '',
          marca: '',
          modelo: '',
          sucursal: '',
          ciudad: '',
          categoria: ''
        })
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        } catch (error) {
          console.error('Error al enviar el formulario:', error)
      }
     }
   
  return (
   <form onSubmit={handldeSubmit} className='custom-form'>
       <input type='text' placeholder='Nombre del producto' name="producto" value={formData.producto} onChange={handleChange}/>
       <input type='text' placeholder='imagen del producto' name="url_imagen" value={formData.url_imagen} onChange={handleChange}/>
       <input type='text' placeholder='codigo de barra' name="codigo_de_barras" value={formData.codigo_de_barras} onChange={handleChange}/>
       <input type='text' placeholder='precio' name="precio" value={formData.precio} onChange={handleChange}/>
       <input type='text' placeholder='stock' name="stock" value={formData.stock} onChange={handleChange}/>
       <input type='text' placeholder='descripcion' name='descripcion' value={formData.descripcion} onChange={handleChange}/>
       <input type='text' placeholder='marca' name='marca' value={formData.marca} onChange={handleChange}/>
       <input type='text' placeholder='modelo' name='modelo' value={formData.modelo} onChange={handleChange}/>
       <input type='text' placeholder='sucursal' name='sucursal' value={formData.sucursal} onChange={handleChange}/>
       <input type='text' placeholder='ciudad' name='ciudad' value={formData.ciudad} onChange={handleChange}/>
       <input type='text' placeholder='categoria' name='categoria' value={formData.categoria} onChange={handleChange}/>
       <button type='submit'>Enviar</button>
   </form>
  )
}

export default Form
