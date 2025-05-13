import React, { useState, useEffect } from 'react';
import { FUEL_PRICES } from '../mock/fuelPrices';
import FuelPriceDisplay from './FuelPriceDisplay';
import InvoiceForm from './InvoiceForm';

const QuantityInput = ({ fuelType, onSubmit, onBack }) => {
  const [amount, setAmount] = useState('');
  const [receiptType, setReceiptType] = useState('TICKET');
  const [invoiceData, setInvoiceData] = useState(null);
  const [calculatedLitres, setCalculatedLitres] = useState(0);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  useEffect(() => {
    if (amount && !isNaN(amount)) {
      const litres = (parseFloat(amount) / FUEL_PRICES[fuelType]).toFixed(2);
      setCalculatedLitres(litres);
    } else {
      setCalculatedLitres(0);
    }
  }, [amount, fuelType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;

    const fuelName = {
      GASOLINA_95: 'Gasolina 95',
      GASOIL_PLUS: 'Gasoil Plus',
      GASOIL_PLUS_EXCELENT: 'Gasoil Plus Excelent'
    }[fuelType];

    const receiptText = receiptType === 'FACTURA' ? 'Con factura' : 'Con ticket';
    const message = `Repostaje confirmado. ${amount} euros de ${fuelName}. ${receiptText}. Gracias por confiar en Repostame.`;

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = message;
    utterance.lang = 'es-ES';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);

    onSubmit({ 
      amount: parseFloat(amount).toFixed(2), 
      litres: calculatedLitres,
      fuelType, 
      receiptType,
      invoiceData 
    });
  };

  const handleInvoiceComplete = (data) => {
    setInvoiceData(data);
    setShowInvoiceForm(false);
  };

  const handleReceiptTypeChange = (type) => {
    setReceiptType(type);
    if (type === 'FACTURA') {
      setShowInvoiceForm(true);
    } else {
      setInvoiceData(null);
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-red-400">Cantidad y facturación</h2>
        <button 
          onClick={onBack}
          className="text-red-400 hover:text-red-600 transition-colors"
        >
          Volver
        </button>
      </div>
      
      <FuelPriceDisplay fuelType={fuelType} />
      
      {showInvoiceForm ? (
        <InvoiceForm 
          onComplete={handleInvoiceComplete} 
          onCancel={() => setShowInvoiceForm(false)}
          initialData={invoiceData}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Importe en euros:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Ej: 30"
              min="1"
              step="0.01"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Tipo de comprobante:</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="receiptType"
                  value="TICKET"
                  checked={receiptType === 'TICKET'}
                  onChange={() => handleReceiptTypeChange('TICKET')}
                  className="mr-2 text-red-500 focus:ring-red-500"
                />
                Ticket normal
              </label>
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="receiptType"
                  value="FACTURA"
                  checked={receiptType === 'FACTURA'}
                  onChange={() => handleReceiptTypeChange('FACTURA')}
                  className="mr-2 text-red-500 focus:ring-red-500"
                />
                Factura
              </label>
            </div>
          </div>

          {invoiceData && receiptType === 'FACTURA' && (
            <div className="mb-4 p-3 bg-green-900 rounded-lg border border-green-700 text-green-400">
              <p>Datos de facturación completados ✓</p>
              <button
                type="button"
                onClick={() => setShowInvoiceForm(true)}
                className="mt-2 text-sm text-red-400 hover:text-red-600 transition-colors"
              >
                Editar datos
              </button>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="w-1/2 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors shadow-md transform hover:scale-105"
            >
              Volver
            </button>
            <button
              type="submit"
              className="w-1/2 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-900 disabled:text-gray-500 shadow-md transform hover:scale-105"
              disabled={receiptType === 'FACTURA' && !invoiceData}
            >
              Confirmar repostaje
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuantityInput;