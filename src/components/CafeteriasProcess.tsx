import React from 'react';
import { MessageCircle, Calculator, Handshake, Package } from 'lucide-react';

const CafeteriasProcess = () => {
  return (
    <section id="cafeterias-process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Proceso Simple para Negocios
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-px bg-charcoal/10">
            {/* Step 1 */}
            <div className="bg-white p-8">
              <div className="h-16 w-16 bg-matcha flex items-center justify-center mb-6">
                <MessageCircle className="text-white" size={32} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">01</span>
                  <h3 className="font-serif text-lg text-charcoal">Contacto</h3>
                </div>
                <p className="text-charcoal-light text-sm">
                  Escríbenos por Instagram con los detalles de tu negocio
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8">
              <div className="h-16 w-16 bg-matcha flex items-center justify-center mb-6">
                <Calculator className="text-white" size={32} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">02</span>
                  <h3 className="font-serif text-lg text-charcoal">Cotización</h3>
                </div>
                <p className="text-charcoal-light text-sm">
                  Te enviamos precios mayoristas según tu volumen
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8">
              <div className="h-16 w-16 bg-matcha flex items-center justify-center mb-6">
                <Handshake className="text-white" size={32} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">03</span>
                  <h3 className="font-serif text-lg text-charcoal">Acuerdo</h3>
                </div>
                <p className="text-charcoal-light text-sm">
                  Confirmamos pedido y coordinamos método de pago
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8">
              <div className="h-16 w-16 bg-matcha flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">04</span>
                  <h3 className="font-serif text-lg text-charcoal">Entrega</h3>
                </div>
                <p className="text-charcoal-light text-sm">
                  Coordinamos pick-up o entrega según tu preferencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasProcess;

