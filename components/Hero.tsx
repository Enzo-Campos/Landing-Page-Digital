import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [textStage, setTextStage] = useState(0);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  const fullText1 = "Transforme sua presença ";
  const fullText2 = "digital em ";
  const fullText3 = "resultados reais";
  const fullText4 = " para o seu negócio";

  useEffect(() => {
    // Typewriter logic
    const typeSpeed = 50;
    
    let currentTimeout: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (textStage === 0) {
        if (text1.length < fullText1.length) {
          currentTimeout = setTimeout(() => {
            setText1(fullText1.slice(0, text1.length + 1));
          }, typeSpeed);
        } else {
          setTextStage(1);
        }
      } else if (textStage === 1) {
        if (text2.length < fullText2.length) {
          currentTimeout = setTimeout(() => {
            setText2(fullText2.slice(0, text2.length + 1));
          }, typeSpeed);
        } else {
          setTextStage(2);
        }
      } else if (textStage === 2) {
        if (text3.length < fullText3.length) {
          currentTimeout = setTimeout(() => {
            setText3(fullText3.slice(0, text3.length + 1));
          }, typeSpeed);
        } else {
          setTextStage(3);
        }
      } else if (textStage === 3) {
        if (text4.length < fullText4.length) {
          currentTimeout = setTimeout(() => {
            setText4(fullText4.slice(0, text4.length + 1));
          }, typeSpeed);
        } else {
          setTextStage(4); // Finished
        }
      }
    };

    typeWriter();

    return () => clearTimeout(currentTimeout);
  }, [text1, text2, text3, text4, textStage]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-brand-black">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
          <iframe
            src="https://player.vimeo.com/video/1144514824?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="
              absolute top-1/2 left-1/2
              w-[177.77vh] h-[100vh]
              min-w-[100vw] min-h-[56.25vw]
              -translate-x-1/2 -translate-y-1/2
              pointer-events-none
            "
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
      
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[1px]"></div>

          {/* Decorative Gradients */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-orange/20 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[100px]"></div>
    </div>


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/40 border border-orange-500/30 backdrop-blur-md mb-8 animate-fade-in-up hover:border-brand-orange/60 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-bold text-orange-100 tracking-wider uppercase font-sans">Transforme visitantes em clientes</span>
        </div>
        
        {/* Decreased font size as requested */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.15] text-white font-display  min-h-[160px] md:min-h-[200px] lg:min-h-[240px] flex flex-col justify-center">
          <span>
            {text1}
            {textStage === 0 && <span className="animate-blink text-white">_</span>}
            <br className="hidden md:block"/>
          </span>
          <span>
            {text2}
            {textStage === 1 && <span className="animate-blink text-white">_</span>}
            <span className="text-brand-orange inline-block relative">
              {text3}
              {textStage === 2 && <span className="animate-blink text-white">_</span>}
              {textStage >= 3 && (
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange opacity-30 animate-fade-in-up" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              )}
            </span>
          </span>
          <span>
             {text4}
             {(textStage === 3 || textStage === 4) && <span className="animate-blink text-white">_</span>}
          </span>
        </h1>
        
        <p className="max-w-3xl text-lg text-gray-200 mb-10 leading-relaxed font-light font-sans drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Maximize seu retorno sobre investimento. Atraia clientes qualificados, aumente seu faturamento e conquiste liderança no seu mercado com estratégias comprovadas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <a 
            href="#contact" 
            className="group inline-flex justify-center items-center px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transform hover:-translate-y-1"
          >
            Quero transformar meu negócio
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;