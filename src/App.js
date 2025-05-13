import React, { useState } from 'react';
import SurtidorSelector from './components/SurtidorSelector';
import FuelTypeSelector from './components/FuelTypeSelector';
import QuantityInput from './components/QuantityInput';
import ConfirmationMessage from './components/ConfirmationMessage';

const App = () => {
  const [selectedSurtidor, setSelectedSurtidor] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [transaction, setTransaction] = useState(null);

  const handleBackToSurtidor = () => {
    setSelectedSurtidor(null);
    setSelectedFuel(null);
    setTransaction(null);
  };

  const handleBackToFuelSelection = () => {
    setSelectedFuel(null);
    setTransaction(null);
  };

  const handleBackToQuantityInput = () => {
    setTransaction(null);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundImage: 'url("https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0oI8RmMgDjdvqUQH6XhKYIiaSc3LCtrM1fen0")' }}
    >
      <div className="max-w-md mx-auto bg-black bg-opacity-70 p-6 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-red-400">Repostame Flash</h1>
          <p className="mt-2 text-gray-300">Tu asistente de gasolinera futurista</p>
        </div>
        
        {!selectedSurtidor ? (
          <SurtidorSelector onSelect={setSelectedSurtidor} />
        ) : !selectedFuel ? (
          <FuelTypeSelector 
            onSelect={setSelectedFuel} 
            onBack={handleBackToSurtidor}
          />
        ) : !transaction ? (
          <QuantityInput 
            fuelType={selectedFuel} 
            onSubmit={setTransaction}
            onBack={handleBackToFuelSelection}
          />
        ) : (
          <>
            <ConfirmationMessage transaction={{ ...transaction, surtidor: selectedSurtidor }} />
            <button
              onClick={handleBackToSurtidor}
              className="mt-4 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg transform hover:scale-105"
            >
              Realizar otro repostaje
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;