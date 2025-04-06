import React from 'react';

const HomeCard = ({ title, image, onClick, color }) => (
  <div 
    onClick={onClick}
    className={`bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 cursor-pointer border-4 border-${color}-300`}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className={`p-4 text-center bg-${color}-100`}>
      <h3 className={`font-bold text-${color}-800`}>{title}</h3>
    </div>
  </div>
);

const Home = ({ setCurrentView }) => {
  const artCategories = [
    { 
      title: 'Arte en Piano', 
      icon: '🎹',
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' 
    },
    { 
      title: 'Manualidades DIY', 
      icon: '✂️',
      color: 'yellow',
      image: 'https://i.ytimg.com/vi/2qKB4lF5ekU/maxresdefault.jpg' 
    },
    { 
      title: 'Arte de Pintura', 
      icon: '🎨',
      color: 'green',
      image: 'https://1.bp.blogspot.com/-1AKXkEkl7Vg/Xulmr3KQwJI/AAAAAAAAAK8/vNqJk8jMETQZ54vjux5O7_mr9VGqnRyZgCLcBGAsYHQ/s1600/42421142_l-scaled.jpg' 
    },
    { 
      title: 'Arte en Dibujo', 
      icon: '✏️',
      color: 'blue',
      image: 'https://i.ytimg.com/vi/4O_3oGvAyvM/maxresdefault.jpg' 
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-red-100 via-yellow-100 to-blue-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        Explora el Mundo del Arte
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {artCategories.map((category) => (
          <HomeCard 
            key={category.title}
            title={category.title}
            image={category.image}
            color={category.color}
            onClick={() => setCurrentView(category.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

// El resto de los archivos permanecen igual que en la versión anterior.

// DONE