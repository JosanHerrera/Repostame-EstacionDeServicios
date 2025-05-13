import React from 'react';
import { SURTIDORES } from '../mock/surtidores';

const SurtidorSelector = ({ onSelect }) => {
  const handleSelect = (surtidor) => {
    if (surtidor.disponible) {
      onSelect(surtidor);
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-700">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Selecciona tu surtidor</h2>
      <div className="grid grid-cols-2 gap-4">
        {SURTIDORES.map(surtidor => (
          <button
            key={surtidor.id}
            onClick={() => handleSelect(surtidor)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${surtidor.disponible 
              ? 'border-red-500 bg-gray-800 text-white hover:bg-red-600 hover:border-red-600 transform hover:scale-105 shadow-md' 
              : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'}`}
            disabled={!surtidor.disponible}
          >
            <p className={`font-medium ${surtidor.disponible ? 'text-red-300' : 'text-gray-500'}`}>
              {surtidor.nombre}
            </p>
            <p className={`text-sm ${surtidor.disponible ? 'text-red-400' : 'text-gray-500'}`}>
              {surtidor.disponible ? 'Disponible' : 'No disponible'}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SurtidorSelector;