'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
}

// Array de imágenes de proyectos para cada repositorio
// En una implementación real, necesitarías añadir las imágenes a tu carpeta public
const projectImages = [
  '/qorders.png',
  '/eventeco.png',
  '/job.png',
  '/living.png',
  '/odoo.png',
  '/portfolio.png',
];

export function Projects({ projects }: { projects: Project[] }) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Proyectos</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Formato de fecha
            const updatedDate = new Date(project.updatedAt);
            const formattedDate = updatedDate.toLocaleDateString('es-ES', {
              day: 'numeric', 
              month: 'long', 
              year: 'numeric'
            });
            
            return (
              <div 
                key={project.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={projectImages[index % projectImages.length]}
                    alt={project.name}
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description || "Sin descripción disponible"}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>Actualizado: {formattedDate}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      <span>Repositorio</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}