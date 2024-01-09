import React from 'react';

const CardComponent = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.producto}</h2>
      <p>{data.marca}</p>
      <p>{data.modelo}</p>
      <p>{data.precio}</p>
      <p>{data.stock}</p>
      {/* Agrega más campos según tus necesidades */}
    </div>
  );
};

export default CardComponent;