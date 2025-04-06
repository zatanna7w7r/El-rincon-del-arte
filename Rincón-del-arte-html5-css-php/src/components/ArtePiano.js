import React from 'react';

const ArtePiano = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-200 min-h-screen">
      <h2 className="text-3xl font-bold text-orange-800 mb-6">Arte en Piano</h2>
      <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-orange-300">
        <img 
          src="https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Piano" 
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700">
          Descubre la música y la expresión artística a través del piano, 
          explorando melodías que tocan el alma.
        </p>
      </div>
    </div>
  );
};

export default ArtePiano;