import React, { useState } from 'react';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const PianoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l7.5-3m0 6.552v3.619M9 9v3.619m0 0H4.5v4.5h15v-4.5h-4.5m-9 0v-3.619m0 0L9 9m0 0h4.5" />
  </svg>
);

const CraftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.083 2.062-.421 3" />
  </svg>
);

const PaintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.25 6.35a15.995 15.995 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

const DrawIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const Sidebar = ({ setCurrentView }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const menuItems = [
    { name: 'Home', icon: HomeIcon, color: 'text-red-600' },
    { name: 'Arte en Piano', icon: PianoIcon, color: 'text-orange-600' },
    { name: 'Manualidades DIY', icon: CraftIcon, color: 'text-yellow-600' },
    { name: 'Arte de Pintura', icon: PaintIcon, color: 'text-green-600' },
    { name: 'Arte en Dibujo', icon: DrawIcon, color: 'text-blue-600' }
  ];

  return (
    <div 
      className={`bg-gradient-to-b from-red-50 via-purple-50 to-blue-50 h-screen shadow-lg transition-all duration-300 ease-in-out 
        ${isMinimized ? 'w-20' : 'w-64'} relative`}
    >
      <nav className="pt-4 px-2">
        <button 
          onClick={() => setIsMinimized(!isMinimized)}
          className={`w-full text-left p-3 hover:bg-purple-100 rounded-lg transition-colors mb-2 flex items-center 
            ${isMinimized ? 'justify-center' : 'justify-end'}`}
          title={isMinimized ? 'Expandir menú' : 'Minimizar menú'}
        >
          <span className="text-xl text-purple-600 hover:text-purple-800">
            {isMinimized ? '☰' : '✕'}
          </span>
        </button>

        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button 
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={`w-full text-left p-3 hover:bg-purple-100 rounded-lg transition-colors mb-2 flex items-center 
                ${isMinimized ? 'justify-center' : ''}`}
              title={isMinimized ? item.name : ''}
            >
              <span className={`mr-3 ${item.color}`}>
                <IconComponent />
              </span>
              {!isMinimized && (
                <span className={`font-semibold ${item.color}`}>
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

// El resto de los archivos permanecen igual que en la versión anterior.

// DONE