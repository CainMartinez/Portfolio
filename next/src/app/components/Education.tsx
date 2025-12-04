"use client";

import { FaGraduationCap } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export function Education() {
  const education = [
    {
      degree: "Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "IES L'Estació - Ontinyent (Valencia)",
      period: "09/2025 - 06/2026",
      skills: ["C#", "React Native", "Flutter", "Python", "iOS", "Android", "Desktop"]
    },
    {
      degree: "Grado Superior de Desarrollo de Aplicaciones Web (DAW)",
      institution: "IES L'Estació - Ontinyent (Valencia)",
      period: "09/2023 - 06/2025",
      skills: ["JavaScript", "PHP", "SQL", "React", "Laravel"]
    },
    {
      degree: "Grado Medio de Sistemas Microinformáticos y Redes (SMR)",
      institution: "Colegio San Roque - Alcoy (Alicante)",
      period: "09/2021 - 06/2023",
      skills: ["Redes", "Sistemas", "Hardware", "Windows", "Linux"]
    }
  ];

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulación de terminal escribiendo automáticamente
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.innerHTML = '';
      const text = '> Cargando historial académico...\n> Accediendo a datos educativos...\n> Información encontrada.';
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          terminal.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 50 + 10);
        }
      };
      typeWriter();
    }
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Encabezado con estilo mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-3">
            <div className="flex items-center gap-1.5">
              <FaGraduationCap className="text-sm" />
              <span className="text-sm font-medium">Mi aprendizaje</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-blue-600">&lt;</span>
            Formación
            <span className="text-blue-600">/&gt;</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mi trayectoria educativa y las habilidades que he adquirido durante mi formación académica.
          </p>
        </div>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        
        {/* Terminal Container */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="bg-gray-800 p-3 flex items-center">
            <div className="flex space-x-2 ml-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto font-mono text-gray-300">education.js</div>
          </div>
          
          {/* Terminal Command Input Section */}
          <div className="p-4 border-b border-gray-700">
            <div ref={terminalRef} className="font-mono text-sm text-green-400 h-12 overflow-hidden"></div>
          </div>
          
          {/* Terminal Educational Content */}
          <div className="p-6 font-mono">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 border-l-2 border-blue-500 pl-4">
                <div className="text-white">
                  <span className="text-blue-400 mr-2">🎓</span>
                  <span className="text-yellow-300 font-bold">{edu.degree}</span>
                </div>
                
                <div className="mt-3 pl-6">
                  <div className="text-gray-300 mb-2">
                    <span className="text-blue-400">Centro:</span> <span className="text-green-300">{edu.institution}</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    <span className="text-blue-400">Periodo:</span> <span className="text-green-300">{edu.period}</span>
                  </div>
                  
                  <div className="mt-2">
                    <div className="text-blue-400">$ ls ./skills</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {edu.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800 text-green-400 rounded-md text-sm font-medium border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 text-gray-400 pl-6 flex items-center gap-1 text-sm">
                  <div className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-green-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-purple-400">{`// ${index === 0 ? "En curso" : "Completado"}`}</span>
                </div>
              </div>
            ))}
            
            {/* Terminal Prompt at End */}
            <div className="flex items-center mt-3">
              <span className="text-green-400">user@portfolio:~$</span>
              <div className="ml-2 h-4 w-2 bg-green-400 animate-pulse"></div>
            </div>
          </div>
          
          {/* Terminal Status Bar */}
          <div className="bg-gray-800 text-xs text-gray-400 py-2 px-4 flex items-center justify-between border-t border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Formación actualizada</span>
            </div>
            <div>
              <span>3 titulaciones • {education[0].skills.length + education[1].skills.length + education[2].skills.length} habilidades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

