import React from 'react';

const ArteDibujo = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Arte en Dibujo</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-blue-300">
        <img 
          src="https://images.unsplash.com/photo-1525909002-1b05c6bae0bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Dibujo a lápiz" 
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700">
          Desarrolla tus habilidades de dibujo y libera tu creatividad con diferentes técnicas.
        </p>
      </div>
    </div>
  );
};

export default ArteDibujo;