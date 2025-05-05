'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin, FaExclamationTriangle } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formulario deshabilitado, no se procesa la solicitud
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Contacto</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium">+34 622 095 840</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">c.martinezbernabeu@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium">Albaida (Valencia)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaGlobe className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sitio web</p>
                  <p className="font-medium">cain-dev.es</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-3">Sígueme en:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/CainMartinez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/c-martinez-bernabeu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 relative">
            {/* Aviso de formulario deshabilitado */}
            <div className="absolute inset-0 bg-gray-100/70 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-lg">
              <div className="bg-amber-50 border border-amber-300 text-amber-800 p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
                <FaExclamationTriangle className="text-amber-500 text-3xl mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Formulario temporalmente deshabilitado</h3>
                <p>Hasta que se habiliten los emails en la web, por favor, utiliza los datos de contacto proporcionados o conéctate conmigo a través de redes sociales.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="opacity-60">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  disabled
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  disabled
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  disabled
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={true}
                className="w-full bg-gray-400 text-white font-medium py-2 px-4 rounded-md cursor-not-allowed opacity-70"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}