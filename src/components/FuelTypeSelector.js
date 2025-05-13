import React, { useState } from 'react';

const FuelTypeSelector = ({ onSelect, onBack }) => {
  const [selectedFuel, setSelectedFuel] = useState(null);

  const handleSelect = (fuelType) => {
    setSelectedFuel(fuelType);
    onSelect(fuelType);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-red-400">Selecciona tu combustible</h2>
        {onBack && (
          <button 
            onClick={onBack}
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            Volver
          </button>
        )}
      </div>
      <div className="space-y-3">
        <button 
          onClick={() => handleSelect('GASOLINA_95')}
          className={`w-full py-3 px-4 rounded-lg text-left transition-all duration-300 ${selectedFuel === 'GASOLINA_95' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-red-700 hover:text-white'} shadow-md transform hover:scale-105`}
        >
          Gasolina 95 - 1.53€/litro
        </button>
        <button 
          onClick={() => handleSelect('GASOIL_PLUS')}
          className={`w-full py-3 px-4 rounded-lg text-left transition-all duration-300 ${selectedFuel === 'GASOIL_PLUS' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-red-700 hover:text-white'} shadow-md transform hover:scale-105`}
        >
          Gasoil Plus - 1.687€/litro
        </button>
        <button 
          onClick={() => handleSelect('GASOIL_PLUS_EXCELENT')}
          className={`w-full py-3 px-4 rounded-lg text-left transition-all duration-300 ${selectedFuel === 'GASOIL_PLUS_EXCELENT' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-red-700 hover:text-white'} shadow-md transform hover:scale-105`}
        >
          Gasoil Plus Excelent - 1.548€/litro
        </button>
      </div>
    </div>
  );
};

export default FuelTypeSelector;