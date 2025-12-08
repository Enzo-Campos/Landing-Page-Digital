import React, { useState, useEffect } from 'react';
import { X, Lock, ArrowRight } from 'lucide-react';

const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already shown ever (localStorage persists across sessions)
    const shown = localStorage.getItem('exitPopupShown');
    if (shown) return;

    const handleExitIntent = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the window
      if (e.clientY <= 0) {
        setIsVisible(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    return () => document.removeEventListener('mouseleave', handleExitIntent);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    closePopup();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={closePopup}
      ></div>

      {/* Popup Card */}
      <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-fade-in-up transform scale-100">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl md:text-xl font-black text-white mb-6 text-center tracking-tight leading-tight">
          <span className="text-brand-orange">Espere!</span> Não vá embora ainda
        </h2>

        <p className="text-gray-300 text-center mb-8 text-lg leading-relaxed">
          Agende uma reunião de 30 minutos e descubra como podemos <strong className="text-white">multiplicar seus resultados</strong> com estratégias comprovadas de marketing digital.
        </p>

        <div className="space-y-3">
          <button
            onClick={handleCtaClick}
            className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-2 text-lg group shadow-lg shadow-orange-900/20"
          >
            Agendar Reunião <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={closePopup}
            className="w-full bg-transparent border border-white/10 text-gray-400 font-bold py-3.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Continuar navegando
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
          <Lock size={12} className="text-brand-orange" />
          <span>Sem compromisso. Cancele a qualquer momento.</span>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;