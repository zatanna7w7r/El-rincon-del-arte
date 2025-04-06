import React from 'react';

const ArtePintura = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-green-200 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Arte de Pintura</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-green-300">
        <img 
          src="https://images.unsplash.com/photo-1579541671915-22b98a3ffc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Noche Estrellada" 
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700">
          Explora técnicas y estilos de pintura, inspirándote en obras maestras.
        </p>
      </div>
    </div>
  );
};

export default ArtePintura;