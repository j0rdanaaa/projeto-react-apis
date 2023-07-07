import React from 'react';

const PokemonCard = ({ name, imageUrl, type }) => {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
};

export default PokemonCard;