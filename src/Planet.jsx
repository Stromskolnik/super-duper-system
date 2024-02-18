import React from 'react';
import PlanetDetail from './PlanetDetail';

function Planet({ name, imageUrl, description, isSelected, onClick }) {
  return (
    <div className={`planet ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img src={imageUrl} alt={name} className="planet-image" />
      {isSelected && <PlanetDetail name={name} description={description} />}
    </div>
  );
}

export default Planet;
