import React from 'react';
import { MessageSquare, FileText, PackageCheck, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contacto',
    description: 'Escríbenos por Instagram. Sin mínimo de compra, sin compromisos previos.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Cotización',
    description: 'Te enviamos precios por volumen, presentaciones disponibles y especificaciones técnicas.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Confirmación',
    description: 'Confirmamos pedido. Coordinamos entrega en Hermosillo o envío nacional.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega',
    description: 'Pick-up en Hermosillo o envío a cualquier ciudad. Empaque seguro para conservar frescura.',
  },
];

const CafeteriasProcess = () => {
  return (
    <section id="cafeterias-process" className="section-padding bg-cream">
      <div className="container-custom">

        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Proceso
          </p>
          <h2 className="studio-subheading text-washi-text">
            Cuatro pasos para tu primer pedido
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-px bg-charcoal/5">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="bg-cream p-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-forest-green/60 tracking-wider pt-1">
                  {number}
                </span>
                <div className="w-10 h-10 bg-forest-green-pale flex items-center justify-center flex-shrink-0">
                  <Icon className="text-forest-green" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-washi-text font-light tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CafeteriasProcess;
