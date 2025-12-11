import React from 'react';
import { Smartphone, ShoppingCart, Zap, MessageCircle, FileText, Sparkles, Users, Search, Bot, BarChart, MapPin, MousePointer2, Megaphone, PieChart, RefreshCw, ArrowRight, Target, Globe } from 'lucide-react';

interface FeatureBlockProps {
  id: string;
  title: React.ReactNode;
  subtitle: string;
  description: string;
  buttonText: string;
  items: { icon: any; title: string; desc: string }[];
  layout?: 'full' | 'split'; // New prop to control layout
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ 
  id,
  title, 
  subtitle, 
  description, 
  buttonText, 
  items,
  layout = 'full'
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id={id} className="py-24 border-t border-white/5 relative overflow-hidden group/section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover/section:opacity-30 transition-opacity duration-1000 pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {layout === 'full' ? (
          // Full Layout: Title Centered, Cards in 1 Row (4 cols)
          <>
            <div className="text-center mb-16">
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2 block font-display">{subtitle}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">{title}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-sans text-lg">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {items.map((item, index) => (
                <div 
                  key={index}
                  onMouseMove={handleMouseMove}
                  className="group relative bg-[#232323] p-8 rounded-2xl border border-white/5 hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
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

                  {/* Small Icon */}
                  <div className="relative z-10 w-12 h-12 mb-6 text-brand-orange bg-brand-orange/10 rounded-lg flex items-center justify-center shadow-lg shadow-orange-900/10 group-hover:opacity-0 transition-all duration-300">
                    <item.icon size={24} />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-14">
                    <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans group-hover:text-white transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-white/20 transform hover:-translate-y-1">
                {buttonText} <ArrowRight size={18} />
              </a>
            </div>
          </>
        ) : (
          // Split Layout: Title Left, Cards Grid Right (2x2)
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2 block font-display">{subtitle}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">{title}</h2>
              <p className="text-gray-400 font-sans text-lg mb-8 leading-relaxed">{description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-white/20 transform hover:-translate-y-1">
                {buttonText} <ArrowRight size={18} />
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {items.map((item, index) => (
                  <div 
                    key={index} 
                    onMouseMove={handleMouseMove}
                    className="group relative bg-[#232323] p-8 rounded-2xl border border-white/5 hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
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

                    {/* Small Icon */}
                    <div className="relative z-10 w-12 h-12 mb-6 text-brand-orange bg-brand-orange/10 rounded-lg flex items-center justify-center shadow-lg shadow-orange-900/10 group-hover:opacity-0 transition-all duration-300">
                      <item.icon size={24} />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-14">
                      <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans group-hover:text-white transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <>
      <FeatureBlock 
        id="sites"
        layout="split"
        title={<>Seu site: <span className="text-brand-orange">plataforma de conversão</span></>}
        subtitle="Websites High-End"
        description="Enquanto você cuida do seu negócio, seu site trabalha para gerar clientes e converter 24 horas por dia."
        buttonText="Quero um site que converte"
        items={[
          { icon: Smartphone, title: "Visual Profissional", desc: "Design moderno e responsivo que transmite credibilidade instantânea em qualquer dispositivo." },
          { icon: ShoppingCart, title: "Foco em Vendas", desc: "UX/UI projetado estrategicamente com gatilhos mentais para guiar o visitante até a compra." },
          { icon: Zap, title: "Tecnologia & Agentes de IA", desc: "Desenvolvemos sites de alta performance integrados a agentes de IA que automatizam seu atendimento e vendas 24h." },
          { icon: MessageCircle, title: "Integração Total", desc: "Conexão direta com WhatsApp, CRM e ferramentas de automação para não perder nenhum lead." }
        ]}
      />

      <FeatureBlock 
        id="social"
        layout="full"
        title={<>Redes Sociais: <span className="text-brand-orange">engajamento real</span></>}
        subtitle="Social Media"
        description="Transforme seguidores em uma comunidade fiel que compra, recomenda e defende a sua marca."
        buttonText="Quero crescer nas redes"
        items={[
          { icon: FileText, title: "Planejamento", desc: "Linha editorial estratégica baseada nos interesses e dores do seu público-alvo ideal." },
          { icon: Sparkles, title: "Conteúdo Viral", desc: "Formatos dinâmicos (Reels, Stories) que aumentam o alcance orgânico e retêm a atenção." },
          { icon: Users, title: "Gestão de Comunidade", desc: "Interação ativa e humanizada para criar relacionamento genuíno com seus seguidores." },
          { icon: BarChart, title: "Análise de Dados", desc: "Monitoramento constante de métricas para ajustar a rota e maximizar o engajamento." }
        ]}
      />

      <FeatureBlock 
        id="seo"
        layout="split"
        title={<>SEO & GEO: <span className="text-brand-orange">visibilidade total</span></>}
        subtitle="Busca Orgânica"
        description="Domine o Google e seja recomendado por IAs como ChatGPT. Sua marca encontrada no momento exato da necessidade."
        buttonText="Quero ser encontrado"
        items={[
          { icon: Search, title: "Topo do Google", desc: "Estratégias avançadas de SEO On-page e Off-page para conquistar as primeiras posições." },
          { icon: Bot, title: "Otimização para IAs", desc: "GEO (Generative Engine Optimization) para sua marca ser citada pelo ChatGPT e Gemini." },
          { icon: MapPin, title: "Google Meu Negócio", desc: "Otimização local para capturar clientes que buscam soluções na sua região geográfica." },
          { icon: Globe, title: "Autoridade Digital", desc: "Construção de backlinks e PR Digital para fortalecer a relevância do seu domínio." }
        ]}
      />

      <FeatureBlock 
        id="ads"
        layout="full"
        title={<>Tráfego Pago: <span className="text-brand-orange">escala acelerada</span></>}
        subtitle="Performance Ads"
        description="Campanhas de alta precisão que colocam seu produto na frente de quem já está pronto para comprar."
        buttonText="Quero vender mais"
        items={[
          { icon: MousePointer2, title: "Google Ads", desc: "Capture a intenção de compra exata no momento em que o cliente pesquisa pelo seu serviço." },
          { icon: Megaphone, title: "Social Ads", desc: "Anúncios visuais impactantes no Instagram, Facebook e TikTok com segmentação comportamental." },
          { icon: PieChart, title: "Gestão de ROI", desc: "Foco obsessivo em reduzir o custo por aquisição (CPA) e aumentar o retorno (ROAS)." },
          { icon: RefreshCw, title: "Remarketing", desc: "Estratégias para recuperar visitantes que não compraram de primeira, aumentando a conversão final." }
        ]}
      />
    </>
  );
};

export default Features;