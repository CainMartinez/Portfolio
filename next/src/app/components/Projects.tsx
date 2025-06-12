'use client';

import Image from 'next/image';
import { FaGithub, FaCalendarAlt, FaFolder, FaCode } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
}

// Array de imágenes de proyectos para cada repositorio
const projectImages = [
  '/qorders.png',
  '/odoo.png',
  '/eventeco.png',
  '/job.png',
  '/living.png',
  '/portfolio.png',
];

// Tecnologías para mostrar por cada proyecto
const projectTechs = [
  ['Vue.js', 'Laravel', 'MySQL'],
  ['Symfony', 'PostgreSQL', 'Bootstrap'],
  ['Angular', 'Node.js', 'MongoDB'],
  ['PHP', 'MySQL', 'jQuery'],
  ['Python', 'PostgreSQL', 'Odoo'],
  ['Next.js', 'React', 'TypeScript'],
];


export function Projects({ projects }: { projects: Project[] }) {
  
  // Filtrado básico por categorías (en una versión real asignarías categorías reales a cada proyecto)
  const filteredProjects = projects;

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header con estilo mejorado */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-3">
            <div className="flex items-center gap-1.5">
              <FaFolder className="text-sm" />
              <span className="text-sm font-medium">Mis trabajos</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-3">
            <span className="text-blue-600">&lt;</span>
            Proyectos
            <span className="text-blue-600">/&gt;</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades con diversas tecnologías y frameworks.
          </p>
        </div>

        {/* Grid de proyectos con diseño mejorado */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
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
                className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Container con overlay mejorado */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={projectImages[index % projectImages.length]}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 translate-y-2 group-hover:translate-y-0">{project.name}</h3>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="Ver repositorio"
                      >
                        <FaGithub className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content with better layout */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Project name - visible when not hovering */}
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{project.name}</h3>
                  
                  {/* Tags/Tech stack with improved design */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectTechs[index % projectTechs.length].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1"
                      >
                        <FaCode className="text-xs" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description with better typography */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description || "Sin descripción disponible."}
                  </p>

                  {/* Footer with date and link - improved layout */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-blue-400" />
                      <span>
                        {formattedDate}
                      </span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Repositorio</span>
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/CainMartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-lg transition duration-300 shadow-lg"
          >
            <FaGithub className="text-lg" />
            <span>Ver más proyectos en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
