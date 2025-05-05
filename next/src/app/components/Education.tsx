import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

export function Education() {
  const education = [
    {
      degree: "Grado Superior de Desarrollo de Aplicaciones Web (DAW)",
      institution: "IES L'Estació - Ontinyent (Valencia)",
      period: "09/2023 - 06/2025"
    },
    {
      degree: "Grado Medio de Sistemas Microinformáticos y Redes (SMR)",
      institution: "Colegio San Roque - Alcoy (Alicante)",
      period: "9/2021 - 6/2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Formación</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-500">
              <div className="absolute -left-3 top-0">
                <div className="bg-blue-500 text-white p-1 rounded-full">
                  <FaGraduationCap className="text-xl" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-700 mb-3">{edu.institution}</p>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}