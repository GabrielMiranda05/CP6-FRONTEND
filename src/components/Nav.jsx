import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from '../assets/logo.png'

function Nav() {
  return (
    <>
          <nav className="nav">
          <Link to="/" className="tlink"><h1 className="logo"><img src={logo}/></h1></Link>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" className="tlink">Início</Link>
              </li>
              <li className="menu-item">
                <Link to="/sobre" className="tlink">Sobre</Link>
              </li>
              <li className="menu-item">
                <Link to="/produtos" className="tlink">Produtos</Link>
              </li>
              <li className="menu-item">
                <Link to="/contato" className="tlink">Contato</Link>
              </li>
            </ul>
          </nav>
    </>
  );
}

export default Nav;
