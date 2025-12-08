import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray relative border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Pronto para <span className="text-brand-orange">dominar seu mercado</span> e alcançar resultados extraordinários?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Agende uma reunião com nossos especialistas e descubra como podemos transformar seu negócio
        </p>
        <a 
          href="#contact" 
          className="inline-flex justify-center items-center px-10 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 text-lg shadow-xl shadow-orange-500/10 hover:shadow-white/20 transform hover:-translate-y-1"
        >
          Quero ser um cliente
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTA;