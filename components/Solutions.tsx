import React from 'react';
import { Target, Globe, TrendingUp, BarChart3 } from 'lucide-react';

const Solutions: React.FC = () => {
  const items = [
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Estratégia personalizada baseada em análise profunda do seu mercado, concorrentes e desafios."
    },
    {
      icon: Globe,
      title: "Presença Digital",
      description: "Site profissional, redes sociais ativas e ecossistema digital integrado para converter visitantes."
    },
    {
      icon: TrendingUp,
      title: "Investimento com Retorno",
      description: "Foco total em ROI. Cada real investido é monitorado para gerar o máximo de lucratividade."
    },
    {
      icon: BarChart3,
      title: "Inteligência de Dados",
      description: "Transformamos números em decisões. Dashboards em tempo real para acompanhar o crescimento."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="solutions" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Soluções que <span className="text-brand-orange">geram resultados</span>
          </h2>
          <p className="text-gray-400 font-sans">Cada estratégia pensada para maximizar seu faturamento e rentabilidade</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              onMouseMove={handleMouseMove}
              className="group relative bg-[#232323] p-8 rounded-2xl border border-white/5 hover:border-brand-orange transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden h-full"
            >
              {/* Interactive Glow Layer */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 107, 0, 0.25), transparent 40%)`
                }}
              />

              {/* Watermark Icon - Now Top Right and More Visible */}
              <item.icon className="absolute -right-8 -top-8 w-40 h-40 text-white opacity-0 group-hover:opacity-20 transition-all duration-500 transform rotate-12 scale-50 group-hover:scale-100 pointer-events-none z-0" />

              {/* Small Icon - Disappears on Hover */}
              <div className="relative z-10 w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:opacity-0 transition-all duration-300">
                <item.icon className="w-7 h-7 text-brand-orange" />
              </div>
              
              {/* Text - Moves Up on Hover */}
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-16">
                <h3 className="text-lg font-bold text-white mb-4 font-display">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;