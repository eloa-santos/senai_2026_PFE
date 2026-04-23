import React, { useState } from 'react';
// import './App.css';

const NewsCard = ({ title, description, image }) => (
  <article className="card">
    <img src={image} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </article>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const newsData = [
    {
      id: 1,
      title: "Exploração Espacial em 2026",
      description: "As novas missões tripuladas prometem estabelecer bases permanentes na Lua.",
      image: "https://picsum.photos/400/250?random=1"
    },
    {
      id: 2,
      title: "Avanços na IA Moderna",
      description: "Modelos de inteligência artificial agora processam contextos complexos com precisão.",
      image: "https://picsum.photos/400/250?random=2"
    },
    {
      id: 3,
      title: "Cidades Verdes",
      description: "O aumento de áreas arborizadas tem reduzido a temperatura local drasticamente.",
      image: "https://picsum.photos/400/250?random=3"
    }
  ];

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="header">
        <h1>Portal Tech</h1>
        <button onClick={toggleTheme} className="theme-btn">
          {isDarkMode ? 'Modo Claro ☀️' : 'Modo Escuro 🌙'}
        </button>
      </header>

      <main className="news-grid">
        {newsData.map(news => (
          <NewsCard 
            key={news.id}
            title={news.title}
            description={news.description}
            image={news.image}
          />
        ))}
      </main>
    </div>
  );
}