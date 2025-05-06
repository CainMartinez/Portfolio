'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaAngleDoubleDown, FaFileDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-800 text-white min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 left-0 h-full w-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 md:w-40 md:h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-0 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-blue-600/20 text-blue-300 text-sm py-1 px-3 rounded-full mb-4">
              Desarrollador Web
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-blue-400">&lt;</span> Caín Martínez <span className="text-blue-400">/&gt;</span>
            </h1>
            
            <div className="w-20 h-1 bg-blue-500 mb-6 hidden md:block"></div>
            
            <h2 className="text-xl md:text-2xl text-blue-200 mb-4">
              Técnico Superior en Desarrollo de Aplicaciones Web
            </h2>
            
            <p className="text-slate-300 mb-8 max-w-lg">
              Especializado en crear soluciones web modernas y escalables con pasión por el código limpio y buenas prácticas de desarrollo.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center md:justify-start">
              <a 
                href="#contact-info" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/20"
              >
                Contacto
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white/70 hover:bg-white/10 hover:border-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Ver proyectos
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-500/70 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 text-blue-300 hover:text-blue-200 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center gap-2"
              >
                <FaFileDownload /> Descargar CV
              </a>
            </div>
            
            <div className="flex gap-5 justify-center md:justify-start">
              <a 
                href="https://github.com/CainMartinez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-700 hover:bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/c-martinez-bernabeu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-700 hover:bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:c.martinezbernabeu@hotmail.com" 
                className="bg-slate-700 hover:bg-slate-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <MdEmail />
              </a>
            </div>
          </div>
          {/* Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decoration circles */}
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-blue-400/30 animate-spin-slow"></div>
              
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl">
                <Image 
                  src="/profile.jpg" 
                  alt="Caín Martínez"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-full"
                  priority
                />
              </div>
              
              {/* Code-like decoration */}
              <div className="absolute -bottom-4 -right-4 bg-slate-700/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-blue-300 border border-slate-600">
                <code>developer.ready = true;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute left-0 right-0 bottom-8 flex justify-center animate-bounce">
        <button onClick={scrollToNextSection} className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Scroll down">
          <FaAngleDoubleDown size={24} />
        </button>
      </div>
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
