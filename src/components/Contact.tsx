import React from 'react';
import { Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="zen-spacing animate-slide-up">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
                Soporte al Cliente
              </h2>
              <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
              <p className="text-2xl font-light text-gold">
                Estamos aquí para ayudarte con tu experiencia de compra
              </p>
            </div>
            
            <div className="prose prose-lg text-charcoal max-w-none zen-spacing">
              <p className="text-lg leading-relaxed">
                ¿Tienes preguntas sobre tu pedido? ¿Necesitas ayuda con el proceso de compra? 
                ¿O simplemente quieres conocer más sobre nuestros productos?
              </p>
              
              <p className="text-lg leading-relaxed font-medium text-matcha-dark">
                Nuestro equipo de atención al cliente está listo para brindarte la mejor experiencia de compra.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-matcha-pale/50 transition-colors duration-300 cursor-pointer"
                   onClick={() => window.open('https://www.instagram.com/shizukumatchastudio/', '_blank')}>
                <div className="w-12 h-12 bg-matcha flex items-center justify-center">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">Instagram</h4>
                  <p className="text-charcoal-light text-sm">@shizukumatchastudio • Respuesta rápida y personalizada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-matcha-pale/30">
                <div className="w-12 h-12 bg-matcha flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">Horarios de Atención</h4>
                  <p className="text-charcoal-light text-sm">Lun - Vie: 9:00 AM - 6:00 PM • Sáb: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gold-pale/30">
                <div className="w-12 h-12 bg-gold flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">Ubicación</h4>
                  <p className="text-charcoal-light text-sm">Hermosillo, Sonora • Entregas locales y nacionales</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Atención al cliente Shizuku Matcha Studio"
                className="w-full h-96 lg:h-[500px] object-cover shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
            </div>
            
            {/* Floating Contact Card */}
            <div className="absolute -bottom-8 -left-8 bg-white shadow-strong p-8 max-w-sm">
              <h4 className="font-serif text-xl text-charcoal mb-4">
                ¿Tienes una cafetería?
              </h4>
              <p className="text-charcoal-light text-sm mb-4 leading-relaxed">
                Ofrecemos matcha premium para negocios en Hermosillo. Capacitación, recetas y asesoría incluidas.
              </p>
              <button 
                onClick={() => window.open('https://www.instagram.com/shizukumatchastudio/', '_blank')}
                className="text-gold font-medium text-sm transition-colors duration-300"
              >
                Colaboremos →
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-gold/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-charcoal mb-4">
              Preguntas Frecuentes
            </h3>
            <div className="w-16 h-px bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream p-6">
              <h4 className="font-serif text-lg text-charcoal mb-3">¿Cuánto tiempo tarda el envío?</h4>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Entregas locales en Hermosillo: 1-2 días hábiles. Envíos nacionales: 3-5 días hábiles.
              </p>
            </div>
            
            <div className="bg-cream p-6">
              <h4 className="font-serif text-lg text-charcoal mb-3">¿Cómo conservar el matcha?</h4>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Mantén el matcha en un lugar fresco, seco y alejado de la luz. Refrigerar después de abrir.
              </p>
            </div>
            
            <div className="bg-cream p-6">
              <h4 className="font-serif text-lg text-charcoal mb-3">¿Ofrecen garantía de calidad?</h4>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Sí, garantizamos la frescura y calidad de nuestro matcha. Si no estás satisfecho, te devolvemos tu dinero.
              </p>
            </div>
            
            <div className="bg-cream p-6">
              <h4 className="font-serif text-lg text-charcoal mb-3">¿Puedo cancelar mi pedido?</h4>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Puedes cancelar tu pedido hasta 2 horas después de realizado, antes de que sea procesado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;