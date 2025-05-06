"use client";

import { FaGraduationCap, FaTerminal } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export function Education() {
  const education = [
    {
      degree: "Grado Superior de Desarrollo de Aplicaciones Web (DAW)",
      institution: "IES L'Estació - Ontinyent (Valencia)",
      period: "09/2023 - 06/2025",
      skills: ["JavaScript", "PHP", "SQL", "React", "Laravel"]
    },
    {
      degree: "Grado Medio de Sistemas Microinformáticos y Redes (SMR)",
      institution: "Colegio San Roque - Alcoy (Alicante)",
      period: "9/2021 - 6/2023",
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
    <section id="education" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <FaTerminal className="text-green-400" />
          <h2 className="text-3xl font-mono font-bold text-center">Formación</h2>
        </div>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
        
        {/* Terminal Header */}
        <div className="mb-4 mx-auto max-w-3xl">
          <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
            <div className="flex space-x-2 ml-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto font-mono text-sm">education.sh</div>
          </div>
          
          {/* Terminal Content */}
          <div className="bg-gray-950 p-4 rounded-b-lg font-mono text-sm text-green-400">
            <div ref={terminalRef} className="mb-4 h-24 overflow-hidden"></div>
            
            {/* Education Data */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-500 pl-4 ml-2">
                  <div className="flex items-center gap-2 mb-1">
                    <FaGraduationCap className="text-green-400" />
                    <span className="text-yellow-300 font-bold">{edu.degree}</span>
                  </div>
                  <div className="ml-6">
                    <div className="text-blue-300">
                      <span className="text-pink-400">const</span> <span className="text-blue-300">institution</span> = <span className="text-green-300">&#34;{edu.institution}&#34;</span>;
                    </div>
                    <div className="text-blue-300">
                      <span className="text-pink-400">const</span> <span className="text-blue-300">period</span> = <span className="text-green-300">&#34;{edu.period}&#34;</span>;
                    </div>
                    <div className="text-blue-300 mt-1">
                      <span className="text-pink-400">const</span> <span className="text-blue-300">skills</span> = [
                      <span className="text-green-300"> &#34;{edu.skills.join('&#34;, &#34;')}&#34; </span>
                      ];
                    </div>
                    <div className="mt-1 text-gray-400">
                      {/* Formación completada en curso o con éxito según corresponda */}
                      <span className="text-purple-400">&#47;&#47; Formación {index === 0 ? "en curso" : "completada con éxito"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Command Line */}
            <div className="mt-6 flex items-center">
              <span className="text-green-400">user@portfolio:~$</span>
              <div className="ml-2 h-5 w-2 bg-green-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
