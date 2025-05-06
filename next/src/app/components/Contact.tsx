'use client';

import { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin, FaCheckCircle, FaExclamationCircle, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Cargar el script de Leaflet si no está ya cargado
    if (!document.querySelector('script[src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
      
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }
    
    return () => {
      // Cleanup si es necesario
    };
  }, []);
  
  // Reset status after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);
  
  const initializeMap = () => {
    if (!mapRef.current) return;
    
    // Coordenadas de Albaida (Valencia)
    const albaidaCoords = [38.8416, -0.5168];
    
    // @ts-expect-error - L viene de Leaflet que se carga dinámicamente
    const map = L.map(mapRef.current).setView(albaidaCoords, 13);
    
    // @ts-expect-error - tileLayer no está tipado en el contexto actual
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // @ts-expect-error - marker no está tipado en el contexto actual
    const marker = L.marker(albaidaCoords).addTo(map);
    marker.bindPopup("<b>Caín Martínez</b><br>Desarrollador Web").openPopup();
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, completa todos los campos');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Inténtalo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      {/* Sección de información de contacto con diseño mejorado */}
      <section id="contact-info" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Encabezado con estilo mejorado */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full mb-3">
              <div className="flex items-center gap-1.5">
                <FaCommentDots className="text-sm" />
                <span className="text-sm font-medium">Conectemos</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-blue-400">&lt;</span>
              Contacto
              <span className="text-blue-400">/&gt;</span>
            </h2>
            
            <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades profesionales? Estoy disponible a través de los siguientes canales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Información de contacto lado izquierdo */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Datos de contacto</span>
              </h3>
              
              <div className="space-y-6">
                {/* Teléfono */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Teléfono</p>
                    <p className="font-medium">+34 622 095 840</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-medium break-all">c.martinezbernabeu@hotmail.com</p>
                  </div>
                </div>
                
                {/* Ubicación */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Ubicación</p>
                    <p className="font-medium">Albaida (Valencia)</p>
                  </div>
                </div>
                
                {/* Sitio web */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center">
                    <FaGlobe className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Sitio web</p>
                    <a href="https://cain-dev.es" className="font-medium hover:text-blue-300 transition-colors">
                      cain-dev.es
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="font-medium text-lg mb-4">Puedes seguirme en:</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/CainMartinez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-blue-600 p-3 rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/c-martinez-bernabeu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-blue-600 p-3 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mapa al lado derecho */}
            <div className="h-[400px] bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-slate-700/50">
              <div ref={mapRef} className="w-full h-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de formulario - Fondo claro */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-3 text-center text-gray-800">Envíame un mensaje</h3>
          <p className="text-gray-600 text-center mb-8">
            Rellene los datos y responderé los más rápido posible. El correo electrónico que se me facilite será con el que me ponga en contacto.
          </p>
          
          {/* Formulario sin aviso de deshabilitado */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative border border-gray-100">
            {/* Notificación de estado */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                <p>¡Mensaje enviado con éxito! Te responderé lo antes posible.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md flex items-center">
                <FaExclamationCircle className="text-red-500 mr-3 flex-shrink-0" />
                <p>{errorMessage || 'Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.'}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center text-white font-medium py-3 px-6 rounded-md shadow-md transition-colors ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-wait' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Enviar mensaje
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Al enviar este formulario, aceptas que usaré tu información solo para responder a tu mensaje.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}