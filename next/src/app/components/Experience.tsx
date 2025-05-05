'use client';

import { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({
    0: true,
    1: false,
    2: false
  });

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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Experiencia Profesional</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div 
                className="p-6 cursor-pointer flex justify-between items-start"
                onClick={() => toggleExpand(index)}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaBriefcase className="text-blue-500" />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700">{exp.position}</h4>
                  <div className="flex items-center mt-2 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div>
                  {expandedItems[index] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              {expandedItems[index] && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  <h5 className="font-semibold mb-2">Responsabilidades:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}