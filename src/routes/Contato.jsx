import React from 'react';
import '../css/estilo.css'; // Importa o CSS para estilização

function Contato() {
  return (
    <>
      <section className="contato">
        <form>
          <h1>Contato</h1>
          <p>
            <input type="text" placeholder='Digite o Assunto' />
          </p>
          <textarea placeholder='Deixe sua mensagem'></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

export default Contato;
