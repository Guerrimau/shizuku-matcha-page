import React from 'react';
import { Instagram, MessageCircle, Clock, MapPin } from 'lucide-react';

const OrderInfo = () => {
  return (
    <section id="order-info" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            ¿Listo para Ordenar?
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Ordenar tu matcha es muy sencillo
          </p>
        </div>

        {/* Order Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 bg-cream rounded-lg">
            <div className="w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram size={20} />
            </div>
            <h3 className="font-serif text-lg text-charcoal mb-2">1. Síguenos</h3>
            <p className="text-sm text-charcoal-light">
              Encuéntranos en Instagram como @tu_cuenta
            </p>
          </div>

          <div className="text-center p-6 bg-cream rounded-lg">
            <div className="w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={20} />
            </div>
            <h3 className="font-serif text-lg text-charcoal mb-2">2. Haz tu Pedido</h3>
            <p className="text-sm text-charcoal-light">
              Escríbenos por DM para ordenar
            </p>
          </div>

          <div className="text-center p-6 bg-cream rounded-lg">
            <div className="w-12 h-12 bg-matcha text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={20} />
            </div>
            <h3 className="font-serif text-lg text-charcoal mb-2">3. Recibe o Recoge</h3>
            <p className="text-sm text-charcoal-light">
              Elige tu método de entrega preferido
            </p>
          </div>
        </div>

        {/* Delivery Info - Updated */}
        <div className="max-w-2xl mx-auto bg-matcha-pale/20 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-matcha" size={24} />
              <h3 className="text-xl font-serif text-charcoal">Entregas en Hermosillo</h3>
            </div>
            
            {/* Delivery Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-2xl mb-2">🚚</div>
                <h4 className="font-medium text-charcoal mb-2">Entrega a Domicilio</h4>
                <p className="text-sm text-charcoal-light">
                  Entregas GRATIS todos los sábados
                  <br />
                  en cualquier parte de Hermosillo
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="text-2xl mb-2">🏠</div>
                <h4 className="font-medium text-charcoal mb-2">Pick-up</h4>
                <p className="text-sm text-charcoal-light">
                  Disponible para recoger
                  <br />
                  durante toda la semana
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-6 py-3 rounded-lg hover:bg-matcha-dark transition-colors"
            >
              <Instagram size={20} />
              Ordenar por Instagram
            </a>
            <a 
              href="https://wa.me/tuNumero" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-matcha text-matcha px-6 py-3 rounded-lg hover:bg-matcha-pale/20 transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo; 