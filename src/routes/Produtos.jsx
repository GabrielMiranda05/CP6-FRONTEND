import React from 'react';
import '../css/estilo.css';
import Produto1 from '../assets/produto1.jpg';
import Produto2 from '../assets/produto2.jpg';
import Produto3 from '../assets/produto3.jpg';
import Produto4 from '../assets/produto4.jpg';
import Produto5 from '../assets/produto5.jpg';
import Produto6 from '../assets/produto6.jpg';
import Produto7 from '../assets/produto7.jpg';
import Produto8 from '../assets/produto8.jpg';
import Produto9 from '../assets/produto9.jpg';
import Produto10 from '../assets/produto10.jpg';

function Portifolio() {
  return (
    <>
      <section className="portifolio bg-image">
        <h1>Nossos Produtos</h1>
        <div className='card-cont'>
          <div className="card">
            <img src={Produto1} alt="Produto 1" />
            <h3>GBA</h3>
            <p>As fitas mais cobiçadas pelo publico do lendário gameboy advance</p>
            <button>Comprar agora</button>
          </div>      
          <div className="card">
            <img src={Produto2} alt="Produto 2" />
            <h3>Nintendo 64</h3>
            <p>Fitas em ótimo estado de um dos primeiros consoles totalmente 3D da historia</p>
            <button>Comprar agora</button>
          </div> 
          <div className="card">
            <img src={Produto3} alt="Produto 3" />
            <h3>Super Nintendo</h3>
            <p>O console que fez parte da infancia de todos, fitas em perfeito estados dos jogos mais famosos da empresa!</p>
            <button>Comprar agora</button>
          </div> 
          {/* Repita os cards conforme necessário */}
          <div className="card">
            <img src={Produto4} alt="Produto 4" />
            <h3>Mega Drive</h3>
            <p>A quem diga que a sega não fez sucesso entre o publico, quem ainda não tem aquele Mega Drive guardado na gaveta?</p>
            <button>Comprar agora</button>
          </div>  
          <div className="card">
            <img src={Produto5} alt="Produto 5" />
            <h3>Master System</h3>
            <p>Essas são para os retros de verdade, console muito antigo, um dos principais responsaveis por alavancar os games no mundo!</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto6} alt="Produto 6" />
            <h3>Playstation 2</h3>
            <p>Não precisa de descrição, simplesmente o console que marcou uma geração inteira, que tal ter em mãos um dvd original pela primeira vez?</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto7} alt="Produto 7" />
            <h3>Polystation / Nes</h3>
            <p>Quem nunca desejou um Playstation 1 e recebeu um Polystation que atire a primeira pedra</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto8} alt="Produto 8" />
            <h3>Playstation 1</h3>
            <p>Um dos video games mais bem avaliado e desejado da época, que tal relembrar as compétições de GranTurismo?</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto9} alt="Produto 9" />
            <h3>DreamCast</h3>
            <p>Ainda com fama de "novo" e jogos completamente lindos para sua época, temos seus DVD's em ótimo estado!</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto10} alt="Produto 10" />
            <h3>PsP</h3>
            <p>Quem nunca perdeu o UMD do psp no meio da mochila? temos dos jogos mais famosos aos melhores RPGs japoneses, venha conferir!</p>
            <button>Comprar agora</button>
          </div>

        </div>
      </section>
    </>
  );
}

export default Portifolio;
