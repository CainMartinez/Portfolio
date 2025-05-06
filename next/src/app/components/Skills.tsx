"use client";

import { useState, useEffect } from 'react';
import { 
  FaServer, 
  FaDesktop, 
  FaCode, 
  FaSitemap, 
  FaLayerGroup, 
  FaDocker,
  FaJava,
  FaNodeJs,
  FaVuejs,
  FaReact,
  FaAngular,
  FaCogs,
  FaDatabase as FaDBIcon,
  FaLaravel,
  FaExternalLinkAlt
} from 'react-icons/fa';

import { 
  SiSpringboot, 
  SiMongodb, 
  SiRedis, 
  SiMysql, 
  SiPostgresql,
  SiSymfony,
  SiTypescript,
  SiPrisma,
  SiDocker,
  SiOdoo,
  SiElasticsearch,
  SiApachekafka,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: React.ReactNode;
  url: string;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTech, setActiveTech] = useState<Technology | null>(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  // Reset active tech when category changes
  useEffect(() => {
    setActiveTech(null);
    setIsDescriptionVisible(false);
  }, [activeCategory]);
  
  // Control description visibility with delay for smooth animation
  useEffect(() => {
    if (activeTech) {
      setIsDescriptionVisible(true);
    } else {
      setIsDescriptionVisible(false);
    }
  }, [activeTech]);

  // Skill categories and technologies
   const categories: SkillCategory[] = [
    {
      name: "Backend",
      icon: <FaServer className="text-xl" />,
      technologies: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-xl text-green-600" />,
          url: "https://spring.io/projects/spring-boot",
          description: "Framework para desarrollo de aplicaciones Java. Utilizado para crear microservicios y APIs REST. Lo he trabajado en QoRders para la parte del cliente."
        },
        {
          name: "Symfony",
          icon: <SiSymfony className="text-xl text-black" />,
          url: "https://symfony.com/",
          description: "Framework PHP modular para construir aplicaciones web robustas. Excelente para proyectos empresariales. En EventEco con Symfony he desarrollado la parte de Organizador y durante las prácticas en Gestfy, toda la migración era con esta misma tecnología."
        },
        {
          name: "Laravel",
          icon: <FaLaravel className="text-xl text-red-600" />,
          url: "https://laravel.com/",
          description: "Framework PHP elegante para desarrollo web rápido con sintaxis expresiva. Lo he implementado en la parte Manager de QoRders."
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-xl text-green-700" />,
          url: "https://nodejs.org/",
          description: "Entorno de ejecución JavaScript del lado del servidor. Perfecto para aplicaciones en tiempo real. He desarrollado con Node.js tanto en QoRders como en JobAtmosphere, en el segundo era el backend principal de la aplicación y en el primero se encarga de las notificaciones por email, WhatsApp y pagos con Stripe."
        }
      ]
    },
    {
      name: "Frontend",
      icon: <FaDesktop className="text-xl" />,
      technologies: [
        {
          name: "Vue",
          icon: <FaVuejs className="text-xl text-green-500" />,
          url: "https://vuejs.org/",
          description: "Framework JavaScript progresivo para construir interfaces de usuario. Vue es el frontend principal de mi aplicación QoRders, desarrollado con JS."
        },
        {
          name: "React",
          icon: <FaReact className="text-xl text-blue-400" />,
          url: "https://reactjs.org/",
          description: "Biblioteca JavaScript para crear interfaces de usuario basadas en componentes. En QoRders la función era listar las ONG y permitir donaciones, implementado con JS."
        },
        {
          name: "Angular",
          icon: <FaAngular className="text-xl text-red-600" />,
          url: "https://angular.io/",
          description: "Plataforma para construir aplicaciones web móviles y de escritorio. Es el primer frontend TS que usé, se encarga de darle interfaz a la aplicación JobAtmosphere."
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-xl text-blue-600" />,
          url: "https://www.typescriptlang.org/",
          description: "Superconjunto de JavaScript con tipos estáticos. Lo he implementado en Express, Next.js y Angular."
        }
      ]
    },
    {
      name: "ERP",
      icon: <FaCogs className="text-xl" />,
      technologies: [
        {
          name: "Odoo",
          icon: <SiOdoo className="text-xl text-purple-600" />,
          url: "https://www.odoo.com/",
          description: "Suite completa de aplicaciones empresariales de código abierto que abarca CRM, eCommerce, contabilidad y más. Estube de prácticas trabajando con Odoo durante el año 2023, he desarrollado un pequeño módulo en Odoo 14."
        }
      ]
    },
    {
      name: "Bases de datos",
      icon: <FaDBIcon className="text-xl" />,
      technologies: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-xl text-blue-800" />,
          url: "https://www.postgresql.org/",
          description: "Sistema de base de datos relacional de código abierto muy potente y extensible. Gestor principal de EventEco y Odoo."
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-xl text-blue-500" />,
          url: "https://www.mysql.com/",
          description: "Sistema de gestión de bases de datos relacional muy popular y de código abierto. Es el gestor que más domino, utilizado en QoRders y LivingMobility."
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-xl text-green-600" />,
          url: "https://www.mongodb.com/",
          description: "Base de datos NoSQL orientada a documentos, escalable y flexible. Lo implementé en el proyecto de JobAtmosphere como gestor principal."
        },
        {
          name: "Redis",
          icon: <SiRedis className="text-xl text-red-500" />,
          url: "https://redis.io/",
          description: "Almacén de estructura de datos en memoria utilizado como base de datos, caché y agente de mensajes. Tanto en QoRders como en EventEco se implementó como almacenamiento caché del auth, durante las prácticas en Gestfy lo utilizé para guardar la sesión de usuario, de esta forma se puede navegar por distintos servidores con la misma sesión."
        }
      ]
    },
    {
      name: "Arquitectura",
      icon: <FaSitemap className="text-xl" />,
      technologies: [
        {
          name: "MVC",
          icon: <FaCode className="text-xl text-gray-700" />,
          url: "https://developer.mozilla.org/es/docs/Glossary/MVC",
          description: "Model View Controller: Patrón de diseño usado para separar la lógica de la aplicación de la interfaz de usuario. Lo implementé en los primeros proyectos como en LivingMovility."
        },
        {
          name: "Clean Code",
          icon: <FaCode className="text-xl text-blue-700" />,
          url: "https://github.com/ryanmcdermott/clean-code-javascript",
          description: "Principios de desarrollo para escribir código mantenible, legible y robusto."
        },
        {
          name: "DDD",
          icon: <FaLayerGroup className="text-xl text-orange-600" />,
          url: "https://martinfowler.com/bliki/DomainDrivenDesign.html",
          description: "Domain Driven Design: Enfoque de desarrollo de software que conecta la implementación con un modelo de dominio evolutivo. "
        },
        {
          name: "CQRS",
          icon: <FaLayerGroup className="text-xl text-purple-700" />,
          url: "https://martinfowler.com/bliki/CQRS.html",
          description: "Command Query Responsability Segregation: Patrón que separa las operaciones de lectura de las operaciones de escritura."
        },
        {
          name: "SOLID",
          icon: <FaLayerGroup className="text-xl text-green-800" />,
          url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
          description: "Conjunto de principios de diseño de software para crear sistemas mantenibles y extensibles."
        }
      ]
    },
    {
      name: "ORM",
      icon: <FaCode className="text-xl" />,
      technologies: [
        {
          name: "Prisma",
          icon: <SiPrisma className="text-xl text-blue-900" />,
          url: "https://www.prisma.io/",
          description: "ORM de próxima generación para Node.js y TypeScript."
        },
        {
          name: "TypeORM",
          icon: <FaCode className="text-xl text-orange-500" />,
          url: "https://typeorm.io/",
          description: "ORM que puede ejecutarse en plataformas NodeJS y puede usarse con TypeScript o JavaScript."
        },
        {
          name: "Doctrine",
          icon: <FaCode className="text-xl text-blue-600" />,
          url: "https://www.doctrine-project.org/",
          description: "ORM principal de Symfony que es un conjunto de bibliotecas PHP centradas en el almacenamiento de bases de datos y mapeo de objetos."
        },
        {
          name: "JPA",
          icon: <FaJava className="text-xl text-red-700" />,
          url: "https://www.oracle.com/java/technologies/persistence-jsp.html",
          description: "ORM principal de Spring Boot, API de persistencia de Java para mapeo objeto-relacional, por lo que no es exclusivo de este framework."
        },
        {
          name: "Eloquent",
          icon: <FaLaravel className="text-xl text-red-600" />,
          url: "https://laravel.com/docs/eloquent",
          description: "ORM de Laravel que proporciona una hermosa y sencilla implementación ActiveRecord."
        }
      ]
    },
    {
      name: "Logging",
      icon: <FaLayerGroup className="text-xl" />,
      technologies: [
        {
          name: "ELK Stack",
          icon: <SiElasticsearch className="text-xl text-green-500" />,
          url: "https://www.elastic.co/elastic-stack",
          description: "Conjunto de herramientas (Elasticsearch, Logstash, Kibana) para buscar, analizar y visualizar logs."
        },
        {
          name: "Kafka",
          icon: <SiApachekafka className="text-xl text-black" />,
          url: "https://kafka.apache.org/",
          description: "Plataforma de transmisión de eventos distribuida de código abierto. Implementado durante las prácticas en Gestfy para mejorar los logs de ELK de forma asíncrona."
        }
      ]
    },
    {
      name: "Diseño",
      icon: <SiCss3 className="text-xl" />,
      technologies: [
        {
          name: "HTML",
          icon: <SiHtml5 className="text-xl text-orange-600" />,
          url: "https://developer.mozilla.org/es/docs/Web/HTML",
          description: "Lenguaje de marcado para la estructura básica de una página web."
        },
        {
          name: "CSS",
          icon: <SiCss3 className="text-xl text-blue-500" />,
          url: "https://developer.mozilla.org/es/docs/Web/CSS",
          description: "Lenguaje de hojas de estilo utilizado para describir la presentación de un documento HTML."
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-xl text-purple-600" />,
          url: "https://getbootstrap.com/",
          description: "Framework front-end para desarrollo web responsive y mobile-first."
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-xl text-teal-500" />,
          url: "https://tailwindcss.com/",
          description: "Framework CSS utility-first para construir diseños personalizados rápidamente."
        }
      ]
    },
    {
      name: "Despliegue",
      icon: <FaDocker className="text-xl" />,
      technologies: [
        {
          name: "Docker",
          icon: <SiDocker className="text-xl text-blue-500" />,
          url: "https://www.docker.com/",
          description: "Plataforma de contenedorización para empaquetar, distribuir y ejecutar aplicaciones."
        }
      ]
    },
  ];
  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Encabezado con estilo mejorado */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full mb-3">
            <div className="flex items-center gap-1.5">
              <FaCode className="text-sm" />
              <span className="text-sm font-medium">Mis herramientas</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-blue-400">&lt;</span>
            Competencias
            <span className="text-blue-400">/&gt;</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Las tecnologías y herramientas que manejo para desarrollar soluciones de software eficientes.
          </p>
        </div>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>

        {/* Tabs Navigation - Mejorado para mejor responsividad */}
        <div className="bg-slate-700 rounded-lg shadow-md p-3 mb-8 border border-slate-600">
          {/* En dispositivos móviles, mostrar un dropdown en lugar de scroll horizontal */}
          <div className="block md:hidden mb-4">
            <select 
              className="w-full p-3 border rounded-lg bg-slate-600 text-white border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
            >
              {categories.map((category, index) => (
                <option key={index} value={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* En pantallas medianas y grandes, mostrar las categorías horizontalmente */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-blue-500 text-white shadow-md scale-105' 
                    : 'bg-slate-600 text-slate-200 hover:bg-slate-500'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <span className={`mr-2 transition-transform duration-300 ${
                  activeCategory === index ? 'transform scale-110' : ''
                }`}>
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-slate-700 rounded-lg shadow-lg p-8 border border-slate-600">
          {/* Category Header with Animation */}
          <div className="mb-8 border-b border-slate-600 pb-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="mr-3 text-blue-400">{categories[activeCategory].icon}</span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                {categories[activeCategory].name}
              </span>
            </h3>
            <p className="text-slate-300 mt-2">
              Selecciona una tecnología para ver más detalles
            </p>
          </div>

          {/* Technology Grid with Improved Responsiveness */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {categories[activeCategory].technologies.map((tech, idx) => (
              <div 
                key={idx}
                className={`group relative p-4 md:p-5 rounded-xl transition-all duration-300 transform cursor-pointer ${
                  activeTech?.name === tech.name 
                    ? 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-md scale-[1.02] border-blue-400 border'
                    : 'bg-slate-500 border border-slate-400 hover:shadow-md hover:scale-[1.02]'
                }`}
                onClick={() => setActiveTech(activeTech?.name === tech.name ? null : tech)}
              >
                {/* Improved hover effect with animated gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`text-3xl sm:text-4xl mb-3 transition-all duration-300 group-hover:transform group-hover:scale-110 ${
                    activeTech?.name === tech.name ? 'transform scale-110' : ''
                  }`}>
                    {tech.icon}
                  </div>
                  <h4 className="font-medium text-white">{tech.name}</h4>
                  
                  {/* Animated underline on hover */}
                  <div className="h-0.5 w-0 bg-blue-400 absolute -bottom-1 left-1/2 transform -translate-x-1/2 group-hover:w-1/2 transition-all duration-300"></div>
                  
                  {/* Selected indicator */}
                  {activeTech?.name === tech.name && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Description Area with Improved Animation */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isDescriptionVisible ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {activeTech && (
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 border border-slate-500 shadow-inner">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 shadow-sm flex items-center justify-center mr-4">
                    <div className="text-3xl">
                      {activeTech.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white">{activeTech.name}</h4>
                </div>
                
                <p className="text-slate-200 mb-5 leading-relaxed">{activeTech.description}</p>
                
                <a 
                  href={activeTech.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  <span>Más información</span>
                  <FaExternalLinkAlt className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
