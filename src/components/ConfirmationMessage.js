import React from 'react';

const ConfirmationMessage = ({ transaction }) => {
  if (!transaction) return null;

  return (
    <div className="p-6 bg-green-900 rounded-xl border border-green-700 text-green-400">
      <h3 className="text-xl font-semibold text-green-400 mb-2">¡Repostaje confirmado!</h3>
      <p className="text-green-300 mb-4">
        Surtidor: {transaction.surtidor.nombre}<br />
        Combustible: {transaction.fuelType.replace(/_/g, ' ')}<br />
        Importe: {transaction.amount}€<br />
        Comprobante: {transaction.receiptType === 'FACTURA' ? 'Factura' : 'Ticket normal'}
      </p>

      {transaction.receiptType === 'FACTURA' && transaction.invoiceData && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-red-700 text-gray-300">
          <h4 className="font-bold mb-2 text-red-400">Datos de facturación:</h4>
          <p>Nombre: {transaction.invoiceData.fullName}</p>
          <p>DNI: {transaction.invoiceData.dni}</p>
          <p>Empresa: {transaction.invoiceData.companyName}</p>
          <p>CIF: {transaction.invoiceData.cif}</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmationMessage;

// DONE