import React from 'react';

const ManualidadesDIY = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-200 min-h-screen">
      <h2 className="text-3xl font-bold text-yellow-800 mb-6">Manualidades DIY</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-yellow-300">
        <img 
          src="https://images.unsplash.com/photo-1586256642293-7de34cb42b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
          alt="Casitas de cartón" 
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700">
          Transforma materiales simples en obras de arte únicas con manualidades creativas.
        </p>
      </div>
    </div>
  );
};

export default ManualidadesDIY;