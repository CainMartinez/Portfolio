'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      // Para la transición del navbar
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Para detectar la sección activa
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset para mejor detección
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Perfil" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Formación" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact-info", label: "Contacto" },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-xl font-bold flex items-center gap-2 transition-colors ${
              scrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            <span className={`p-1.5 rounded ${
              scrolled ? 'bg-blue-600 text-white' : 'bg-white/20 text-blue-300'  
            }`}>
              <FaCode size={16} />
            </span>
            <span>Caín Martínez</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`px-3 py-2 rounded-md font-medium transition-all relative ${
                    scrolled 
                      ? isActive
                        ? 'text-blue-600'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100' 
                      : isActive
                        ? 'text-blue-300'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-blue-600' : 'bg-blue-400'
                    } rounded-full mx-3`}></span>
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className={`text-2xl ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu with animation */}
      <div 
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8 w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`text-center w-full py-3 text-white text-xl font-medium transition-all ${
                  isActive 
                    ? 'text-blue-300 bg-blue-900/30' 
                    : 'hover:text-blue-200 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="flex gap-4 text-center">
            <a 
              href="https://github.com/CainMartinez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-blue-600 transition-colors"
            >
              <FaCode />
            </a>
            <span className="text-white/50 text-sm mt-3">© 2024 Caín Martínez</span>
          </div>
        </div>
      </div>
    </header>
  );
}
