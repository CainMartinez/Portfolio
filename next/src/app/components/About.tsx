"use client";

import { FaUser, FaLaptopCode, FaSearch } from 'react-icons/fa';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Encabezado con estilo mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-3">
            <div className="flex items-center gap-1.5">
              <FaUser className="text-sm" />
              <span className="text-sm font-medium">Mi perfil</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-blue-600">&lt;</span>
            Sobre mí
            <span className="text-blue-600">/&gt;</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Desarrollador web entusiasta con pasión por crear soluciones digitales robustas y escalables.
          </p>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {/* Contenido Principal - Todos los paneles visibles */}
          <div className="p-8 space-y-10">
            {/* Sección Perfil */}
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-full border border-blue-100 flex-shrink-0">
                <FaUser className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center flex-wrap">
                  <span className="font-mono text-blue-600 mr-2">function</span> 
                  <span className="mr-2">getProfile()</span>
                  <span className="text-blue-600">&#123;</span>
                </h3>
                <p className="text-lg leading-relaxed mb-4 pl-4 border-l-2 border-blue-100">
                  Técnico Superior en Desarrollo de Aplicaciones Web, disfruto del código limpio y escalable.
                </p>
                <div className="text-blue-600 font-mono">
                  <span className="text-blue-600">&#125;</span>
                </div>
              </div>
            </div>
            
            {/* Separador visual */}
            <div className="border-t border-gray-100 w-3/4 mx-auto"></div>
            
            {/* Sección Tecnologías */}
            <div className="flex items-start gap-6">
              <div className="bg-green-50 p-4 rounded-full border border-green-100 flex-shrink-0">
                <FaLaptopCode className="text-green-500 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center flex-wrap">
                  <span className="font-mono text-green-600 mr-2">const</span>
                  <span className="mr-2">skills = ()</span>
                  <span className="text-green-600">=&gt; &#123;</span>
                </h3>
                <p className="text-lg leading-relaxed mb-4 pl-4 border-l-2 border-green-100">
                  Aprendo con rapidez y tengo pasión por desarrollar nuevas tecnologías para crear soluciones fiables.
                </p>
                <div className="text-green-600 font-mono">
                  <span className="text-green-600">&#125;</span>
                </div>
              </div>
            </div>
            
            {/* Separador visual */}
            <div className="border-t border-gray-100 w-3/4 mx-auto"></div>
            
            {/* Sección Objetivo */}
            <div className="flex items-start gap-6">
              <div className="bg-purple-50 p-4 rounded-full border border-purple-100 flex-shrink-0">
                <FaSearch className="text-purple-500 text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center flex-wrap">
                  <span className="font-mono text-purple-600 mr-2">async</span>
                  <span className="mr-2">function careerGoal()</span>
                  <span className="text-purple-600">&#123;</span>
                </h3>
                <p className="text-lg leading-relaxed mb-4 pl-4 border-l-2 border-purple-100">
                  En busca de una oportunidad laboral en la que mejorar mis habilidades, aportar valor y adquirir experiencia.
                </p>
                <div className="text-purple-600 font-mono">
                  <span className="text-purple-600">&#125;</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Bar - Como en IDE */}
          <div className="bg-gray-100 text-xs text-gray-600 py-2 px-4 flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Ready</span>
            </div>
            <div className="flex items-center gap-3">
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
