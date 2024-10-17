import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import fundo2 from '../assets/fundo2.jpg';

function Home() {
  return (
    <>
      <div className="container">
        <header className="header">

          <div className="hero-section">
            <div className="hero-content">
              <h2 className="title">Bem-vindo a <span>RETRO PLAY</span></h2>
              <p className="subtitle">Jogos antigos, fitas em perfeito estado, é aqui mesmo/1 </p>
              <p className="subtitle">porque assoprar fritas é pra sempre</p>
              <Link to="/produtos" className="tlink"><button className="hero-button">Ver produtos</button></Link>
            </div>
          </div>
        </header>
      </div>
      <div className="content-section">
        <div className="about-us">
          <div className="about-text">
            <h2>O que Fazemos?</h2>
            <p>
            Na RetroPlay, trazemos de volta a magia dos videogames clássicos! Oferecemos a locação de fitas para consoles antigos como Super Nintendo, Sega Genesis e Atari. Explore nossa coleção de títulos lendários, alugue com facilidade e receba em casa. Reviva a nostalgia dos jogos retrô sem precisar colecioná-los!
            </p>
            <Link to="/sobre" className="tlink"><button className="about-button">Saiba Mais</button></Link>
          </div>
          <div className="about-image">
          <img src={fundo2} alt="Sobre Nós" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
