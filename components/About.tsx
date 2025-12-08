import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    "Consultoria Estratégica de Marketing",
    "Agência de Propaganda",
    "Planejamento Integrado",
    "Produção de filmes e vídeos",
    "Campanhas Promocionais",
    "Criação de Branding",
    "Comunicação Visual",
    "Projetos Especiais"
  ];

  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Grupo Iblanco, <br/>
              <span className="text-brand-orange">especialistas no canal farma</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Somos uma agência especializada em inteligência estratégica de marketing, 
              criando soluções que não apenas comunicam, mas geram crescimento 
              sustentável e diferenciação competitiva real no mercado.
            </p>

            {/* Service List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://iblanco.com.br/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 text-sm shadow-lg shadow-orange-500/20 hover:shadow-white/20 transform hover:-translate-y-1"
            >
              Saiba mais <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5">
  {/* Vídeo Vimeo */}
  <iframe
    src="https://player.vimeo.com/video/1135333992?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Vimeo Video"
    style={{ border: 'none' }}
  ></iframe>

  {/* Gradiente para legibilidade */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

  {/* Card de conteúdo */}
  <div className="absolute bottom-6 left-6 right-6">
    <div className="bg-neutral-900/80 backdrop-blur-md p-[10px] sm:p-6 rounded-xl border border-white/10">
      <p className="text-white font-display font-bold mb-1">
        Marketing 360º
      </p>
      <p className="text-gray-400 text-xs">
        Atuamos em todas as frentes para garantir que sua marca seja onipresente e relevante.
      </p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default About;