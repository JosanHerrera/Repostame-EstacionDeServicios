import React, { useState, useEffect } from 'react';

const InvoiceForm = ({ onComplete, onCancel, initialData }) => {
  const [invoiceData, setInvoiceData] = useState({
    fullName: '',
    dni: '',
    companyName: '',
    cif: ''
  });

  useEffect(() => {
    if (initialData) {
      setInvoiceData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(invoiceData);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-700">
      <h3 className="text-xl font-bold mb-4 text-red-400">Datos de facturación</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Nombre completo:</label>
          <input
            type="text"
            name="fullName"
            value={invoiceData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">DNI:</label>
          <input
            type="text"
            name="dni"
            value={invoiceData.dni}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Nombre empresa:</label>
          <input
            type="text"
            name="companyName"
            value={invoiceData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">CIF:</label>
          <input
            type="text"
            name="cif"
            value={invoiceData.cif}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="w-1/2 bg-gray-800 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors shadow-md transform hover:scale-105"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-1/2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-md transform hover:scale-105"
          >
            Guardar y continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;