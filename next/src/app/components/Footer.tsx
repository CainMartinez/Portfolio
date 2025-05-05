'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="relative">
        {/* Back to top button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
          <button 
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
            aria-label="Volver arriba"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Caín Martínez Bernabeu</h3>
            <p className="mb-4 text-gray-400">
              Técnico Superior en Desarrollo de Aplicaciones Web. Enfocado en crear soluciones
              web robustas y escalables.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/CainMartinez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/c-martinez-bernabeu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="mailto:c.martinezbernabeu@hotmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "Perfil" },
                { href: "#experience", label: "Experiencia" },
                { href: "#skills", label: "Habilidades" },
                { href: "#projects", label: "Proyectos" },
                { href: "#contact", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Albaida (Valencia)</li>
              <li>+34 622 095 840</li>
              <li>c.martinezbernabeu@hotmail.com</li>
              <li>
                <a href="https://cain-dev.es" className="hover:text-white transition-colors">
                  cain-dev.es
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Caín Martínez Bernabeu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}