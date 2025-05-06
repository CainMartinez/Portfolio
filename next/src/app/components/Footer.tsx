'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp, FaMapMarkerAlt, FaPhone, FaGlobe, FaCodeBranch } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Borde superior simple */}
      <div className="h-1 bg-blue-600 w-full"></div>
      
      <div className="relative">
        {/* Back to top button - reposicionado para evitar problemas */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors hover:shadow-blue-500/20 hover:shadow-xl"
            aria-label="Volver arriba"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 p-2 rounded mr-2 text-white">
                <FaCodeBranch />
              </span>
              <h3 className="text-xl font-bold">Caín Martínez</h3>
            </div>
            
            <p className="mb-5 text-gray-400 leading-relaxed">
              Técnico Superior en Desarrollo de Aplicaciones Web. Enfocado en crear soluciones
              web robustas y escalables con atención al detalle y las mejores prácticas.
            </p>
            
            <div className="flex space-x-4 mt-auto">
              <a 
                href="https://github.com/CainMartinez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/c-martinez-bernabeu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:c.martinezbernabeu@hotmail.com" 
                className="bg-slate-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 flex items-center">
              <span className="w-8 h-1 bg-blue-500 mr-2"></span>
              Enlaces rápidos
            </h3>
            <ul className="space-y-3 grid grid-cols-2 gap-x-4">
              {[
                { href: "#about", label: "Perfil" },
                { href: "#experience", label: "Experiencia" },
                { href: "#education", label: "Formación" },
                { href: "#skills", label: "Habilidades" },
                { href: "#projects", label: "Proyectos" },
                { href: "#contact-info", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="bg-slate-800 w-1.5 h-1.5 rounded-full mr-2 transition-all group-hover:bg-blue-500"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 flex items-center">
              <span className="w-8 h-1 bg-blue-500 mr-2"></span>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <span className="bg-slate-800 p-2 rounded-full mr-3 text-blue-400 w-8 h-8 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </span>
                <span>Albaida (Valencia)</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="bg-slate-800 p-2 rounded-full mr-3 text-blue-400 w-8 h-8 flex items-center justify-center">
                  <FaPhone />
                </span>
                <span>+34 622 095 840</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="bg-slate-800 p-2 rounded-full mr-3 text-blue-400 w-8 h-8 flex items-center justify-center">
                  <FaEnvelope />
                </span>
                <span className="break-all">c.martinezbernabeu@hotmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="bg-slate-800 p-2 rounded-full mr-3 text-blue-400 w-8 h-8 flex items-center justify-center">
                  <FaGlobe />
                </span>
                <a href="https://cain-dev.es" className="hover:text-blue-400 transition-colors">
                  cain-dev.es
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>© {currentYear} Caín Martínez Bernabeu. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 text-sm">Desarrollado con Next.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
