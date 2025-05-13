import React from 'react';
import { FUEL_PRICES } from '../mock/fuelPrices';

const FuelPriceDisplay = ({ fuelType }) => {
  const fuelName = {
    GASOLINA_95: 'Gasolina 95',
    GASOIL_PLUS: 'Gasoil Plus',
    GASOIL_PLUS_EXCELENT: 'Gasoil Plus Excelent'
  };

  return (
    <div className="mb-4 p-3 bg-red-900 rounded-lg border border-red-700">
      <p className="text-red-400 font-medium">
        Precio actual: {FUEL_PRICES[fuelType]}€/litro ({fuelName[fuelType]})
      </p>
    </div>
  );
};

export default FuelPriceDisplay;