import React from 'react';
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="text-2xl font-black tracking-tighter text-white mb-6">
             <a href="#" className="flex items-center gap-2 group">
                <img className="max-w-[200px]" src="https://iblanco.com.br/wp-content/uploads/2023/08/NOVA-MARCA-IBLANCO-2023-BRANCO-LARANJA-HORIZONTAL.png" alt="" />
            </a>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Transformando negócios através do marketing digital há mais de 35 anos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Serviços</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="https://iblanco.com.br/consultoria-estrategica/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Consultoria</a></li>
              <li><a href="https://iblanco.com.br/campanhas" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Campanhas</a></li>
              <li><a href="https://iblanco.com.br/branding/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Branding</a></li>
              <li><a href="https://marcasproprias.iblanco.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Marcas Próprias</a></li>
              <li><a href="https://iblanco.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors font-bold mt-2 inline-block">Veja tudo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Redes Sociais</h4>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="https://www.instagram.com/iblancomarketing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#232323] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/iblancomarketing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#232323] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5513981339217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#232323] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                title="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a 
                href="mailto:comercial@iblanco.com.br" 
                className="w-10 h-10 rounded-lg bg-[#232323] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                title="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contato</h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-orange" /> 
                <a href="mailto:contato@iblanco.com.br" className="hover:text-brand-orange transition-colors">
                  contato@iblanco.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-orange" /> 
                <a 
                  href="https://api.whatsapp.com/send/?phone=5513981339217&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+reuni%C3%A3o&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  (13) 98133-9217
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-orange shrink-0 mt-0.5" /> 
                <a 
                  href="https://maps.app.goo.gl/bpP1eJy5464XE9xT9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Av. Conselheiro Nébias, 444, CJ. 1105 - Santos - SP
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-[10px]">
            &copy; 2025 Iblanco Marketing Digital. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;