'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
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
    <>
      {/* Header siempre visible */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
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
            
            {/* Mobile Navigation Button - Siempre visible y accesible */}
            <button 
              className={`md:hidden z-[60] p-2.5 rounded-full transition-colors ${
                isOpen 
                  ? 'bg-slate-800 text-white' 
                  : scrolled 
                    ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' 
                    : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu - Completamente separado del header para mejor control */}
      <div 
        className={`fixed inset-0 z-[55] bg-slate-900/98 backdrop-blur-md flex flex-col md:hidden transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
          {/* Logo para el menú móvil */}
          <div className="text-center mb-8 pt-4">
            <div className="inline-flex items-center justify-center p-2.5 bg-blue-600 rounded-full mb-3">
              <FaCode className="text-white text-xl" />
            </div>
            <h2 className="text-white text-xl font-bold">Caín Martínez</h2>
            <p className="text-gray-400 text-sm">Desarrollador Web</p>
          </div>
          
          {/* Menú de navegación */}
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`px-4 py-3.5 rounded-lg text-lg font-medium transition-all ${
                    isActive 
                      ? 'text-white bg-blue-700/50 border-l-4 border-blue-500' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Redes sociales y copyright */}
          <div className="mt-auto pt-8 border-t border-slate-700">
            <div className="flex justify-center gap-4 mb-4">
              <a 
                href="https://github.com/CainMartinez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-white hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/c-martinez-bernabeu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-white hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-center text-slate-500 text-sm">© 2024 Caín Martínez</p>
          </div>
        </div>
      </div>
    </>
  );
}