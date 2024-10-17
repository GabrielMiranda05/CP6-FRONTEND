import React from 'react';
import '../css/estilo.css';
import profileImage from '../assets/produto1.jpg'; 

function Sobre() {
  return (
    <>
      <section className="sobre">
        <div className="sobre-intro">
          <div className="sobre-text">
            <h1>Olá, Somos a <span className="highlight">RetroPlay</span></h1>
            <h2>Venha saber mais Sobre nós!</h2>
          </div>
          <div className="sobre-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        
        <div className="sobre-cards"> 
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Qualidade</h3>
              <p className="card-description">Oferecemos produtos com rigoroso controle de qualidade para garantir a excelência.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Reputação</h3>
              <p className="card-description">Reconhecido no mercado por nossa dedicação e compromisso com a satisfação do cliente.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Inovação</h3>
              <p className="card-description">Sempre à frente das tendências, trazendo os jogos mais raros e com melhor estado de conservação</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Atendimento Personalizado</h3>
              <p className="card-description">Suporte dedicado e personalizado para atender às necessidades específicas de cada cliente.</p>
            </div>
          </div>
        </div>

        <div className="sobre-content">
          <h2>Aqui na RetroPlay</h2>
          <p>
          Na RetroPlay, somos apaixonados por reviver a nostalgia dos jogos clássicos! Nossa missão é trazer de volta as melhores lembranças da era dourada dos videogames, oferecendo a oportunidade de alugar fitas de consoles clássicos, como Super Nintendo, Sega Genesis, Atari, e muito mais.

Nosso acervo conta com uma vasta coleção de títulos icônicos que marcaram gerações, desde aventuras épicas até batalhas lendárias. Sabemos que nada substitui a emoção de jogar esses clássicos em seus consoles originais, por isso, nossa plataforma oferece uma experiência fácil e acessível para que você possa aproveitar esses jogos novamente.

Queremos proporcionar uma jornada de volta no tempo, onde cada jogada é uma viagem à sua infância ou à descoberta de relíquias da história dos videogames. Alugue suas fitas favoritas, receba no conforto de sua casa e mergulhe em horas de diversão retrô. E o melhor: sem a necessidade de gastar fortunas colecionando jogos raros, você pode ter acesso a uma vasta biblioteca sempre que quiser!
          </p>
        </div>

      </section>
    </>
  );
}

export default Sobre;
