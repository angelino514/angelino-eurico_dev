import { useState } from 'react';

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="navbar">
         <div className="nav-container">
            <a href="#hero" className="nav-logo">
               AC<span>.DEV</span>
            </a>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
               <a href="#about" onClick={() => setIsOpen(false)}>Sobre</a>
               <a href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a>
               <a href="#projects" onClick={() => setIsOpen(false)}>Projeto </a>
               <a href="#contact" className="nav-btn" onClick={() => setIsOpen(false)}>Contato</a>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </nav>
   );
}