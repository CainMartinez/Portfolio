'use client';

import { useState, useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export function Experience() {
  // Estados y funciones
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({
    0: true,
    1: false,
    2: false
  });
  
  // Referencias para los contenidos desplegables
  const contentRefs = useRef<{[key: number]: HTMLDivElement | null}>({});

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const experiences: ExperienceItem[] = [
    {
      company: "Gestfy Soluciones, S.L.",
      position: "Prácticas CFGS DAW",
      period: "2/2025 - 05/2025",
      location: "Ontinyent (Valencia)",
      responsibilities: [
        "Migrar código Legacy de Symfony a una arquitectura hexagonal.",
        "Monitorizar métricas con Prometheus y Grafana.",
        "Centralizar logs para un entorno distribuido con ELK y Kafka, siguiendo su trazabilidad.",
        "Montar todo el entorno dentro de un VPS con Docker."
      ]
    },
    {
      company: "Café Pub Diferent",
      position: "Encargado",
      period: "10/2013 - 01/2025",
      location: "Albaida (Valencia)",
      responsibilities: [
        "Camarero de barra, sala y terraza.",
        "Encargado de todas las tareas de gestión del negocio en ausencia del gerente."
      ]
    },
    {
      company: "Soluntec Proyectos y Soluciones TIC, S.L.",
      position: "Prácticas CFGM SMR",
      period: "3/2023 - 06/2023",
      location: "Ontinyent (Valencia)",
      responsibilities: [
        "Desarrollo de módulos custom de Odoo:",
        "Modelos con Python y vistas con XML."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Encabezado con estilo mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full mb-3">
            <div className="flex items-center gap-1.5">
              <FaBriefcase className="text-sm" />
              <span className="text-sm font-medium">Mi trayectoria</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-blue-400">&lt;</span>
            Experiencia
            <span className="text-blue-400">/&gt;</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Mi recorrido profesional, donde he aplicado mis conocimientos y adquirido valiosa experiencia.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`bg-slate-700 rounded-lg border-l-4 ${
                index === 0 ? "border-blue-400" : 
                index === 1 ? "border-green-400" : "border-purple-400"
              } overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20`}
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleExpand(index)}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-full ${
                      index === 0 ? "bg-blue-400/20 text-blue-400" : 
                      index === 1 ? "bg-green-400/20 text-green-400" : "bg-purple-400/20 text-purple-400"
                    }`}>
                      <FaBriefcase />
                    </div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-blue-300 ml-9">{exp.position}</h4>
                  
                  <div className="flex flex-wrap items-center ml-9 text-gray-300 gap-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`p-2 rounded-full transition-colors duration-300 ${
                  expandedItems[index] ? "bg-blue-400/20" : "bg-gray-700"
                }`}>
                  {expandedItems[index] ? (
                    <FaChevronUp className={`text-blue-400 transform transition-transform duration-300`} />
                  ) : (
                    <FaChevronDown className={`text-gray-400 transform transition-transform duration-300`} />
                  )}
                </div>
              </div>
              
              {/* Contenedor para la animación */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedItems[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="px-6 pb-6 border-t border-slate-600 pt-4"
                  ref={el => { contentRefs.current[index] = el; }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-400">&lt;</span>
                    <h5 className="font-semibold">Responsabilidades</h5>
                    <span className="text-blue-400">/&gt;</span>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-gray-200">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}