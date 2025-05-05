import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-blue-400">Caín</span> Martínez Bernabeu
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
            Técnico Superior en Desarrollo de Aplicaciones Web
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Contacto
            </a>
            <a 
              href="#projects" 
              className="border-2 border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-md font-medium transition duration-300"
            >
              Ver proyectos
            </a>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a href="https://github.com/CainMartinez" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/c-martinez-bernabeu" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:c.martinezbernabeu@hotmail.com" className="text-2xl hover:text-blue-400 transition-colors">
              <MdEmail />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image 
              src="/profile.jpg" 
              alt="Caín Martínez"
              fill
              style={{objectFit: 'cover'}}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}