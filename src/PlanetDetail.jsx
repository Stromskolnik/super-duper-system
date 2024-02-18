import React from 'react';

function PlanetDetail({ name, description }) {
  return (
    <div className="planet-detail">
      <div className="detail-content">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PlanetDetail;
