import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ArtePiano from './components/ArtePiano';
import ManualidadesDIY from './components/ManualidadesDIY';
import ArtePintura from './components/ArtePintura';
import ArteDibujo from './components/ArteDibujo';

function App() {
  const [currentView, setCurrentView] = useState('Home');

  const renderView = () => {
    switch(currentView) {
      case 'Home': return <Home setCurrentView={setCurrentView} />;
      case 'Arte en Piano': return <ArtePiano />;
      case 'Manualidades DIY': return <ManualidadesDIY />;
      case 'Arte de Pintura': return <ArtePintura />;
      case 'Arte en Dibujo': return <ArteDibujo />;
      default: return <Home setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-1">
        <Header />
        {renderView()}
      </div>
    </div>
  );
}

export default App;

// DONE