import React from 'react'

import './PokemonSpinner.css'

function PokemonSpinner() {
  return (
    <div
      role="alert"
      className="pokemon-spinner-container"
      data-testid="pokemon-spinner"
    >
      <div className="pokemon-spinner"></div>
    </div>
  );
}

export default PokemonSpinner