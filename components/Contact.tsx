import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { analyzeProjectIdea } from '../services/geminiService';
import { GeminiAnalysisResponse } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://hook.us2.make.com/sxx335wc73rrv864c7370fmxeceaypxn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectDescription: formData.projectDescription,
        createdAt: new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
          }).format(new Date()),
        source: "Landing React",
        token: "iblanco_landing_2025" 
      })
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar formulário");
    }
    setSubmitted(true);

  } catch (error) {
    console.error("Submit error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="contact" className="py-24 bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Vamos <span className="text-brand-orange">conversar?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Preencha o formulário e nossos especialistas entrarão em contato para agendar um diagnóstico gratuito do seu negócio.
            </p>
            
            <div className="space-y-6">
                <div 
                  onMouseMove={handleMouseMove}
                  className="group relative p-6 bg-[#232323] rounded-xl border border-white/10 hover:border-brand-orange transition-all duration-300 overflow-hidden"
                >
                    <div 
                      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                      style={{
                        background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255, 107, 0, 0.25), transparent 40%)`
                      }}
                    />
                    <div className="relative z-10">
                        <h3 className="text-white font-bold mb-2">Atendimento</h3>
                        <p className="text-gray-400 group-hover:text-white transition-colors">Segunda a Sexta: 9h às 19h</p>
                    </div>
                </div>
                <div 
                  onMouseMove={handleMouseMove}
                  className="group relative p-6 bg-[#232323] rounded-xl border border-white/10 hover:border-brand-orange transition-all duration-300 overflow-hidden"
                >
                    <div 
                      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                      style={{
                        background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255, 107, 0, 0.25), transparent 40%)`
                      }}
                    />
                    <div className="relative z-10">
                        <h3 className="text-white font-bold mb-2">Localização</h3>
                        <p className="text-gray-400 group-hover:text-white transition-colors">Av. Conselheiro Nébias, 444, CJ. 1105 - Santos - SP</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="seu@email.com"
                    />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="(00) 00000-0000"
                    />
                    </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-400 mb-2">
                    Descreva seu projeto ou desafio <span className="text-brand-orange text-xs ml-2">(Análise IA Iblanco)</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Ex: Tenho uma loja de roupas e quero aumentar as vendas online..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" /> Processando...
                    </>
                  ) : (
                    <>
                        Enviar mensagem <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-gray-400 mb-8">Obrigado pelo contato, {formData.name}. Nossa equipe retornará em breve.</p>
        
                <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectDescription: ''
                       });
                    }}
                    className="mt-8 text-sm text-gray-500 hover:text-white underline transition-colors"
                >
                    Enviar outra mensagem
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;