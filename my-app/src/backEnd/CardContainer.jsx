import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';

const CardsContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a tu servidor
    axios.get('https://localhost:3000/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <CardComponent key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardsContainer;