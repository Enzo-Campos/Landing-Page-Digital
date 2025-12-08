import React from 'react';
import { Award, CheckCircle2, DollarSign, Heart, Cpu, FileBarChart } from 'lucide-react';

const WhyUs: React.FC = () => {
  const reasons = [
    { icon: Award, title: "35 anos no mercado", desc: "Experiência sólida que atravessou diversas eras do marketing para garantir resultados hoje." },
    { icon: CheckCircle2, title: "Método comprovado", desc: "Sistema proprietário testado e validado em centenas de clientes de diversos nichos." },
    { icon: DollarSign, title: "Foco total em ROI", desc: "Não buscamos métricas de vaidade. Sua rentabilidade e vendas são nossa única prioridade." },
    { icon: Heart, title: "Parceria verdadeira", desc: "Atuamos como um braço estratégico da sua empresa. Seu sucesso é o nosso sucesso." },
    { icon: Cpu, title: "Tecnologia avançada", desc: "Utilizamos as ferramentas mais modernas de IA e automação para sair na frente." },
    { icon: FileBarChart, title: "Relatórios detalhados", desc: "Transparência total. Você sabe exatamente onde cada centavo está sendo investido." },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="why-us" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Content */}
          <div className="lg:col-span-4 top-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Por que <span className="text-brand-orange">escolher a Iblanco?</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg mb-8 leading-relaxed">
              Não somos apenas mais uma agência. Somos parceiros de negócio comprometidos com o seu crescimento sustentável.
            </p>
            
            <div className="hidden lg:block p-6 bg-brand-orange/5 rounded-xl border border-brand-orange/20">
               <div className="text-4xl font-black text-brand-orange mb-2 font-display">+35</div>
               <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">Anos de experiência combinada</div>
            </div>
          </div>

          {/* Right Side Grid - 2 cols aligned right */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((item, index) => (
                <div 
                  key={index}
                  onMouseMove={handleMouseMove}
                  className="group relative flex flex-col gap-4 p-6 bg-[#232323] rounded-xl border border-white/5 hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
                >
                  {/* Interactive Glow Layer */}
                  <div 
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 107, 0, 0.25), transparent 40%)`
                    }}
                  />

                  {/* Watermark Icon - Top Right */}
                  <item.icon className="absolute -right-8 -top-8 w-40 h-40 text-white opacity-0 group-hover:opacity-20 transition-all duration-500 transform rotate-12 scale-50 group-hover:scale-100 pointer-events-none z-0" />

                  {/* Small Icon - Disappears */}
                  <div className="relative z-10 bg-brand-orange/10 w-12 h-12 flex items-center justify-center rounded-lg text-brand-orange group-hover:opacity-0 transition-all duration-300">
                    <item.icon size={24} />
                  </div>

                  {/* Text Content - Moves Up */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-12">
                    <h4 className="font-bold text-white text-lg font-display mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 group-hover:text-white font-sans leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;