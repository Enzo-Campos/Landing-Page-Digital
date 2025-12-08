import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Quanto tempo leva para ver resultados com marketing digital?", 
      a: "Os resultados variam conforme a estratégia. Tráfego pago pode gerar resultados em dias, enquanto SEO e GEO são investimentos de médio prazo (3-6 meses) com retorno contínuo e crescente. Redes sociais começam a engajar em semanas, com conversão progressiva." 
    },
    { 
      q: "Qual o investimento mínimo para começar?", 
      a: "O investimento é personalizado conforme seus objetivos e mercado. Oferecemos soluções escaláveis desde pequenas empresas até grandes operações. Agende uma reunião para receber uma proposta sob medida para seu negócio." 
    },
    { 
      q: "Vocês trabalham com todos os segmentos?", 
      a: "Sim! Com mais de 35 anos de experiência, atendemos diversos segmentos, com especialização no canal farma. Nossa metodologia se adapta às particularidades de cada mercado, garantindo estratégias eficazes independente do nicho." 
    },
    { 
      q: "Como funciona o processo de trabalho?", 
      a: "Seguimos nossa metodologia comprovada, que inclui: Análise de mercado, Definição de público-alvo, Estratégia personalizada, Criação de identidade, Desenvolvimento de site e redes, Otimização SEO/GEO, Tráfego pago e Mensuração de resultados. Você acompanha cada fase." 
    },
    { 
      q: "Preciso contratar todos os serviços ou posso escolher apenas alguns?", 
      a: "Você pode contratar serviços individuais conforme sua necessidade. No entanto, recomendamos uma estratégia integrada para maximizar resultados. Durante a consultoria, identificamos as prioridades para seu negócio e sugerimos o melhor caminho." 
    },
    { 
      q: "Como é medido o ROI (Retorno sobre Investimento)?", 
      a: "Utilizamos ferramentas de analytics modernas e IA para rastrear cada ação: tráfego, conversões, vendas, custo, etc. Você recebe relatórios periódicos com métricas claras que demonstram o retorno real do investimento em marketing digital." 
    },
    { 
      q: "O que é GEO e por que é importante?", 
      a: "GEO (Generative Engine Optimization) é a otimização para inteligências artificiais como ChatGPT, Gemini e outras ferramentas de IA. À medida que mais pessoas usam IAs para buscar informações, estar otimizado para ser recomendado por elas é crucial para dominar a busca do futuro." 
    },
    { 
      q: "Oferecem suporte contínuo após a implementação?", 
      a: "Sim! Marketing digital é um processo contínuo de otimização. Oferecemos planos de gestão e suporte para manter suas estratégias sempre atualizadas, monitorar performance, ajustar campanhas e garantir que você continue crescendo consistentemente." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-full mb-4">
            <MessageCircleQuestion className="text-brand-orange w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            Perguntas <span className="text-brand-orange">Frequentes</span>
          </h2>
          <p className="text-gray-400 font-sans">Tire suas dúvidas sobre nossos serviços e metodologia</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-orange bg-brand-black shadow-glow' : 'border-white/5 bg-brand-black/50 hover:bg-brand-black'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-sm md:text-lg font-display transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.q}
                </span>
                {openIndex === index ? <ChevronUp className="text-brand-orange shrink-0" /> : <ChevronDown className="text-gray-500 shrink-0" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 font-sans">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;